import type { DefaultSelection, FindManyFunction, GadgetRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import type { OperationContext } from "@urql/core";
import { omit } from "lodash-es";
import { useCallback, useState } from "react";
import type { SearchResult } from "./useDebouncedSearch.js";
import { useDebouncedSearch } from "./useDebouncedSearch.js";
import { useFindMany } from "./useFindMany.js";
import type { ErrorWrapper, OptionsType, ReadOperationOptions } from "./utils.js";

export interface PaginationResult {
  hasNextPage: boolean | undefined;
  hasPreviousPage: boolean | undefined;
  variables: {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
  };
  pageSize: number;
  goToNextPage(): void;
  goToPreviousPage(): void;
}

export interface ListOptions {
  pageSize?: number;
}

export type ListResult<Data> = [
  (
    | {
        data: Data;
        page: PaginationResult;
        search: SearchResult;
        fetching: boolean;
        error?: ErrorWrapper;
      }
    | { data: undefined; page: PaginationResult; search: SearchResult; fetching: boolean; error?: ErrorWrapper }
  ),
  (opts?: Partial<OperationContext>) => void
];

export const useList = <
  GivenOptions extends OptionsType,
  SchemaT,
  F extends FindManyFunction<GivenOptions, any, SchemaT, any>,
  Options extends F["optionsType"] & ReadOperationOptions & ListOptions
>(
  manager: { findMany: F },
  options?: LimitToKnownKeys<Options, F["optionsType"] & ReadOperationOptions & ListOptions>
): ListResult<
  Array<
    GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, DefaultSelection<F["selectionType"], Options, F["defaultSelection"]>>>
  >
> => {
  const [cursor, setCursor] = useState<string | undefined>();
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const clearCursor = useCallback(() => setCursor(undefined), []);
  const { ...search } = useDebouncedSearch({ clearCursor });

  const pageSize = options?.pageSize ?? 50;

  let variables;
  if (direction == "forward") {
    variables = {
      first: pageSize,
      after: cursor,
    };
  } else {
    variables = {
      last: pageSize,
      before: cursor,
    };
  }

  const findManyOptions = omit(options, ["pageSize"]);

  const [{ data, fetching, error }, refresh] = useFindMany(manager, {
    ...findManyOptions,
    ...(variables as any),
    ...(search.debouncedValue && { search: search.debouncedValue }),
  });

  const goToNextPage = useCallback(() => {
    if (data && data.hasNextPage) {
      setDirection("forward");
      setCursor(data.endCursor);
    } else {
      console.warn("can't navigate to next page currently, no next page available");
    }
  }, [data]);

  const goToPreviousPage = useCallback(() => {
    if (data && data.hasPreviousPage) {
      setDirection("backward");
      setCursor(data.startCursor);
    } else {
      console.warn("can't navigate to previous page currently, no previous page available");
    }
  }, [data]);

  const records = data?.map((record) => record);

  const page = {
    pageSize,
    goToNextPage,
    goToPreviousPage,
    hasNextPage: data?.hasNextPage,
    hasPreviousPage: data?.hasPreviousPage,
    variables,
  };

  return [{ data: records, fetching, page, search, error }, refresh];
};
