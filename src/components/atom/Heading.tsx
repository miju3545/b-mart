import { CSSProperties, PropsWithChildren, createElement } from "react";

type Props = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  style?: CSSProperties;
};

export function Heading({ level = 1, children, style }: PropsWithChildren<Props>) {
  const Tag = (props: any) => createElement(`h${level}`, props, children);

  return (() => (typeof children === "string" ? <Tag style={style} /> : <>{children}</>))();
}
