import { Box } from "../Box";
import style from "./Slider.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import { Product } from "@/lib/dto";
import ReactSlider from "react-slick";

const cx = classNames.bind(style);

type Props = {
  show?: number;
  items: Product[];
  direction?: "left" | "right";
  autoPlay?: boolean;
  infinite?: boolean;
};

export function Slider(props: Props) {
  const { show = 1, items, direction = "right", autoPlay, infinite, ...rest } = props;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <Box width="100%" height="100%">
      <ReactSlider {...settings} className={cx("slider")}>
        {items.map((item) => (
          <Image
            key={item?.imageUrl}
            src={item?.imageUrl}
            width={100}
            height={100}
            alt={item?.imageUrl}
            className={cx("bg")}
            fetchPriority="auto"
            // layout="responsive"
          />
        ))}
      </ReactSlider>
    </Box>
  );
}
