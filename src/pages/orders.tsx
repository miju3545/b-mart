import { Box } from "@/components/atom/Box";
import { ProductSelectTable } from "@/components/block/product/ProductSelectTable";
import { Topbar } from "@/components/block/Topbar";
import { CartContext } from "@/contexts/index";
import { useRouter } from "next/router";
import React, { useContext } from "react";

export default function Orders() {
  const router = useRouter();
  const { cart } = useContext(CartContext);

  return (
    <Box>
      <Topbar title="주문 내역" onPrev={router.back} />
      <Box className="main-content">
        <ProductSelectTable list={cart.items} />
      </Box>
    </Box>
  );
}
