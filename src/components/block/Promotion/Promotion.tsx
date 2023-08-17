import { Box } from "@/components/atom/Box";
import { Slider } from "@/components/atom/Slider";

export function Promotion() {
  return;
}
function PromotionSlider() {
  return (
    <Box display="flex" flexDirection="column" gap={10} height={200} backgroundColor="lightGray">
      <Slider />
    </Box>
  );
}

Promotion.Slider = PromotionSlider;
