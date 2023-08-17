import NextImage, { ImageProps } from "next/image";
import { Box } from "../Box";

type Props = ImageProps & {
  fallbackSrc?: string;
};

export function ImageWithFallback({ fallbackSrc, ...rest }: Props) {
  return (
    // <Box backgroundColor="gray" width="100%" height="100%">
    <NextImage
      {...rest}
      style={{ width: "100%", height: "100%", display: "block", background: "red" }}
      blurDataURL={fallbackSrc}
    />
    // </Box>
  );
}
