import { MenuIcon } from "@/components/Icons/Menu";
import { SearchIcon } from "@/components/Icons/Search";
import { Box } from "@/components/atom/Box";
import { Carousel } from "@/components/atom/Carousel";
import { IconButton } from "@/components/atom/IconButton";
import { MenuTab, SearchTab } from "@/components/block";
import { SubCategoryList } from "@/components/block/Category/SubCategoryList";
import { ProductFilterBox } from "@/components/block/product/ProductFilterBox";
import { ProductList } from "@/components/block/product/ProductList";
import { ProductScrollable } from "@/components/block/product/ProductScrollable";
import { Topbar } from "@/components/block/Topbar";
import { CartContext, SideTabContext } from "@/contexts/index";
import { Category, Product as ProductDTO, Promotion as PromotionDTO } from "@/lib/dto";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const FilterOptions = [
  { name: "판매랑", value: "saleCount" },
  { name: "높은 가격순", value: "salePriceDesc" },
  { name: "낮은 가격순", value: "salePriceAsc" },
  { name: "최신순", value: "latestAsc" },
  { name: "할인율순", value: "discountAsc" },
  { name: "인기순", value: "bestAsc" }
];

export default function CategoryDetail() {
  const router = useRouter();
  const { registerSideTab, setPrevPageURL } = useContext(SideTabContext);
  const { cart } = useContext(CartContext);
  const categoryId = router.query.categoryId;
  const [cateogory, setCategory] = useState<Category>();
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [promotions, setPromotions] = useState<PromotionDTO[]>([]);

  useEffect(() => {
    setPrevPageURL(router.asPath);
  }, []);

  useEffect(() => {
    if (!categoryId) return;
    fetch(`/api/categories/${categoryId}`)
      .then((res) => res.json())
      .then((data) => setCategory(data.result));

    fetch(`/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.result));

    fetch(`/api/promotions`)
      .then((res) => res.json())
      .then((data) => setPromotions(data.result));
  }, [categoryId]);

  return (
    <Box>
      <Topbar
        title={cateogory?.title}
        onPrev={router.back}
        trailingIcons={[
          <IconButton icon={<SearchIcon />} onClick={() => registerSideTab(<SearchTab />)} />,
          <IconButton icon={<MenuIcon />} onClick={() => registerSideTab(<MenuTab />)} />
        ]}
      />
      <Box className="main-content">
        <Carousel items={promotions} />
        <SubCategoryList list={cateogory?.subCategories || []} />
        <ProductScrollable title="이 상품 어때요?" list={products} />
        <ProductFilterBox
          options={FilterOptions}
          onChange={(target: any) => router.push({ pathname: router.asPath, query: { filters: target.value } })}
        />
        <ProductList list={products} col={3} start={1} limit={6} />
      </Box>
      <Box
        style={{
          position: "fixed",
          bottom: 0,
          maxWidth: "1280px",
          width: "100%",
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
