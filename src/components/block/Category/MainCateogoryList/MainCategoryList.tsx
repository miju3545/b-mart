import classNames from "classnames/bind";
import style from "./MainCategoryList.module.scss";
import Link from "next/link";
import { MainCategory } from "@/lib/dto/category";
import { useContext } from "react";
import { SideTabContext } from "@/contexts/index";
import { MenuTab } from "../..";
const cx = classNames.bind(style);

type Props = {
  list: MainCategory[];
};

export function MainCategoryList({ list }: Props) {
  const { registerSideTab } = useContext(SideTabContext);
  return (
    <ul className={cx("category-list")}>
      {list.map((category) => (
        <MainCategoryItem key={category.title} {...category} />
      ))}
      <MainCategoryItem title="더보기" type="button" onClick={() => registerSideTab(<MenuTab />)} />
    </ul>
  );
}

export function MainCategoryItem({
  id,
  title,
  type = "link",
  // imageUrl,
  onClick = () => {}
}: Partial<MainCategory> & { type?: "link" | "button"; onClick?: () => void }) {
  return (
    <li className={cx("category-item")}>
      {type === "link" && <Link href={`/categories/${id}`}>{title}</Link>}
      {type === "button" && (
        <button type="button" onClick={onClick}>
          {title}
        </button>
      )}
    </li>
  );
}
