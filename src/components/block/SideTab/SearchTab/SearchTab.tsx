import { useContext } from "react";
import { SideTab } from "../SideTab";
import { SideTabContext } from "@/contexts/index";
import { useRouter } from "next/router";

export function SearchTab() {
  const router = useRouter();
  const { hideSideTab, prevPageURL } = useContext(SideTabContext);
  const history = {
    back: () => router.push(prevPageURL)
  };

  const handleClose = () => {
    hideSideTab();
    history.back();
  };

  return (
    <SideTab header="검색" onPrev={history.back} onClose={handleClose}>
      <div>내용</div>
    </SideTab>
  );
}
