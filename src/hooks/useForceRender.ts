import { useReducer } from "react";

export function useForceRender() {
  const [renderFlag, forceRender] = useReducer((p) => !p, false);
  return { renderFlag, forceRender };
}
