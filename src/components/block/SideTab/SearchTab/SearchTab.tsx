import { useContext } from "react";
import { SideTab } from "../SideTab";
import { SideTabContext } from "@/contexts/index";

export function SearchTab() {
  const { hideSideTab } = useContext(SideTabContext);

  return (
    <SideTab title="검색" onPrev={hideSideTab} onClose={hideSideTab}>
      <div>내용</div>
    </SideTab>
  );
}
