import { DropdownOption, DropdownProps } from "@/types/components/types";
import { useMemo, useState } from "react";

export const useDropdown = ({
  options,
  value,
  defaultValue,
  onChange,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");

  const currentValue = value ?? internalValue;
  const selectedOption = useMemo(
    () => options.find((option) => option.value === currentValue),
    [currentValue, options],
  );

  const handleSelect = (option: DropdownOption) => {
    if (value === undefined) {
      setInternalValue(option.value);
    }

    onChange?.(option.value, option);
    setOpen(false);
  };

  return {
    open,
    setOpen,
    currentValue,
    selectedOption,
    handleSelect,
  };
};
