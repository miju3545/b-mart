import classNames from "classnames/bind";
import style from "./SearchList.module.scss";
import Link from "next/link";
const cx = classNames.bind(style);

type Props = {
  list: string[];
  onClickItem?: () => void;
};

export function SearchList({ list, onClickItem = () => {} }: Props) {
  return (
    <ul className={cx("category-list")}>
      {list.map((item) => (
        <SearchItem key={item} title={item} onClick={onClickItem} />
      ))}
    </ul>
  );
}

export function SearchItem({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <li className={cx("category-item")}>
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
