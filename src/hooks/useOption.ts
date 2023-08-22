import { useEffect, useState } from "react";

type SelectType = { [key: number | string]: boolean };
export const useOption = <T extends { id: number }>(list: Array<T>) => {
  const [checked, setChecked] = useState<SelectType>({});

  const toggleSelected = (key: number) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] ? true : false }));
  };

  const selected: SelectType = {
    all: list.length > 0 && Object.values(checked).every((v) => v === true),
    ...checked
  };

  useEffect(() => {
    setChecked(list.reduce((acc, cur) => ({ ...acc, [cur.id]: true }), {}));
  }, [list.length]);

  return {
    selected,
    toggleSelected,
    toggleSelectedAll: () => setChecked(list.reduce((acc, cur) => ({ ...acc, [cur.id]: !selected.all }), {}))
  };
};
