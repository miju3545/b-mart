import NextImage, { ImageProps } from "next/image";
import { Box } from "../Box";

type Props = ImageProps & {
  fallbackSrc?: string;
};

export function ImageWithFallback({ fallbackSrc, ...rest }: Props) {
  return (
    <Box backgroundColor="blue" width={`${rest.width}px`} height={`${rest.height}px`}>
      <NextImage {...rest} />;
    </Box>
  );
}
