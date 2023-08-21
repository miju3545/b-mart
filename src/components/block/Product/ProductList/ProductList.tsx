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
  start?: number;
  limit?: number;
  refetchCallback?: () => void;
};
export function ProductList({ title, list, col = 1, start = 1, limit = 6, refetchCallback }: Props) {
  return (
    <Box display="flex" flexDirection="column" width="100%" gap={10}>
      {title && <Heading level={3}>{title}</Heading>}
      <ul className={cx("card-list", `col-${col}`)}>
        {list.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} size="lg" responsive />
        ))}
      </ul>
      <Box display="flex">
        <button type="button" onClick={refetchCallback}>
          지금 필요한...
        </button>
        <span>
          다른 상품 보기({start}/{list.length / limit})
        </span>
      </Box>
    </Box>
  );
}
