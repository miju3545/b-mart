import { Box } from "../Box";
import style from "./Carousel.module.scss";
import classNames from "classnames/bind";
import { Promotion } from "@/lib/dto";
import ReactSlider from "react-slick";
import Image from "next/image";

const cx = classNames.bind(style);

type Props = {
  show?: number;
  items: Promotion[];
  direction?: "left" | "right";
  autoPlay?: boolean;
  infinite?: boolean;
};

export function Carousel(props: Props) {
  const { show = 1, items, direction = "right", autoPlay, infinite, ...rest } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <Box width="100%" height="100%">
      <ReactSlider {...settings} className={cx("slider")}>
        {items?.map((item) => (
          <Image
            key={item.imageUrl}
            src={item.imageUrl}
            alt={item.imageUrl}
            width={100}
            height={200}
            style={{ width: "100%", height: "200px" }}
          />
        ))}
      </ReactSlider>
    </Box>
  );
}
