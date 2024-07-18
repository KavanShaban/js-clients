import { useCallback, useState } from "react";
import { debounce } from "./utils.js";

export const useDebouncedSearch = (props: { clearCursor: () => void; debounceMilliseconds?: number }) => {
  const { clearCursor, debounceMilliseconds } = props;
  const [searchValue, setSearchValue] = useState<string>("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState<string>("");

  const debouncedSetSearchValue = useCallback(
    debounce((query: string) => {
      setDebouncedSearchValue(query);
      clearCursor();
    }, debounceMilliseconds),
    []
  );

  const search = {
    value: searchValue,
    debouncedValue: debouncedSearchValue,
    set: (query: string) => {
      setSearchValue(query);
      debouncedSetSearchValue(query);
    },
    clear: () => {
      // Instant without debounce
      setSearchValue("");
      setDebouncedSearchValue("");
      clearCursor();
    },
  };

  return search;
};
