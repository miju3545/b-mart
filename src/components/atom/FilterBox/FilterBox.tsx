import { Box } from "../Box";
import { useSelectInput } from "@/hooks/useSelectInput";

export type SelectOption = {
  name: string;
  value: string;
};
export type FilterBoxProps = {
  options: SelectOption[];
  defaultOption?: SelectOption;
  placeholder?: string;
  onChange?: (value: SelectOption) => void;
};

export function FilterBox({ options, defaultOption, placeholder, onChange }: FilterBoxProps) {
  const { value: target, onChange: onChangeTarget } = useSelectInput(defaultOption, { onChange });

  return (
    <Box>
      <select value={placeholder || target?.value} onChange={onChangeTarget}>
        {options?.map((item) => (
          <option key={item.value} value={item.value} data-custom={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </Box>
  );
}
