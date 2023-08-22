import classNames from "classnames/bind";
import style from "./SideTabTopbar.module.scss";
import { Fragment, PropsWithChildren, ReactNode } from "react";
import { Box } from "@/components/atom/Box";
import { IconButton } from "@/components/atom/IconButton";
const cx = classNames.bind(style);

type Props = {
  title?: ReactNode;
  onPrev?: () => void;
  trailingIcons?: ReactNode | ReactNode[];
};

export function SideTabTopbar({ title, onPrev, trailingIcons }: PropsWithChildren<Props>) {
  const trailingIconArray = Array.isArray(trailingIcons) ? trailingIcons : [trailingIcons];

  return (
    <Box className={cx("container")}>
      <Box className={cx("inner")}>
        <Box className={cx("col", "leading")}>
          <IconButton icon="＜" onClick={onPrev} />
        </Box>
        {title && (
          <Box className={cx("col", "main")}>
            <Box>{title}</Box>
          </Box>
        )}
        {trailingIcons && (
          <Box className={cx("col", "trailing")}>
            {trailingIconArray.map((trailingIcon, i) => (
              <Fragment key={i}>{trailingIcon}</Fragment>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
