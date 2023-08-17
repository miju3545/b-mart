import classNames from "classnames/bind";
import style from "./ProductList.module.scss";
import { ReactNode } from "react";
import { Box } from "@/components/atom/Box";
import { Heading } from "@/components/atom/Heading";
import { Product } from "@/lib/dto";
import { ProductCard } from "../ProductCard/ProductCard";
const cx = classNames.bind(style);

type Props = {
  title?: ReactNode;
  list: Product[];
  col?: number;
};
export function ProductList({ title, list, col = 2 }: Props) {
  return (
    <Box display="flex" flexDirection="column" gap={10} height="200px" backgroundColor="lightGray">
      {title && <Heading level={3}>{title}</Heading>}
      <ul style={{ display: "grid", gridTemplateColumns: `repeat(${col}, 1fr)` }}>
        {list.map((product) => (
          <ProductCard key={product.id} product={product} size="lg" />
        ))}
      </ul>
    </Box>
  );
}
