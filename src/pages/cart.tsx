import { Box } from "@/components/atom/Box";
import { Counter } from "@/components/atom/Counter/Counter";
import { Heading } from "@/components/atom/Heading";
import { IconButton } from "@/components/atom/IconButton";
import { ImageWithFallback } from "@/components/atom/ImageWithFallback";
import { Loading } from "@/components/atom/Loading";
import { Topbar } from "@/components/block/Topbar";
import { CartContext } from "@/contexts/index";
import { Cart, CartProduct } from "@/lib/dto/cart";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

export default function Cart() {
  const router = useRouter();
  const { cart, isLoading } = useContext(CartContext);

  return (
    <Box>
      <Topbar title="장바구니" onPrev={router.back} />
      <Box className="main-content">{isLoading ? <Loading /> : <ProductSelectCardList list={cart.list} />}</Box>
      <IconButton
        onClick={() => alert("주문하기 완료!")}
        icon={`${cart?.totalPrice}원 배달 주문하기`}
        style={{
          position: "fixed",
          width: "1280px",
          height: "60px",
          bottom: 0,
          background: "gray"
        }}
      />
    </Box>
  );
}

type Props = {
  list: Cart["list"];
};

function ProductSelectCardList({ list }: Props) {
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
          <Counter
            count={count}
            setCount={(number) => {
              setCount(number);
              updateCartItems(cart.list.map((item) => (item.id === id ? { ...item, quantity: number } : item)));
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
