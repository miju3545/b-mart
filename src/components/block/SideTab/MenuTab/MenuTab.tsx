import { useContext, useEffect, useState } from "react";
import { SideTab } from "../SideTab";
import { SideTabContext } from "@/contexts/index";
import { Box } from "@/components/atom/Box";
import Link from "next/link";
import { Heading } from "@/components/atom/Heading";
import { Category } from "@/lib/dto";
import { SubCategoryList } from "../../Category/SubCategoryList";

export function MenuTab() {
  const { hideSideTab } = useContext(SideTabContext);
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.result));
  }, []);

  return (
    <SideTab onPrev={hideSideTab} onClose={hideSideTab}>
      <Box>
        <Link href="/">B마트 홈으로 가기 &rarr;</Link>
        <Box
          display="flex"
          style={{
            border: "1px solid gray",
            textAlign: "center",
            padding: "10px 0"
          }}
        >
          <Link href="/orders" style={{ flex: 1 }}>
            주문 내역
          </Link>
          <span>|</span>
          <Link href="/wishlist" style={{ flex: 1 }}>
            찜한 상품
          </Link>
        </Box>
      </Box>
      <Box>
        <Heading level={3}>맛있는 것</Heading>
        <SubCategoryList list={categories || []} onClickItem={hideSideTab} />
      </Box>
    </SideTab>
  );
}
