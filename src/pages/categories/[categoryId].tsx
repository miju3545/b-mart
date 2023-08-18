import { MenuIcon } from "@/components/Icons/Menu";
import { SearchIcon } from "@/components/Icons/Search";
import { Box } from "@/components/atom/Box";
import { IconButton } from "@/components/atom/IconButton";
import { MenuTab, SearchTab } from "@/components/block";
import { SubCategoryList } from "@/components/block/Category/SubCategoryList";
import { Product } from "@/components/block/Product";
import { Promotion } from "@/components/block/Promotion";
import { Topbar } from "@/components/block/Topbar";
import { CartContext, SideTabContext } from "@/contexts/index";
import { Category, Product as ProductDto } from "@/lib/dto";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function CategoryDetail() {
  const router = useRouter();
  const { registerSideTab, setPrevPageURL } = useContext(SideTabContext);
  const { cart } = useContext(CartContext);
  const categoryId = Number(router.query.categoryId);
  const [categories, setCategories] = useState<Category>();
  const [products, setProducts] = useState<ProductDto[]>([]);

  useEffect(() => {
    setPrevPageURL(router.asPath);
  }, []);

  useEffect(() => {
    fetch(`/api/categories/${categoryId}`)
      .then((res) => res.json())
      .then((data) => setCategories(data.result));

    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.result));
  }, []);

  return (
    <Box>
      <Topbar
        title={categories?.title}
        onPrev={router.back}
        trailingIcons={[
          <IconButton icon={<SearchIcon />} onClick={() => registerSideTab(<SearchTab />)} />,
          <IconButton icon={<MenuIcon />} onClick={() => registerSideTab(<MenuTab />)} />
        ]}
      />
      <Box className="main-content">
        <Promotion.Slider />
        <SubCategoryList list={categories?.subCategories || []} />
        <Product.Scrollable title="이 상품 어때요?" list={products} />
        <Product.List list={products} col={3} />
      </Box>
      <Box
        style={{
          position: "fixed",
          bottom: 0,
          width: "1280px",
          display: "flex",
          justifyContent: "flex-end",
          transform: "translate(-10px,-10px)"
        }}
      >
        <IconButton
          icon={`장바구니 (${cart?.items.length}개)`}
          href="/cart"
          style={{
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
    </Box>
  );
}
