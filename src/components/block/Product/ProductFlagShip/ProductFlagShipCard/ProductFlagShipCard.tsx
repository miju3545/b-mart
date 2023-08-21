import { Box } from "@/components/atom/Box";
import { Heading } from "@/components/atom/Heading";
import { IconButton } from "@/components/atom/IconButton";
import { ImageWithFallback } from "@/components/atom/ImageWithFallback";
import { CartContext, WishListContext } from "@/contexts/index";
import { Product } from "@/lib/dto";
import Link from "next/link";
import { useContext } from "react";

type Props = {
  product: Product;
  size?: "sm" | "md" | "lg";
  responsive?: boolean;
};

export function ProductFlagShipCard(props: Props) {
  const {
    product: { id, title, price, discountPrice = 0, discountPercent = 0, imageUrl },
    size = "sm",
    responsive = false
  } = props;
  const { inWishlist, useUpdateWishlistItem } = useContext(WishListContext);
  const { useUpdateCartItems, cart } = useContext(CartContext);
  const { mutate: mutateWishlist } = useUpdateWishlistItem();
  const { mutate: mutateCart } = useUpdateCartItems();
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
        <ImageWithFallback src={imageUrl} alt={title} {...getSize()} layout={responsive ? "responsive" : "intrinsic"} />
        <IconButton
          icon="찜"
          onClick={() => mutateWishlist(props.product)}
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            background: inWishlist(props.product) ? "blue" : "inherit"
          }}
        />{" "}
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" flexDirection="column" style={responsive ? undefined : { width: `${getSize()?.width}px` }}>
          <Heading level={4}>
            <Link href={`/products/${id}`}>{title}</Link>
          </Heading>
          <Box>
            {discountPercent > 0 && <span>{discountPercent}%</span>}
            {discountPrice > 0 && <del>{price}</del>}
            <strong>{discountPrice}</strong>
          </Box>
        </Box>
        <IconButton icon="장바구니" onClick={() => mutateCart([...cart.items, { ...props.product, quantity: 1 }])} />
      </Box>
    </Box>
  );
}
