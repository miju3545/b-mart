import { SearchTab } from "@/components/block";
import { SideTabContext } from "@/contexts";
import React, { useContext, useEffect } from "react";

export default function Search() {
  const { registerSideTab, clearSideTab } = useContext(SideTabContext);

  useEffect(() => {
    registerSideTab(<SearchTab />);

    return clearSideTab;
  }, []);

  return <div>검색 페이지</div>;
}
