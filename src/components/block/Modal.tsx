import React, { ReactNode } from "react";
import { Box } from "../atom/Box";

type Props = {
  header?: ReactNode;
  children: React.ReactNode;
  footer?: ReactNode[];
  onClose: () => void;
  hasBackground?: boolean;
  closeOnOutsideClick?: boolean;
  hasCloseButton?: boolean;
  position?: "center" | "left" | "right";
};

export function Modal({
  header,
  children,
  footer,
  onClose,
  hasBackground = true,
  closeOnOutsideClick = true,
  hasCloseButton = true,
  position = "center",
}: Props) {
  // TODO: outside click, escape key click시 onClose 호출되도록 처리필요함
  return (
    // overlay
    <Box
      style={hasBackground ? { backgroundColor: "#111" } : undefined}
      onClick={closeOnOutsideClick ? onClose : () => {}}>
      {/* inner content */}
      <Box
        onClick={(e) => e.stopPropagation()}
        display='flex'
        flexDirection='column'
        padding={10}>
        <Box display='flex' justifyContent='space-between'>
          <Box>{header}</Box>
          {hasCloseButton && (
            <button onClick={onClose} type='button'>
              x
            </button>
          )}
        </Box>
        {children}
        <Box>{footer}</Box>
      </Box>
    </Box>
  );
}
