import classNames from "classnames/bind";
import style from "./ProductList.module.scss";
import { ReactNode, useState } from "react";
import { Box } from "@/components/atom/Box";
import { Heading } from "@/components/atom/Heading";
import { Product } from "@/lib/dto";
import { ProductCard } from "../ProductCard/ProductCard";
const cx = classNames.bind(style);

type Props = {
  title?: ReactNode;
  list: Product[];
  col?: number;
  showPagination?: boolean;
};
export function ProductList({ title, list, col = 1, showPagination = false }: Props) {
  const [start, setStart] = useState(0); // start page
  const limit = 6;
  const currentPage = Math.ceil(start / limit) + 1;
  const totalPage = Math.ceil(list.length / limit);
  const currentData = showPagination ? list.slice(start, start + limit) : list;

  return (
    <Box display="flex" flexDirection="column" width="100%" gap={10}>
      {title && <Heading level={3}>{title}</Heading>}
      <ul className={cx("card-list", `col-${col}`)}>
        {currentData.map((product) => (
          <ProductCard key={product.id} product={product} size="lg" responsive />
        ))}
      </ul>
      {showPagination && (
        <button type="button" onClick={() => setStart((prev) => prev + limit)} disabled={currentPage >= totalPage}>
          다른 상품 보기({currentPage}/{totalPage})
        </button>
      )}
    </Box>
  );
}
