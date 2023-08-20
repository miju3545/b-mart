import { SelectOption } from "@/components/atom/FilterBox/FilterBox";
import { useState } from "react";

type UseSelectOptions = {
  onChange?: (value: SelectOption) => void;
};

export function useSelectInput(defaultValue?: SelectOption, options?: UseSelectOptions) {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const name = selectedOption.getAttribute("data-custom") || "";
    const target = { value: e.target.value, name };
    options?.onChange?.(target);
    setValue(target);
  };

  return { value, onChange, clearValue: () => setValue(defaultValue) };
}
