import classNames from "classnames/bind";
import style from "./Gnb.module.scss";
import { Logo } from "@/components/Icons/Logo";
import { MenuIcon } from "@/components/Icons/Menu";
import { SearchIcon } from "@/components/Icons/Search";
import Link from "next/link";
import { Box } from "@/components/atom/Box";
import { useContext } from "react";
import { SideTabContext } from "@/contexts/index";
import { MenuTab } from "@/components/block/SideTab/MenuTab";
import { SearchTab } from "..";
import { IconButton } from "@/components/atom/IconButton";
const cx = classNames.bind(style);

export function Gnb() {
  const { registerSideTab } = useContext(SideTabContext);
  return (
    <Box className={cx("container")}>
      <Link href="/" className={cx("logo")}>
        <Logo />
      </Link>
      <Box className={cx("tabs")}>
        <IconButton icon={<MenuIcon />} onClick={() => registerSideTab(<MenuTab />)} className={cx("tab-icon")} />
        <IconButton icon={<SearchIcon />} onClick={() => registerSideTab(<SearchTab />)} className={cx("tab-icon")} />
      </Box>
    </Box>
  );
}
