import { Carousel } from "@/components/atom/Carousel";
import { Promotion } from "@/lib/dto";

export function Promotion() {
  return;
}

type Props = {
  list: Promotion[];
};
function PromotionCarousel({ list }: Props) {
  return <Carousel items={list} show={1} />;
}

Promotion.Carousel = PromotionCarousel;
