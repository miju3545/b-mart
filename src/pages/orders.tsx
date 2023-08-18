import { Box } from "@/components/atom/Box";
import { IconButton } from "@/components/atom/IconButton";
import { Product } from "@/components/block/Product";
import { Topbar } from "@/components/block/Topbar";
import { CartContext } from "@/contexts/index";
import { Cart } from "@/lib/dto/cart";
import { useRouter } from "next/router";
import React, { useContext } from "react";

export default function Orders() {
  const router = useRouter();
  const { cart } = useContext(CartContext);

  return (
    <Box>
      <Topbar title="주문 내역" onPrev={router.back} />
      <Box className="main-content">
        <Product.SelectTable list={cart.items} />
      </Box>
    </Box>
  );
}
