import { useEffect, useState } from "react";

type SelectType = { [key: number | string]: boolean };
export const useSelect = <T extends { id: number }>(list: Array<T>) => {
  const [checked, setChecked] = useState<SelectType>({});

  const toggleSelected = (key: number) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] ? true : false }));
  };

  useEffect(() => {
    setChecked(list.reduce((acc, cur) => ({ ...acc, [cur.id]: true }), {}));
  }, [list.length]);

  const selected: SelectType = {
    all: list.length > 0 && Object.values(checked).every((v) => v === true),
    ...checked
  };

  return {
    selected,
    toggleSelected,
    toggleSelectedAll: () => setChecked(list.reduce((acc, cur) => ({ ...acc, [cur.id]: !selected.all }), {}))
  };
};
