import {
  PropsWithChildren,
  ReactNode,
  createContext,
  useRef,
  useState,
} from "react";

type SideTabOptions = {
  onOpen?: () => void;
  onClose?: () => void;
};

type SideTabContextType = {
  sideTab: ReactNode;
  isSideTabOpened: boolean;
  registerSideTab: (props: ReactNode, options?: SideTabOptions) => void;
  clearSideTab: () => void;
  showSideTab: () => void;
  hideSideTab: () => void;
  prevPageURL: string;
  setPrevPageURL: (prevURL: string) => void;
  clearPrevPageURL: () => void;
};

export const SideTabContext = createContext(
  false as unknown as SideTabContextType
);

export const SideTabContextProvider = ({ children }: PropsWithChildren) => {
  const [prevPageURL, setPrevPageURL] = useState("");
  const [sideTab, setSideTab] = useState<ReactNode | null>(null);
  const [isSideTabOpened, setIsSideTabOpened] = useState(false);

  const eventCallback = useRef<any>();

  return (
    <SideTabContext.Provider
      value={{
        sideTab,
        isSideTabOpened,
        registerSideTab: (component, options) => {
          setSideTab(component);
          eventCallback.current = options;
        },
        // cleanup 용도로만 사용
        clearSideTab: () => {
          setSideTab(null);
          eventCallback.current = undefined;
        },
        showSideTab: () => {
          setIsSideTabOpened(true);
          eventCallback.current?.onOpen?.();
        },
        hideSideTab: () => {
          setIsSideTabOpened(false);
          eventCallback.current?.onClose?.();
        },
        prevPageURL,
        setPrevPageURL: (prevURL: string) => setPrevPageURL(prevURL),
        clearPrevPageURL: () => setPrevPageURL(""),
      }}>
      {children}
    </SideTabContext.Provider>
  );
};
