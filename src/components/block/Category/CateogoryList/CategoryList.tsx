import classNames from "classnames/bind";
import { CategoryItem, CategoryProps } from "../CategoryItem";
import style from "./CategoryList.module.scss";
const cx = classNames.bind(style);

type Props = {
  list: CategoryProps[];
};

export function CategoryList({ list }: Props) {
  return (
    <ul className={cx("category-list")}>
      {list.map((category) => (
        <CategoryItem key={category.title} {...category} />
      ))}
    </ul>
  );
}
