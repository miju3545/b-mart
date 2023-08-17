import classNames from "classnames/bind";
import style from "./SubCategoryList.module.scss";
import Link from "next/link";
import { SubCategory } from "@/lib/dto/category";
const cx = classNames.bind(style);

type Props = {
  list: SubCategory[];
};

export function SubCategoryList({ list }: Props) {
  return (
    <ul className={cx("category-list")}>
      {list.map((category) => (
        <SubCategoryItem key={category.title} {...category} />
      ))}
    </ul>
  );
}

export function SubCategoryItem({ id, title }: SubCategory) {
  return (
    <li className={cx("category-item")}>
      <Link href={`/categories/${id}`}>{title}</Link>
    </li>
  );
}
