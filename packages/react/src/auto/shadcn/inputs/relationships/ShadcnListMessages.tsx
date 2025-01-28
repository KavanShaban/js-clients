import React from "react";
import { getErrorMessage } from "../../../../utils.js";
import type { ShadcnElements } from "../../elements.js";

export interface SelectableOptionProps {
  id: string;
  label: React.ReactNode;
  selected?: boolean;
  onSelect?: (id: string) => void;
  allowMultiple?: boolean;
  formatOptionText?: (option: string) => React.ReactNode;
}

export const makeShadcnListMessages = ({
  CommandEmpty,
  CommandItem,
  Checkbox,
  Label,
}: Pick<ShadcnElements, "CommandEmpty" | "CommandItem" | "Checkbox" | "Label">) => {
  function NoRecordsMessage(props: { message?: string }) {
    const { message = "No records found" } = props;
    return <CommandEmpty>{message}</CommandEmpty>;
  }

  function AddExtraOption(props: { message?: string; onSelect?: () => void }) {
    const { message = "Add extra option", onSelect } = props;
    return (
      <CommandItem
        onMouseDown={(e: React.MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === "Enter") {
            onSelect?.();
          }
        }}
        onSelect={() => {
          onSelect?.();
        }}
      >
        {message}
      </CommandItem>
    );
  }

  function ShadcnSelectableOption(props: SelectableOptionProps) {
    const { label, id, selected, onSelect, allowMultiple, formatOptionText } = props;
    const className = selected ? "bg-muted" : "";

    if (typeof label === "string") {
      return (
        <CommandItem
          key={id}
          id={id}
          selected={selected}
          className={className}
          onMouseDown={(e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onSelect={() => {
            onSelect?.(id);
          }}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === "Enter") {
              onSelect?.(id);
            }
          }}
        >
          {allowMultiple ? (
            <>
              <Checkbox
                id={id}
                checked={selected}
                onCheckedChange={(_state) => {
                  onSelect?.(id);
                }}
              />
              <Label htmlFor={id} className={"flex-1 ml-2"}>
                {formatOptionText ? formatOptionText(label) : label}
              </Label>
            </>
          ) : formatOptionText ? (
            formatOptionText(label)
          ) : (
            label
          )}
        </CommandItem>
      );
    }

    return null;
  }

  function ListMessage(props: { message: string; onSelect?: () => void }) {
    const { message, onSelect } = props;
    return (
      <CommandEmpty
        onMouseDown={(e: React.MouseEvent) => {
          onSelect?.();
        }}
      >
        {message}
      </CommandEmpty>
    );
  }

  return {
    ListMessage,
    NoRecordsMessage,
    ShadcnSelectableOption,
    getErrorMessage,
    AddExtraOption,
  };
};
