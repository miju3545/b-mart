import { Box } from "@/components/atom/Box";
import { Counter } from "@/components/atom/Counter/Counter";
import { Heading } from "@/components/atom/Heading";
import { ImageWithFallback } from "@/components/atom/ImageWithFallback";
import { CartContext } from "@/contexts/index";
import { Cart, CartProduct } from "@/lib/dto/cart";
import { useContext, useState } from "react";

type Props = {
  list: Cart["list"];
};

export function ProductSelectTable({ list }: Props) {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" style={{ padding: "20px 0" }}>
        <label>
          <input type="checkbox" />
          <span>선택 해제</span>
        </label>
        <button type="button" onClick={() => {}}>
          선택 비우기
        </button>
      </Box>
      <Box display="grid" gap={10}>
        {list.map((item) => (
          <ProductSelectCard {...item} />
        ))}
      </Box>
    </Box>
  );
}

function ProductSelectCard({ id, title, imageUrl, price, discountPercent, discountPrice, quantity }: CartProduct) {
  const [count, setCount] = useState(quantity);
  const { updateCartItems, cart } = useContext(CartContext);
  const handleCountChange = (number: number) => {
    setCount(number);
    updateCartItems(cart.list.map((item) => (item.id === id ? { ...item, quantity: number } : item)));
  };

  return (
    <Box width="100%" display="flex" flexDirection="column" gap={10} style={{ border: "1px solid gray" }}>
      <Box>
        <Heading level={2}>{title}</Heading>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" gap={5} width="100%">
        <Box display="flex" alignItems="center">
          <input type="checkbox" />
          <Heading level={4}>{title}</Heading>
        </Box>
        <button type="button" onClick={() => updateCartItems(cart.list.filter((item) => item.id !== id))}>
          삭제
        </button>
      </Box>
      <Box display="flex">
        <Box width="150px" height="150px">
          <ImageWithFallback src={imageUrl} alt={title} width={50} height={50} style={{ background: "gray" }} />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="space-between">
          <Box>
            <p>({price}원)</p>
            <strong>{discountPrice}원</strong>
          </Box>
          <Counter count={count} setCount={handleCountChange} />
        </Box>
      </Box>
    </Box>
  );
}
