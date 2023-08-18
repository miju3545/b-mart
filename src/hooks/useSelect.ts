import { useEffect, useState } from "react";

export const useSelect = <T extends { id: number }>(list: Array<T>) => {
  const [checked, setChecked] = useState<{ [key: number]: boolean }>({});
  const [checkedAll, setCheckedAll] = useState(false);

  const toggleChecked = (key: number) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] ? true : false }));
  };

  useEffect(() => {
    setChecked(list.reduce((acc, cur) => ({ ...acc, [cur.id]: false }), {}));
  }, [list]);

  useEffect(() => {
    const isCheckedAll = Object.values(checked).every((value) => value);
    setCheckedAll(isCheckedAll);
  }, [checked]);

  useEffect(() => {
    setChecked(list.reduce((acc, cur) => ({ ...acc, [cur.id]: checkedAll }), {}));
  }, [checkedAll]);

  return { checked, toggleChecked, checkedAll, toggleCheckedAll: () => setCheckedAll((prev) => !prev) };
};
