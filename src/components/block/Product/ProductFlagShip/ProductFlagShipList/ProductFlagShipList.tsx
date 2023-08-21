import classNames from "classnames/bind";
import style from "./ProductFlagShipList.module.scss";
import { Box } from "@/components/atom/Box";
import { Product } from "@/lib/dto";
import { ProductFlagShipCard } from "../ProductFlagShipCard";
const cx = classNames.bind(style);

type Props = {
  list: Product[];
  col?: number;
  show?: number;
};

export function ProductFlagShipList({ list, col = 1, show }: Props) {
  return (
    <Box display="flex" flexDirection="column" width="100%" gap={10}>
      <ul className={cx("card-list")} style={{ gridTemplateColumns: `repeat(${col}, 1fr)` }}>
        {list.slice(0, show).map((product) => (
          <ProductFlagShipCard key={product.id} product={product} size="lg" responsive />
        ))}
      </ul>
    </Box>
  );
}
