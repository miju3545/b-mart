import { PropsWithChildren } from "react";
import { Box } from "../Box";

export function EmptyMessage({ children }: PropsWithChildren) {
  return <Box>{children}</Box>;
}
