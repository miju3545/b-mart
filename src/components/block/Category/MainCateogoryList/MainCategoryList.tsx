import classNames from "classnames/bind";
import style from "./MainCategoryList.module.scss";
import Link from "next/link";
const cx = classNames.bind(style);

export type MainCategoryProps = {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  alt: string;
};

type Props = {
  list: MainCategoryProps[];
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

export function MainCategoryItem({ id, title }: MainCategoryProps) {
  return (
    <li className={cx("category-item")}>
      <Link href={`/categories/${id}`}>{title}</Link>
    </li>
  );
}
