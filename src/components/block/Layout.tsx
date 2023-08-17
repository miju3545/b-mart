import React, { PropsWithChildren, useContext } from "react";
import { ModalContext, SideTabContext } from "@/contexts/index";
import { Box } from "@/components/atom/Box";

export function Layout({ children }: PropsWithChildren) {
  const { sideTab, isSideTabOpened } = useContext(SideTabContext);
  const { modal } = useContext(ModalContext);

  return (
    <Box>
      <Box style={{ maxWidth: "1280px", margin: "auto", position: "relative" }}>{children}</Box>
      {isSideTabOpened && sideTab}
      {modal}
    </Box>
  );
}
