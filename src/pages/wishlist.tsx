import { Box } from "@/components/atom/Box";
import { Product } from "@/components/block/Product";
import { Topbar } from "@/components/block/Topbar";
import { WishListContext } from "@/contexts/index";
import { useRouter } from "next/router";
import React, { useContext } from "react";

export default function Wishlist() {
  const router = useRouter();
  const { wishlist } = useContext(WishListContext);

  return (
    <Box>
      <Topbar title="찜한 상품" onPrev={router.back} />
      <Box className="main-content">
        <Product.List list={wishlist?.items} />
      </Box>
    </Box>
  );
}
