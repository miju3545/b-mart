import { Box } from "@/components/atom/Box";
import { IconButton } from "@/components/atom/IconButton";
import { SubCategoryList } from "@/components/block/Category/SubCategoryList";
import { Product } from "@/components/block/Product";
import { Promotion } from "@/components/block/Promotion";
import { CartTab } from "@/components/block/SideTab/CartTab";
import { Topbar } from "@/components/block/Topbar";
import { SideTabContext } from "@/contexts/index";
import { Category, Product as ProductDto } from "@/lib/dto";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function CategoryDetail() {
  const router = useRouter();
  const { registerSideTab, setPrevPageURL } = useContext(SideTabContext);
  const categoryId = Number(router.query.categoryId);
  const [data, setData] = useState<Category>();
  const [products, setProducts] = useState<ProductDto[]>([]);

  useEffect(() => {
    setPrevPageURL(router.asPath);
  }, []);

  useEffect(() => {
    fetch(`/api/categories/${categoryId}`)
      .then((res) => res.json())
      .then((data) => setData(data.result));

    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.result));
  }, []);

  return (
    <Box>
      <Topbar title={data?.title} onPrev={router.back} />
      <Promotion.Slider />
      <SubCategoryList list={data?.subCategories || []} />
      <Product.Scrollable title="이 상품 어때요?" list={products} />
      <Product.List list={products} col={3} />
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
