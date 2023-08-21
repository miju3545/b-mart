import { Box } from "../Box";
import style from "./Carousel.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import { Promotion } from "@/lib/dto";
import ReactSlider from "react-slick";

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

  // const [index, set] = useState(0);
  // const transitions = useTransition(index, {
  //   key: index,
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   config: { duration: 2000 },
  //   onRest: (_a, _b, item) => {
  //     if (index === item) {
  //       set((state) => (state + 1) % items.length);
  //     }
  //   },
  //   exitBeforeEnter: true
  // });

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
      {/* {transitions((style, i) => (
        <animated.div>
          <Image
            src={items?.[i]?.imageUrl}
            width={100}
            height={100}
            alt={items?.[i]?.imageUrl}
            className={cx("bg")}
            // layout="responsive"
          />
        </animated.div>
      ))} */}
    </Box>
  );
}
