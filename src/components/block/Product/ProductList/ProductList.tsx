import classNames from "classnames/bind";
import style from "./ProductList.module.scss";
import { ReactNode } from "react";
import { Box } from "@/components/atom/Box";
import { Heading } from "@/components/atom/Heading";
const cx = classNames.bind(style);

type Props = {
  title: ReactNode;
};
export function ProductList({ title }: Props) {
  return (
    <Box display="flex" flexDirection="column" gap={10} height={200} backgroundColor="lightGray">
      <Heading level={3}>{title}</Heading>
    </Box>
  );
}
