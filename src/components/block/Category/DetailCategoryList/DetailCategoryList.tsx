import classNames from "classnames/bind";
import style from "./DetailCategoryList.module.scss";
import Link from "next/link";
const cx = classNames.bind(style);

export type CategoryProps = {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  alt: string;
};

type Props = {
  list: CategoryProps[];
};

export function DetailCategoryList({ list }: Props) {
  return (
    <ul className={cx("category-list")}>
      {list.map((category) => (
        <DetailCategoryItem key={category.title} {...category} />
      ))}
    </ul>
  );
}

export function DetailCategoryItem({ id, title }: CategoryProps) {
  return (
    <li className={cx("category-item")}>
      <Link href={`/categories/${id}`}>{title}</Link>
    </li>
  );
}
