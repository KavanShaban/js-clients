import { findOneOperation, GadgetRecord, get, hydrateRecord, LimitToKnownKeys, Select } from "@gadgetinc/api-client-core";
import { useMemo } from "react";
import { useQuery, UseQueryResponse } from "urql";
import { FindOneFunction } from "./GadgetFunctions";
import { OptionsType } from "./OptionsType";
import { useStructuralMemo } from "./useStructuralMemo";

/**
 * React hook to fetch a Gadget record using the `findOne` method of a given manager.
 *
 * @param manager Gadget model manager to use
 * @param id id of the record to fetch
 * @param options options for selecting the fields in the result
 */
export const useFindOne = <
  OptionsT extends OptionsType, // currently necessary for Options to be a narrow type (e.g., `true` instead of `boolean`)
  F extends FindOneFunction<OptionsT, any, any, any>,
  Options extends F["optionsType"]
>(
  manager: { findOne: F },
  id: string,
  options?: LimitToKnownKeys<Options, F["optionsType"]>
): UseQueryResponse<GadgetRecord<Select<Exclude<F["schemaType"], null | undefined>, Options["select"]>>> => {
  const memoizedOptions = useStructuralMemo(options);
  const plan = useMemo(() => {
    return findOneOperation(
      manager.findOne.operationName,
      id,
      manager.findOne.defaultSelection,
      manager.findOne.modelApiIdentifier,
      memoizedOptions
    );
  }, [manager, id, memoizedOptions]);

  const [result, refresh] = useQuery({ query: plan.query, variables: plan.variables });

  let data = result.data;
  if (data) {
    data = hydrateRecord(result, get(result.data, [manager.findOne.operationName]));
  }

  return [
    {
      ...result,
      data,
    },
    refresh,
  ];
};
