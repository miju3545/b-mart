import { Box } from "@/components/atom/Box";
import { Carousel } from "@/components/atom/Carousel";
import { Slider } from "@/components/atom/Slider";
import { Promotion } from "@/lib/dto";

export function Promotion() {
  return;
}

type Props = {
  list: Promotion[];
};
function PromotionCarousel({ list }: Props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={10}
      height="200px"
      backgroundColor="lightGray"
      style={{ position: "relative" }}
    >
      <Carousel items={list} show={1} />
    </Box>
  );
}

Promotion.Carousel = PromotionCarousel;
