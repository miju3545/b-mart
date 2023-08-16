import { ModalContext, SideTabContext } from "@/contexts";
import React, { PropsWithChildren, useContext } from "react";

export function Layout({ children }: PropsWithChildren) {
  const { sideTab, isSideTabOpened } = useContext(SideTabContext);
  const { modal } = useContext(ModalContext);

  return (
    <div>
      {children}
      {isSideTabOpened && sideTab}
      {modal}
    </div>
  );
}
