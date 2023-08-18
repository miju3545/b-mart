import { Dispatch, SetStateAction, useState } from "react";
import { Box } from "../Box";

type Props = {
  count: number;
  setCount: (value: number) => void;
  min?: number;
  max?: number;
};
export function Counter({ count, setCount, min = 1, max = 10 }: Props) {
  const disableDecrement = count <= min;
  const disableIncrement = count >= max;
  return (
    <Box display="flex" alignItems="center" gap={5}>
      <button type="button" onClick={() => setCount(count - 1)} disabled={disableDecrement}>
        -
      </button>
      <input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} disabled />
      <button type="button" onClick={() => setCount(count + 1)} disabled={disableIncrement}>
        +
      </button>
    </Box>
  );
}
