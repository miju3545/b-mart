import { Box } from "@/components/atom/Box";
import { Heading } from "@/components/atom/Heading";
import { IconButton } from "@/components/atom/IconButton";
import { ImageWithFallback } from "@/components/atom/ImageWithFallback";
import { Product } from "@/lib/dto";
import Link from "next/link";

type Props = {
  product: Product;
  size: "sm" | "md" | "lg";
};

export function ProductCard(props: Props) {
  const {
    product: { id, title, price, discountPrice = 0, discountPercent = 0, imageUrl }
  } = props;

  const getSize = () => {
    switch (props.size) {
      case "sm":
        return { width: 150, height: 150 };
      case "md":
        return { width: 200, height: 200 };
      case "lg":
        return { width: 300, height: 300 };
    }
  };
  return (
    <Box display="flex" flexDirection="column" style={{ border: "1px solid gray" }}>
      <Box width="100%" height="100%" style={{ position: "relative" }}>
        <ImageWithFallback src={imageUrl} alt={title} {...getSize()} />
        <IconButton icon="❤️" onClick={() => {}} style={{ position: "absolute", bottom: 10, right: 10 }} />
      </Box>
      <Box display="flex" flexDirection="column">
        <Heading level={4}>
          <Link href={`/products/${id}`}>{title}</Link>
        </Heading>
        <Box>
          {discountPercent > 0 && <span>{discountPercent}%</span>}
          {discountPrice > 0 && <del>{discountPrice}</del>}
          <strong>{price}</strong>
        </Box>
      </Box>
    </Box>
  );
}
