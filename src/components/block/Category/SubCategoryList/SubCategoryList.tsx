import classNames from "classnames/bind";
import style from "./SubCategoryList.module.scss";
import Link from "next/link";
import { SubCategory } from "@/lib/dto/category";
const cx = classNames.bind(style);

type Props = {
  list: SubCategory[];
  onClickItem?: () => void;
};

export function SubCategoryList({ list, onClickItem = () => {} }: Props) {
  return (
    <ul className={cx("category-list")}>
      {list.map((category) => (
        <SubCategoryItem key={category.title} {...category} onClick={onClickItem} />
      ))}
    </ul>
  );
}

export function SubCategoryItem({ id, title, onClick }: SubCategory & { onClick: () => void }) {
  return (
    <li className={cx("category-item")}>
      <Link href={`/categories/${id}`} onClick={onClick}>
        {title}
      </Link>
    </li>
  );
}
