import { Box } from "@/components/atom/Box";
import { IconButton } from "@/components/atom/IconButton";
import { SubCategoryList } from "@/components/block/Category/SubCategoryList";
import { Product } from "@/components/block/Product";
import { Promotion } from "@/components/block/Promotion";
import { CartTab } from "@/components/block/SideTab/CartTab";
import { Topbar } from "@/components/block/Topbar";
import { SideTabContext } from "@/contexts/index";
import { Category } from "@/lib/dto";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function CategoryDetail() {
  const { query, asPath } = useRouter();
  const { registerSideTab, setPrevPageURL } = useContext(SideTabContext);
  const categoryId = Number(query.categoryId);
  const [data, setData] = useState<Category>();

  useEffect(() => {
    setPrevPageURL(asPath);
  }, []);

  useEffect(() => {
    fetch(`/api/categories/${categoryId}`)
      .then((res) => res.json())
      .then((data) => setData(data.result));
  }, []);

  return (
    <Box style={{ maxWidth: "1280px", margin: "auto", position: "relative" }}>
      <Topbar title={data?.title} />
      <Promotion.Slider />
      <SubCategoryList list={data?.subCategories || []} />
      <Product.Scrollable title="이 상품 어때요?" />
      <IconButton
        icon="장바구니 🛍️"
        onClick={() => registerSideTab(<CartTab />)}
        style={{
          position: "fixed",
          bottom: 10,
          right: 10,
          width: 60,
          height: 60,
          background: "gray",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      />
    </Box>
  );
}
