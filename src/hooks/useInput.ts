import { SelectOption } from "@/components/atom/FilterBox/FilterBox";
import { useState } from "react";

type UseInputOptions = {
  onChange?: (e?: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};
export function useInput<T>(defaultValue: T, options?: UseInputOptions) {
  const [value, setValue] = useState<T>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    options?.onChange?.(e);
    setValue(e.target.value as unknown as T);
  };

  return { value, onChange, clearValue: () => setValue(defaultValue) };
}

export function useInputs() {
  const [value, setValue] = useState<{ [key: string]: string }>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return { value, onChange, clearValue: (name: string) => setValue((prev) => ({ ...prev, [name]: "" })) };
}
