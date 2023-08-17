import classNames from "classnames/bind";
import style from "./Gnb.module.scss";
import { Logo } from "@/components/Icons/Logo";
import { MenuIcon } from "@/components/Icons/Menu";
import { SearchIcon } from "@/components/Icons/Search";
import Link from "next/link";
const cx = classNames.bind(style);

export function Gnb() {
  return (
    <div className={cx("container")}>
      <Link href="/" className={cx("logo")}>
        <Logo />
      </Link>
      <div className={cx("tabs")}>
        <Link href="/menu" className={cx("tab-icon")}>
          <MenuIcon />
        </Link>
        <Link href="search" className={cx("tab-icon")}>
          <SearchIcon />
        </Link>
      </div>
    </div>
  );
}
