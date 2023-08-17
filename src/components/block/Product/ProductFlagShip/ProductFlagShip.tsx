import { ReactNode } from "react";
import { Heading } from "@/components/atom/Heading";
import { Box } from "@/components/atom/Box";
import { Product } from "@/lib/dto";
import { ProductCard } from "../ProductCard/ProductCard";

type Props = {
  title: ReactNode;
  list: Product[];
};
export function ProductFlagShip({ title, list }: Props) {
  return (
    <Box display="flex" flexDirection="column" gap={10}>
      <Heading level={3}>{title}</Heading>
      <ul>
        {list.map((product) => (
          <ProductCard key={product.id} product={product} size="sm" />
        ))}
      </ul>
    </Box>
  );
}
