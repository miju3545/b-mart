import classNames from "classnames/bind";
import style from "./MainCategoryList.module.scss";
import Link from "next/link";
import { MainCategory } from "@/lib/dto/category";
const cx = classNames.bind(style);

type Props = {
  list: MainCategory[];
};

export function MainCategoryList({ list }: Props) {
  return (
    <ul className={cx("category-list")}>
      {list.map((category) => (
        <MainCategoryItem key={category.title} {...category} />
      ))}
    </ul>
  );
}

export function MainCategoryItem({ id, title }: MainCategory) {
  return (
    <li className={cx("category-item")}>
      <Link href={`/categories/${id}`}>{title}</Link>
    </li>
  );
}
