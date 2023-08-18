import { Box } from "@/components/atom/Box";
import { IconButton } from "@/components/atom/IconButton";
import { Product } from "@/components/block/Product";
import { Topbar } from "@/components/block/Topbar";
import { CartContext } from "@/contexts/index";
import { Cart } from "@/lib/dto/cart";
import { useRouter } from "next/router";
import React, { useContext } from "react";

export default function Cart() {
  const router = useRouter();
  const { cart, currentPrice } = useContext(CartContext);

  return (
    <Box>
      <Topbar title="장바구니" onPrev={router.back} />
      <Box className="main-content">
        <Product.SelectTable list={cart.items} />
      </Box>
      <IconButton
        onClick={() => alert("주문하기 완료!")}
        icon={`${currentPrice}원 배달 주문하기`}
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
