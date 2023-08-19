import { PropsWithChildren } from "react";
import { Box } from "../Box";

export function EmptyMessage({ children }: PropsWithChildren) {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      {children}
    </Box>
  );
}
