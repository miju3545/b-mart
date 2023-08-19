import { useState } from "react";

export function useInput<T>(defaultValue: T) {
  const [value, setValue] = useState<T>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
  };

  return { value, onChange, clearValue: () => setValue(defaultValue) };
}

export function useInputs() {
  const [value, setValue] = useState<{ [key: string]: string }>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return { value, onChange, clearValue: (name: string) => setValue((prev) => ({ ...prev, [name]: "" })) };
}
