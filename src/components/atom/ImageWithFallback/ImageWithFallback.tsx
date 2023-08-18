import NextImage, { ImageProps } from "next/image";

type Props = ImageProps & {
  fallbackSrc?: string;
};

export function ImageWithFallback(props: Props) {
  const { fallbackSrc, ...rest } = props;
  return (
    <NextImage
      {...rest}
      style={{ width: "100%", height: "100%", display: "block", ...rest.style }}
      // placeholder="blur"
      // blurDataURL={fallbackSrc}
    />
  );
}
