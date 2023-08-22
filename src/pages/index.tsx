import { Box } from "@/components/atom/Box";
import { Carousel } from "@/components/atom/Carousel";
import { IconButton } from "@/components/atom/IconButton";
import { MainCategoryProps } from "@/components/block/Category/MainCateogoryList";
import { Gnb } from "@/components/block/Gnb";
import { ProductFlagShip } from "@/components/block/product/ProductFlagShip";
import { ProductList } from "@/components/block/product/ProductList";
import { ProductPreviewCarousel } from "@/components/block/product/ProductPreviewCarousel";
import { ProductScrollable } from "@/components/block/product/ProductScrollable";
import { CartContext, SideTabContext, UserContext } from "@/contexts/index";
import { Product as ProductDto, Promotion as PromotionDTO } from "@/lib/dto";
import { SubCategory } from "@/lib/dto/category";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { user } = useContext(UserContext);
  const { setPrevPageURL } = useContext(SideTabContext);
  const { cart } = useContext(CartContext);
  const [, setMainCategories] = useState<MainCategoryProps[]>([]);
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [temp, setTemp] = useState<ProductDto[]>([]); // product temp
  const [promotions, setPromotions] = useState<PromotionDTO[]>([]);
  const [flagship, setFlagship] = useState<SubCategory[]>([]);
  const [start, setStart] = useState(0); // start page
  useEffect(() => {
    setPrevPageURL("/");
  }, []);

  // runtime check -> null, undefined
  useEffect(() => {
    fetch("/api/categories/main")
      .then((res) => res.json())
      .then((data) => setMainCategories(data?.result || []));
    fetch(`/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.result);
        setTemp(data.result);
      });
    fetch(`/api/promotions`)
      .then((res) => res.json())
      .then((data) => setPromotions(data.result));
    fetch(`/api/flagship`)
      .then((res) => res.json())
      .then((data) => setFlagship(data.result));
  }, []);

  useEffect(() => {
    fetch(`/api/products?start=${start}&limit=6`)
      .then((res) => res.json())
      .then((data) => setTemp(data.result));
  }, [start]);

  return (
    <Box>
      <Gnb />
      {/* <div>땡겨요</div> */}
      <Box display="flex" flexDirection="column" gap={20} className="main-content">
        <Carousel items={promotions} />
        {/* <MainCategoryList list={mainCategories} /> */}
        <ProductScrollable title={`${user.name}님을 위해 준비한 상품`} list={products} show={6} />
        <ProductPreviewCarousel title="지금 사면 ⚡️ 번쩍 할인" list={products} />
        <Carousel items={promotions} />
        <ProductList
          title="지금 뭐먹지?"
          list={temp}
          start={start * (temp.length / 6)}
          limit={6}
          onNextPage={setStart}
        />
        {/* <Product.List title="지금 필요한 생필품?" list={products} start={0} limit={6} onNextPage={() => {}} /> */}
        {/* isViewMore, isMore */}
        <ProductScrollable title="새로 나왔어요" list={products} hasViewMore show={20} />
        <ProductScrollable title="요즘 잘팔려요" list={products} hasViewMore show={20} />
        <ProductFlagShip
          title={
            <>
              <strong>번쩍하면 배달오는</strong> B마트 대표상품
            </>
          }
          list={flagship}
        />
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
