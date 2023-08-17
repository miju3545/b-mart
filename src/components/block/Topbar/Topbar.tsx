import classNames from "classnames/bind";
import style from "./Topbar.module.scss";
import { MenuIcon } from "@/components/Icons/Menu";
import { SearchIcon } from "@/components/Icons/Search";
import { Heading } from "@/components/atom/Heading";
import { ReactNode, useContext } from "react";
import { Box } from "@/components/atom/Box";
import { IconButton } from "@/components/atom/IconButton";
import { SideTabContext } from "@/contexts/index";
import { MenuTab, SearchTab } from "@/components/block/SideTab";
const cx = classNames.bind(style);

// 상세페이지에 들어가는 Header(Gnb)입니다.
type Props = {
  title?: ReactNode;
  onPrev?: () => {};
};

export function Topbar({ title, onPrev }: Props) {
  const { registerSideTab } = useContext(SideTabContext);

  return (
    <Box className={cx("container")}>
      <Box>
        <IconButton icon="＜" onClick={onPrev} />
      </Box>
      <Box>
        <Heading level={3}>{title}</Heading>
      </Box>
      <Box className={cx("tabs")}>
        <IconButton icon={<MenuIcon />} onClick={() => registerSideTab(<MenuTab />)} className={cx("tab-icon")} />
        <IconButton icon={<SearchIcon />} onClick={() => registerSideTab(<SearchTab />)} className={cx("tab-icon")} />
      </Box>
    </Box>
  );
}
