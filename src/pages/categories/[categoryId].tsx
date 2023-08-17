import { SubCategoryList } from "@/components/block/Category/SubCategoryList";
import { Product } from "@/components/block/Product";
import { Promotion } from "@/components/block/Promotion";
import { Topbar } from "@/components/block/Topbar";
import { SideTabContext } from "@/contexts/index";
import { Category } from "@/lib/dto";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function CategoryDetail() {
  const { query, asPath } = useRouter();
  const { setPrevPageURL } = useContext(SideTabContext);
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
    <main>
      <Topbar title={data?.title} />
      <Promotion.Slider />
      <SubCategoryList list={data?.subCategories || []} />
      <Product.Scrollable title="이 상품 어때요?" />
    </main>
  );
}
