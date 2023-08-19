import classNames from "classnames/bind";
import style from "./SearchHistoryList.module.scss";
import { Box } from "@/components/atom/Box";
import { Heading } from "@/components/atom/Heading";
import Link from "next/link";
import { useContext } from "react";
import { SideTabContext } from "@/contexts/index";
const cx = classNames.bind(style);

type Props = {
  title: string;
  list: string[];
  onDelete?: (item: string) => void;
};

export function SearchHistoryList({ title, list, onDelete = () => {} }: Props) {
  return (
    <Box>
      <Heading level={3}>{title}</Heading>
      <ul className={cx("history-list")}>
        {list.map((item) => (
          <SearchHistoryItem key={item} title={item} onDelete={() => onDelete(item)} />
        ))}
      </ul>
    </Box>
  );
}

export function SearchHistoryItem({ title, onDelete }: { title: string; onDelete: () => void }) {
  const { hideSideTab } = useContext(SideTabContext);
  return (
    <li className={cx("history-item")}>
      <Link href={{ pathname: "/", query: { keyword: title } }} onClick={hideSideTab}>
        {title}
      </Link>
      <button type="button" onClick={onDelete}>
        삭제
      </button>
    </li>
  );
}
