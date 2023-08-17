import { DetailCategoryList } from "@/components/block/Category/DetailCategoryList";
import { Product } from "@/components/block/Product";
import { Promotion } from "@/components/block/Promotion";
import { Topbar } from "@/components/block/Topbar";
import { MAIN_CATEGORIES } from "@/constants/mainCategories";
import { SideTabContext } from "@/contexts/index";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const getCategoryTitle = (categoryId: number) => {
  return MAIN_CATEGORIES.find((category) => category.id === categoryId)?.title;
};

export default function CategoryDetail() {
  const { query, asPath } = useRouter();
  const { setPrevPageURL } = useContext(SideTabContext);

  useEffect(() => {
    setPrevPageURL(asPath);
  }, []);

  return (
    <main>
      <Topbar title={getCategoryTitle(Number(query.categoryId))} />
      <Promotion.Slider />
      <DetailCategoryList list={[]} />
      <Product.Scrollable title="이 상품 어때요?" />
    </main>
  );
}
