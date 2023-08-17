import { PropsWithChildren } from "react";

type Props = {
  display?: "flex" | "block" | "inline-block" | "inline-flex" | "grid" | "inline-grid" | "none";
  alignItem?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between";
  gap?: number;
  height?: number;
  padding?: number;
  backgroundColor?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: React.CSSProperties;
  className?: string;
};

export function Box(props: PropsWithChildren<Props>) {
  const { children, style, onClick, className, ...rest } = props;
  const getStyle = () => {
    const { display, flexDirection, alignItem, justifyContent, height, backgroundColor, gap = 0, padding = 0 } = rest;
    return {
      display,
      flexDirection,
      alignItem,
      justifyContent,
      gap: `${gap}px`,
      padding: `${padding}px`,
      height: height ? `${height}px` : "fit-content",
      backgroundColor
    };
  };

  return (
    <div style={{ ...getStyle(), ...style }} className={className} onClick={onClick}>
      {children}
    </div>
  );
}
