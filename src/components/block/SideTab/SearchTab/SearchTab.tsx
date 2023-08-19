import { useContext, useEffect, useState } from "react";
import { SideTab } from "../SideTab";
import { SideTabContext } from "@/contexts/index";
import { SearchIcon } from "@/components/Icons/Search";
import { IconButton } from "@/components/atom/IconButton";
import { SearchList } from "../../Category/SearchList";
import { SearchHistoryList } from "../../Category/SearchHistoryList";
import { useForceRender } from "@/hooks/useForceRender";

export function SearchTab() {
  const { hideSideTab } = useContext(SideTabContext);
  const [searchList, setSearchList] = useState<string[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [keyword, setKeyword] = useState("");
  const { renderFlag, forceRender } = useForceRender();
  const handleSearch = () => {
    fetch(`/api/search?keyword=${keyword}`)
      .then((res) => res.json())
      .then((data) => setSearchList(data.result))
      .finally(() => setKeyword(""));
  };

  const handleDeleteSearchHistory = (title: string) => {
    fetch(`/api/search/history`, { method: "DELETE", body: title })
      .then((res) => res.json())
      .finally(forceRender);
  };

  useEffect(() => {
    fetch(`/api/search/history`)
      .then((res) => res.json())
      .then((data) => setSearchHistory(data.result));
  }, [keyword, searchList, renderFlag]);

  return (
    <SideTab
      title={
        <input
          type="search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          style={{ width: "300px" }}
        />
      }
      trailingIcons={<IconButton icon={<SearchIcon />} onClick={handleSearch} />}
      onPrev={hideSideTab}
      onClose={hideSideTab}
    >
      <SearchList list={searchList} />
      <SearchHistoryList title="최근 검색어" list={searchHistory} onDelete={handleDeleteSearchHistory} />
    </SideTab>
  );
}
