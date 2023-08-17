import Link from "next/link";
import style from "./CategoryItem.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

export type CategoryProps = {
  title: string;
  url: string;
  imageUrl: string;
  alt: string;
};

export function CategoryItem({ title, url, imageUrl }: CategoryProps) {
  return (
    <li className={cx("category-item")}>
      <Link href={url}>{title}</Link>
    </li>
  );
}
