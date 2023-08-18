import { Box } from "@/components/atom/Box";
import { IconButton } from "@/components/atom/IconButton";
import { MainCategoryList, MainCategoryProps } from "@/components/block/Category/MainCateogoryList";
import { Gnb } from "@/components/block/Gnb";
import { Product } from "@/components/block/Product";
import { Promotion } from "@/components/block/Promotion";
import { CartContext, SideTabContext, UserContext } from "@/contexts/index";
import { Product as ProductDto } from "@/lib/dto";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { user } = useContext(UserContext);
  const { setPrevPageURL } = useContext(SideTabContext);
  const { cart } = useContext(CartContext);
  const [mainCategories, setMainCategories] = useState<MainCategoryProps[]>([]);
  const [products, setProducts] = useState<ProductDto[]>([]);

  useEffect(() => {
    setPrevPageURL("/");
  }, []);

  useEffect(() => {
    fetch("/api/categories/main")
      .then((res) => res.json())
      .then((data) => setMainCategories(data.result));
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.result));
  }, []);

  return (
    <Box>
      <Gnb />
      {/* <div>땡겨요</div> */}
      <Box display="flex" flexDirection="column" gap={20} className="main-content">
        <Promotion.Slider />
        <MainCategoryList list={mainCategories} />
        <Product.Scrollable title={`${user.name}님을 위해 준비한 상품`} list={products} />
        <Product.Slider title="지금 사면 ⚡️ 번쩍 할인" list={products} />
        <Product.List title="지금 뭐먹지?" list={products} />
        <Product.List title="지금 필요한 생필품?" list={products} />
        <Product.Scrollable title="새로 나왔어요" list={products} hasViewMore />
        <Product.Scrollable title="요즘 잘팔려요" list={products} hasViewMore />
        <Product.FlagShip
          title={
            <>
              <strong>번쩍하면 배달오는</strong> B마트 대표상품
            </>
          }
          list={products}
        />
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
