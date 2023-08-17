import { useContext } from "react";
import { SideTab } from "../SideTab";
import { SideTabContext } from "@/contexts/index";

export function MenuTab() {
  const { hideSideTab } = useContext(SideTabContext);

  return (
    <SideTab onPrev={hideSideTab} onClose={hideSideTab}>
      <div>내용</div>
    </SideTab>
  );
}