import classNames from "classnames/bind";
import style from "./SearchHistoryList.module.scss";
import { Box } from "@/components/atom/Box";
import { Heading } from "@/components/atom/Heading";
import Link from "next/link";
import { useContext } from "react";
import { SideTabContext } from "@/contexts/index";
import { EmptyMessage } from "@/components/atom/EmptyMessage";
const cx = classNames.bind(style);

type Props = {
  list: string[];
  onDelete?: (item: string | string[]) => void;
};

export function SearchHistoryList({ list, onDelete }: Props) {
  return (
    <Box>
      <Heading level={3}>최근 검색어</Heading>
      {list.length === 0 && <EmptyMessage>최근 검색어가 없습니다.</EmptyMessage>}
      {list.length > 0 && (
        <>
          <ul className={cx("history-list")}>
            {list?.map((item) => <SearchHistoryItem key={item} title={item} onDelete={() => onDelete?.(item)} />)}
          </ul>
          <button type="button" onClick={() => onDelete?.(list)}>
            전체 삭제
          </button>
        </>
      )}
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
