import { MainCategoryList, MainCategoryProps } from "@/components/block/Category/MainCateogoryList";
import { Gnb } from "@/components/block/Gnb";
import { Product } from "@/components/block/Product";
import { Promotion } from "@/components/block/Promotion";
import { SideTabContext, UserContext } from "@/contexts/index";
import { Category } from "@/lib/dto";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { user } = useContext(UserContext);
  const { setPrevPageURL } = useContext(SideTabContext);
  const [mainCategories, setMainCategories] = useState<MainCategoryProps[]>([]);

  useEffect(() => {
    setPrevPageURL("/");
  }, []);

  useEffect(() => {
    fetch("/api/categories/main")
      .then((res) => res.json())
      .then((data) => setMainCategories(data.result));
  }, []);

  return (
    <main>
      <Gnb />
      <div style={{ maxWidth: "1280px", margin: "auto" }}>
        {/* <div>땡겨요</div> */}
        <Promotion.Slider />
        <MainCategoryList list={mainCategories} />
        <Product.Scrollable title={`${user.name}님을 위해 준비한 상품`} />
        <Product.Slider title="지금 사면 ⚡️ 번쩍 할인" />
        <Product.List title="지금 뭐먹지?" />
        <Product.List title="지금 필요한 생필품?" />
        <Product.Scrollable title="새로 나왔어요" hasViewMore />
        <Product.Scrollable title="요즘 잘팔려요" hasViewMore />
        <Product.FlagShip
          title={
            <span>
              <strong>번쩍하면 배달오는</strong> B마트 대표상품
            </span>
          }
        />
      </div>
    </main>
  );
}
