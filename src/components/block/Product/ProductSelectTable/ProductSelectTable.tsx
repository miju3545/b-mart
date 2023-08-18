import { Box } from "@/components/atom/Box";
import { ProductSelectCard } from "../ProductSelectCard";
import { CartProduct } from "@/lib/dto/cart";
import { useSelect } from "@/hooks/useSelect";
import { useContext, useEffect } from "react";
import { CartContext } from "@/contexts/index";

type Props = {
  list: Array<CartProduct>;
};

export function ProductSelectTable({ list }: Props) {
  const { setCurrentPrice, useUpdateCartItems } = useContext(CartContext);
  const { selected, toggleSelected, toggleSelectedAll } = useSelect(list);
  const { mutate } = useUpdateCartItems();
  const calculatePrice = () => {
    let price = 0;
    list.forEach((item) => {
      if (selected[item.id]) {
        price += item.price * item.quantity;
      }
    });
    setCurrentPrice(price);
  };

  useEffect(() => {
    calculatePrice();
  }, [selected]);

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" style={{ padding: "20px 0" }}>
        <label>
          <input type="checkbox" checked={selected.all} onChange={toggleSelectedAll} />
          <span>전체 선택</span>
        </label>
        <Box display="flex" gap={10}>
          <button type="button" onClick={() => mutate(list.filter((item) => !selected[item.id]))}>
            선택 비우기
          </button>
          <button type="button" onClick={() => mutate([])}>
            전체 비우기
          </button>
        </Box>
      </Box>
      <Box display="grid" gap={10}>
        {list.length === 0 && <p>장바구니가 비었습니다.</p>}
        {list.map((item) => (
          <ProductSelectCard
            key={item.id}
            product={item}
            onChange={() => toggleSelected(item.id)}
            checked={selected[item.id]}
          />
        ))}
      </Box>
    </Box>
  );
}
