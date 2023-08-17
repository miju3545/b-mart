import classNames from "classnames/bind";
import style from "./ProductSlider.module.scss";
import { Slider } from "@/components/atom/Slider";
import { ReactNode } from "react";
import { Heading } from "@/components/atom/Heading";
import { Box } from "@/components/atom/Box";

type Props = {
  title: ReactNode;
};
export function ProductSlider({ title }: Props) {
  return (
    <Box display="flex" flexDirection="column" gap={10}>
      <Heading level={3}>{title}</Heading>
      <Slider />;
    </Box>
  );
}
