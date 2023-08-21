import { Box } from "@/components/atom/Box";
import { Heading } from "@/components/atom/Heading";
import { IconButton } from "@/components/atom/IconButton";
import { ImageWithFallback } from "@/components/atom/ImageWithFallback";
import { CartContext } from "@/contexts/index";
import { Product } from "@/lib/dto";
import Link from "next/link";
import { useContext } from "react";

type Props = {
  product: Product;
  inCart?: boolean;
  inWishList?: boolean;
  size?: "sm" | "md" | "lg";
  responsive?: boolean;
};

export function ProductFlagShipCard(props: Props) {
  const { product, size = "sm", inCart = false, inWishList = false, responsive = false } = props;
  const { useUpdateCartItems, cart } = useContext(CartContext);
  const { mutate } = useUpdateCartItems();
  const getSize = () => {
    switch (size) {
      case "sm":
        return { width: 150, height: 150 };
      case "md":
        return { width: 200, height: 200 };
      case "lg":
        return { width: 300, height: 300 };
    }
  };

  return (
    <Box display="flex" flexDirection="column" width="100%" style={{ border: "1px solid gray" }}>
      <Box width="100%" height="100%" style={{ position: "relative" }}>
        <ImageWithFallback
          src={product.imageUrl}
          alt={product.title}
          {...getSize()}
          layout={responsive ? "responsive" : "intrinsic"}
        />
        <IconButton icon="찜" onClick={() => {}} style={{ position: "absolute", bottom: 10, right: 10 }} />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" flexDirection="column" style={responsive ? undefined : { width: `${getSize()?.width}px` }}>
          <Heading level={4}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </Heading>
          <Box>
            {product.discountPercent > 0 && <span>{product.discountPercent}%</span>}
            {product.discountPrice > 0 && <del>{product.price}</del>}
            <strong>{product.discountPrice}</strong>
          </Box>
        </Box>
        <IconButton icon="장바구니" onClick={() => mutate([...cart.items, { ...product, quantity: 1 }])} />
      </Box>
    </Box>
  );
}
