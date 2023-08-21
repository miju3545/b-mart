import { Slider } from "@/components/atom/Slider";
import { ReactNode, useState } from "react";
import { Heading } from "@/components/atom/Heading";
import { Box } from "@/components/atom/Box";
import { Product } from "@/lib/dto";
import { Scrollable } from "@/components/atom/Scrollable";
import { ProductCard } from "../ProductCard/ProductCard";
import { useEffect } from "react";
import Image from "next/image";
import { ProductFlagShipCard } from "../ProductFlagShip/ProductFlagShipCard";

type Props = {
  title: ReactNode;
  list: Product[];
};

export function ProductPreviewSlider({ title, list }: Props) {
  const [currentItem, setCurrentItem] = useState<Product>(list?.[0]);

  useEffect(() => {
    if (list?.[0]) {
      setCurrentItem(list[0]);
    }
  }, [list]);

  return (
    <Box display="flex" flexDirection="column" gap={10} backgroundColor="lightGray">
      <Heading level={3}>{title}</Heading>
      <Scrollable>
        {list?.map((item) => (
          <Box
            key={item.id}
            width="50px"
            height="50px"
            style={{ border: item.id === currentItem?.id ? "1px solid red" : "", overflow: "hidden" }}
            onClick={() => setCurrentItem(item)}
          >
            <Image src={item.imageUrl} alt={item.imageUrl} width={50} height={50} />
          </Box>
        ))}
      </Scrollable>
      {currentItem && <ProductFlagShipCard key={currentItem?.id} product={currentItem} size="sm" />}
    </Box>
  );
}
