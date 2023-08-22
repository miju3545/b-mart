import React, { ReactNode, useContext } from "react";
import { Box } from "@/components/atom/Box";
import { SideTabContext } from "@/contexts/index";
import { animated, useSpring } from "react-spring";
import { SideTabTopbar } from "./SideTabTopbar";

type Props = {
  title?: ReactNode;
  trailingIcons?: ReactNode | ReactNode[];
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
  trailingIcons,
  children,
  footer,
  onClose,
  onPrev,
  hasBackground = true,
  closeOnOutsideClick = true,
  position = "right"
}: Props) {
  // TODO: outside click, escape key click시 onClose 호출되도록 처리필요함
  const getInnerPosition = () => {
    if (position === "left") return { left: 0 };
    if (position === "right") return { right: 0 };
  };

  const { isSideTabOpened } = useContext(SideTabContext);
  const [animatedStyle] = useSpring<{
    width?: string;
  }>(
    {
      from: isSideTabOpened
        ? {
            width: "0px",
            minWidth: "0px",
            maxWidth: "0px"
          }
        : {
            width: "500px",
            minWidth: "500px",
            maxWidth: "500px"
          },
      to: isSideTabOpened
        ? {
            width: "500px",
            minWidth: "500px",
            maxWidth: "500px"
          }
        : {
            width: "0px",
            minWidth: "0px",
            maxWidth: "0px"
          },
      delay: 0,
      immediate: false
    },
    [isSideTabOpened]
  );

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
      <animated.div
        style={{
          ...animatedStyle,
          position: "absolute",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#fff",
          ...getInnerPosition()
        }}
      >
        <Box onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}>
          <SideTabTopbar title={title} onPrev={onPrev} trailingIcons={trailingIcons} />
          <Box className="main-content">{children}</Box>
          {footer}
        </Box>
      </animated.div>
    </Box>
  );
}
