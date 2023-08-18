import classNames from "classnames/bind";
import style from "./Topbar.module.scss";
import { Heading } from "@/components/atom/Heading";
import { Fragment, PropsWithChildren, ReactNode } from "react";
import { Box } from "@/components/atom/Box";
import { IconButton } from "@/components/atom/IconButton";
const cx = classNames.bind(style);

type Props = {
  title?: ReactNode;
  onPrev?: () => void;
  trailingIcons?: ReactNode | ReactNode[];
};

export function Topbar({ title, onPrev, trailingIcons }: PropsWithChildren<Props>) {
  const trailingIconArray = Array.isArray(trailingIcons) ? trailingIcons : [trailingIcons];

  return (
    <Box className={cx("container")}>
      <Box className={cx("leading")}>
        <IconButton icon="＜" onClick={onPrev} />
      </Box>
      {title && (
        <Box>
          <Heading level={3}>{title}</Heading>
        </Box>
      )}
      <Box className={cx("trailing")}>
        {trailingIconArray.map((trailingIcon, i) => (
          <Fragment key={i}>{trailingIcon}</Fragment>
        ))}
      </Box>
    </Box>
  );
}
