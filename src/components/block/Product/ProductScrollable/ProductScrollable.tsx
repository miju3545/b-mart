import { ReactNode } from "react";
import { Box } from "@/components/atom/Box";
import { Heading } from "@/components/atom/Heading";
import { IconButton } from "@/components/atom/IconButton";
import { Product } from "@/lib/dto";
import { ProductCard } from "../ProductCard/ProductCard";
import { Scrollable } from "@/components/atom/Scrollable/Scrollable";

type Props = {
  title: ReactNode;
  list: Product[];
  hasViewMore?: boolean;
  show?: number;
};
export function ProductScrollable({ title, hasViewMore = false, list, show = 6 }: Props) {
  return (
    <Box display="flex" flexDirection="column" gap={10} backgroundColor="lightGray">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Heading level={3}>{title}</Heading>
        {hasViewMore && <IconButton icon="더보기 ＞" onClick={() => {}} />}
      </Box>
      <Scrollable>
        {list.slice(0, show)?.map((product) => <ProductCard key={product.id} product={product} size="sm" />)}
      </Scrollable>
    </Box>
  );
}
