import classNames from "classnames/bind";
import style from "./SearchList.module.scss";
import Link from "next/link";
const cx = classNames.bind(style);

type Props = {
  list: string[];
};

export function SearchList({ list }: Props) {
  return (
    <ul className={cx("search-list")}>
      {list.map((item) => (
        <SearchItem key={item} title={item} />
      ))}
    </ul>
  );
}

export function SearchItem({ title }: { title: string }) {
  return (
    <li className={cx("search-item")}>
      <Link
        href={{
          pathname: "/",
          query: { keyword: title }
        }}
      >
        {title}
      </Link>
    </li>
  );
}
