import classNames from "classnames/bind";
import style from "./Topbar.module.scss";
import { MenuIcon } from "@/components/Icons/Menu";
import { SearchIcon } from "@/components/Icons/Search";
import Link from "next/link";
import { Heading } from "@/components/atom/Heading";
import { ReactNode } from "react";
import { Box } from "@/components/atom/Box";
import { IconButton } from "@/components/atom/IconButton";
import { useRouter } from "next/router";
const cx = classNames.bind(style);

// 상세페이지에 들어가는 Header(Gnb)입니다.
type Props = {
  title?: ReactNode;
};

export function Topbar({ title }: Props) {
  const router = useRouter();

  return (
    <Box className={cx("container")}>
      <Box>
        <IconButton icon="＜" onClick={router.back} />
      </Box>
      <Box>
        <Heading level={3}>{title}</Heading>
      </Box>
      <Box className={cx("tabs")}>
        <Link href="/menu" className={cx("tab-icon")}>
          <MenuIcon />
        </Link>
        <Link href="/search" className={cx("tab-icon")}>
          <SearchIcon />
        </Link>
      </Box>
    </Box>
  );
}
