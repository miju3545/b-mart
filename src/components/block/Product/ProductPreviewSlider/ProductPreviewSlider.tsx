import { Slider } from "@/components/atom/Slider";
import { ReactNode } from "react";
import { Heading } from "@/components/atom/Heading";
import { Box } from "@/components/atom/Box";
import { Product } from "@/lib/dto";

type Props = {
  title: ReactNode;
  currentItem: Product;
  setCurrentItem: (product: Product) => void;
  list: Product[];
};

export function ProductPreviewSlider({ title, currentItem, setCurrentItem, list }: Props) {
  return (
    <Box display="flex" flexDirection="column" gap={10} height="200px" backgroundColor="lightGray">
      <Heading level={3}>{title}</Heading>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <button type="button" onClick={() => setCurrentItem(item)}>
              {item.title}
            </button>
          </li>
        ))}
      </ul>
      <Slider items={list} show={1} />
    </Box>
  );
}
