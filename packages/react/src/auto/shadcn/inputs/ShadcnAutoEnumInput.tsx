import { XIcon } from "lucide-react";
import React, { useCallback } from "react";
import type { Control } from "../../../useActionForm.js";
import { autoInput } from "../../AutoInput.js";
import { useEnumInputController } from "../../hooks/useEnumInputController.js";
import { ShadcnElements } from "../elements.js";
import { makeShadcnAutoComboInput } from "./ShadcnAutoComboInput.js";

export const makeShadcnAutoEnumInput = ({
  Badge,
  Button,
  Command,
  CommandItem,
  CommandInput,
  Label,
  CommandList,
  CommandEmpty,
  CommandGroup,
  Checkbox,
}: Pick<
  ShadcnElements,
  "Badge" | "Button" | "Command" | "CommandItem" | "CommandList" | "CommandEmpty" | "CommandGroup" | "CommandInput" | "Label" | "Checkbox"
>) => {
  const ShadcnComboInput = makeShadcnAutoComboInput({
    Command,
    CommandInput,
    Label,
    CommandItem,
    CommandList,
    CommandEmpty,
    CommandGroup,
    Checkbox,
  });

  function ShadcnAutoEnumInput(props: { field: string; control?: Control<any>; label?: string }) {
    const { field: fieldApiIdentifier, control, label: labelProp, ...comboboxProps } = props;
    const {
      allowMultiple,
      allowOther,
      onSelectionChange,
      selectedOptions,
      allOptions,
      filteredOptions,
      searchQuery,
      label,
      metadata,
      isError,
      errorMessage,
    } = useEnumInputController({ field: fieldApiIdentifier, control });

    const { value: searchValue, setValue: setSearchValue } = searchQuery;

    let selectedTagsElement = null;
    if (selectedOptions.length > 0) {
      selectedTagsElement = (
        <div className="flex flex-wrap gap-2">
          {selectedOptions.map((tag) => (
            <Badge key={`option-${tag}`} variant={"outline"}>
              {tag}
              <Button variant="ghost" size="icon" onClick={() => onSelectionChange(tag)}>
                <XIcon />
              </Button>
            </Badge>
          ))}
        </div>
      );
    }

    const formatOptionText = useCallback(
      (option: string) => {
        const trimValue = searchValue.trim().toLocaleLowerCase();
        const matchIndex = option.toLocaleLowerCase().indexOf(trimValue);

        if (!searchValue || matchIndex === -1) return option;

        const start = option.slice(0, matchIndex);
        const highlight = option.slice(matchIndex, matchIndex + trimValue.length);
        const end = option.slice(matchIndex + trimValue.length, option.length);

        return (
          <p>
            {start}
            <span className="font-bold">{highlight}</span>
            {end}
          </p>
        );
      },
      [searchValue]
    );

    let emptyStateElement = null;
    if (!allowOther && (!allOptions.length || allOptions.length === 0) && searchValue) {
      emptyStateElement = <CommandEmpty>{`No options found matching "${searchValue}"`}</CommandEmpty>;
    }

    return (
      <ShadcnComboInput
        {...props}
        options={filteredOptions.map((option) => ({ id: option, label: option }))}
        path={label ?? labelProp}
        metadata={metadata}
        label={label ?? labelProp}
        selectedRecordTag={selectedTagsElement}
        onSelect={(option) => {
          onSelectionChange(option.id);
        }}
        isLoading={false}
        checkSelected={(id) => {
          return selectedOptions.includes(id);
        }}
        errorMessage={errorMessage}
        allowMultiple={allowMultiple}
        records={[]}
        allowOther={allowOther}
        onAddExtraOption={(value) => {
          onSelectionChange(value);
        }}
        formatOptionText={formatOptionText}
      />
    );
  }

  return autoInput(ShadcnAutoEnumInput);
};
