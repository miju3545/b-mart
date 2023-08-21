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
  onNextPage?: (start: number) => void;
};
export function ProductList({ title, list, col = 1, start = 0, limit = 6, onNextPage }: Props) {
  const currentPage = Math.ceil(start / limit) + 1;
  const totalPage = Math.ceil(list.length / limit) + 1;
  return (
    <Box display="flex" flexDirection="column" width="100%" gap={10}>
      {title && <Heading level={3}>{title}</Heading>}
      <ul className={cx("card-list", `col-${col}`)}>
        {list.map((product) => (
          <ProductCard key={product.id} product={product} size="lg" responsive />
        ))}
      </ul>
      <Box display="flex">
        <button type="button" onClick={() => onNextPage?.(start + limit)} disabled={currentPage >= totalPage}>
          다른 상품 보기({currentPage}/{totalPage})
        </button>
      </Box>
    </Box>
  );
}
