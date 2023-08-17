import { PropsWithChildren } from "react";
import { Box, BoxProps } from "../Box";

export function Scrollable({ children, ...rest }: PropsWithChildren<BoxProps>) {
  return (
    <Box style={{ overflowX: "auto" }} display="flex" height="100%" gap={10} {...rest}>
      {children}
    </Box>
  );
}
