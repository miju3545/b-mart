import { ReactNode } from "react";
import { Box } from "@/components/atom/Box";
import { Heading } from "@/components/atom/Heading";
import { IconButton } from "@/components/atom/IconButton";

type Props = {
  title: ReactNode;
  hasViewMore?: boolean;
};
export function ProductScrollable({ title, hasViewMore = false }: Props) {
  return (
    <Box display="flex" flexDirection="column" gap={10} height={200} backgroundColor="lightGray">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Heading level={3}>{title}</Heading>
        {hasViewMore && <IconButton icon="더보기 ＞" onClick={() => {}} />}
      </Box>
    </Box>
  );
}
