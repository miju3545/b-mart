import classNames from "classnames/bind";
import style from "./ProductScrollable.module.scss";
import { ReactNode } from "react";
import { Box } from "@/components/atom/Box";
import { Heading } from "@/components/atom/Heading";
const cx = classNames.bind(style);

type Props = {
  title: ReactNode;
  hasViewMore?: boolean;
};
export function ProductScrollable({ title, hasViewMore = false }: Props) {
  return (
    <Box display="flex" flexDirection="column" gap={10} height={200} backgroundColor="lightGray">
      <Box display="flex" justifyContent="space-between" alignItem="center">
        <Heading level={3}>{title}</Heading>
        {hasViewMore && (
          <button type="button" onClick={() => {}}>
            더보기 ＞
          </button>
        )}
      </Box>
    </Box>
  );
}
