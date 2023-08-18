import React, { ReactNode } from "react";
import { Box } from "@/components/atom/Box";
import { Heading } from "@/components/atom/Heading";
import { IconButton } from "@/components/atom/IconButton";
import style from "./SideTab.module.scss";
import classNames from "classnames/bind";
import { Topbar } from "../Topbar";
const cx = classNames.bind(style);

type Props = {
  title?: ReactNode;
  children: React.ReactNode;
  footer?: ReactNode[];
  onClose: () => void;
  onPrev?: () => void;
  hasBackground?: boolean;
  closeOnOutsideClick?: boolean;
  position?: "left" | "right";
};

export function SideTab({
  title,
  children,
  footer,
  onClose,
  onPrev,
  hasBackground = true,
  closeOnOutsideClick = true,
  position = "right"
}: Props) {
  // TODO: outside click, escape key click시 onClose 호출되도록 처리필요함
  // TODO: onClose 시 애니메이션 처리 필요함

  const getInnerPosition = () => {
    if (position === "left") return { left: 0 };
    if (position === "right") return { right: 0 };
  };

  return (
    <Box
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100vh",
        zIndex: 4
      }}
      backgroundColor={hasBackground ? "rgba(0,0,0,0.4)" : ""}
      onClick={closeOnOutsideClick ? onClose : () => {}}
    >
      <Box
        style={{
          position: "absolute",
          width: "500px",
          backgroundColor: "#fff",
          height: "100vh",
          ...getInnerPosition()
        }}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
      >
        <Topbar title={title} onPrev={onPrev} />
        <Box className="main-content">{children}</Box>
        {footer}
      </Box>
    </Box>
  );
}
