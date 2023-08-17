import { CSSProperties, PropsWithChildren } from "react";

type Props = {
  display?: "flex" | "block" | "inline-block" | "inline-flex" | "grid" | "inline-grid" | "none";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
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
    const { display, flexDirection, alignItems, justifyContent, height, backgroundColor, gap, padding } = rest;
    const css: CSSProperties = {};

    display && (css["display"] = display);
    flexDirection && (css["flexDirection"] = flexDirection);
    alignItems && (css["alignItems"] = alignItems);
    justifyContent && (css["justifyContent"] = justifyContent);
    height && (css["height"] = `${height}px`);
    backgroundColor && (css["backgroundColor"] = backgroundColor);
    gap && (css["gap"] = `${gap}px`);
    padding && (css["padding"] = `${padding}px`);

    return css;
  };

  return (
    <div style={{ ...getStyle(), ...style }} className={className} onClick={onClick}>
      {children}
    </div>
  );
}
