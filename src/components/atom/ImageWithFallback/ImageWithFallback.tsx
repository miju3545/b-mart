import NextImage, { ImageProps } from "next/image";
import { Box } from "../Box";

type Props = ImageProps & {
  fallbackSrc?: string;
};

export function ImageWithFallback(props: Props) {
  const {
    fallbackSrc = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==",
    ...rest
  } = props;
  return (
    <NextImage
      {...rest}
      style={{ width: "100%", height: "100%", display: "block", ...rest.style }}
      placeholder="blur"
      blurDataURL={fallbackSrc}
    />
  );
}
