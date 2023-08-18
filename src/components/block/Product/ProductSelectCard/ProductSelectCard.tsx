import { CartProduct } from "@/lib/dto/cart";
import { Counter } from "@/components/atom/Counter/Counter";
import { Heading } from "@/components/atom/Heading";
import { ImageWithFallback } from "@/components/atom/ImageWithFallback";
import { CartContext } from "@/contexts/index";
import { useContext, useState } from "react";
import { Box } from "@/components/atom/Box";
import Link from "next/link";

type Props = {
  product: CartProduct;
  onChange: () => void;
  checked: boolean;
};
export function ProductSelectCard({ product, onChange, checked }: Props) {
  const { id, title, imageUrl, price, discountPercent, discountPrice, quantity } = product;
  const [count, setCount] = useState(quantity);
  const { useUpdateCartItems, cart } = useContext(CartContext);
  const { mutate } = useUpdateCartItems();

  const handleCountChange = (number: number) => {
    setCount(number);
    mutate(cart.items.map((item) => (item.id === id ? { ...item, quantity: number } : item)));
  };

  return (
    <Box width="100%" display="flex" flexDirection="column" gap={10} style={{ border: "1px solid gray" }}>
      <Box>
        <Heading level={2}>
          <Link href={`/products/${id}`}>{title}</Link>
        </Heading>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" gap={5} width="100%">
        <label style={{ display: "flex" }}>
          <input type="checkbox" onChange={onChange} checked={checked} />
          <Heading level={4}>{title}</Heading>
        </label>
        <button type="button" onClick={() => mutate(cart.items.filter((item) => item.id !== id))}>
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
