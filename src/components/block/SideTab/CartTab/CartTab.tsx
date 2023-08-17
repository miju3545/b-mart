import { useContext } from "react";
import { SideTab } from "../SideTab";
import { SideTabContext } from "@/contexts/index";

export function CartTab() {
  const { hideSideTab } = useContext(SideTabContext);

  return (
    <SideTab header="장바구니" onPrev={hideSideTab} onClose={hideSideTab}>
      <div>내용</div>
    </SideTab>
  );
}
