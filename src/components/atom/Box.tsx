import { PropsWithChildren } from "react";

type Props = {
  display?: "flex" | "block" | "inline-block" | "inline-flex" | "grid" | "inline-grid" | "none";
  alignItem?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between";
  gap?: number;
  padding?: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: React.CSSProperties;
};

export function Box({ children, style, onClick, ...rest }: PropsWithChildren<Props>) {
  const getStyle = () => {
    const { display, flexDirection, alignItem, justifyContent, gap = 0, padding = 0 } = rest;
    return {
      display,
      flexDirection,
      alignItem,
      justifyContent,
      gap: `${gap}px`,
      padding: `${padding}px`
    };
  };

  return (
    <div style={{ ...getStyle(), ...style }} onClick={onClick}>
      {children}
    </div>
  );
}
