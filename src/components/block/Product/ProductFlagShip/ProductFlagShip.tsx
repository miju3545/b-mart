import { ReactNode } from "react";
import { Heading } from "@/components/atom/Heading";
import { Box } from "@/components/atom/Box";

type Props = {
  title: ReactNode;
};
export function ProductFlagShip({ title }: Props) {
  return (
    <Box display="flex" flexDirection="column" gap={10}>
      <Heading level={3}>{title}</Heading>
    </Box>
  );
}
