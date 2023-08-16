import { PropsWithChildren } from "react";

type Props = {
  display:
    | "flex"
    | "block"
    | "inline-block"
    | "inline-flex"
    | "grid"
    | "inline-grid"
    | "none";
  flexDirection: "row" | "row-reverse" | "column" | "column-reverse";
  rowGap: number;
  padding: number;
};

export function Box({ children, ...rest }: PropsWithChildren<Props>) {
  return <div style={rest}>{children}</div>;
}
