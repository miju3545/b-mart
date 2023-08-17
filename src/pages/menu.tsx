import { MenuTab } from "@/components/block";
import { SideTabContext } from "@/contexts/index";
import React, { useContext, useEffect } from "react";

export default function Menu() {
  const { registerSideTab, clearSideTab } = useContext(SideTabContext);

  useEffect(() => {
    registerSideTab(<MenuTab />);

    return clearSideTab;
  }, []);

  return <div>메뉴 페이지</div>;
}
