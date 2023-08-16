import { PropsWithChildren, ReactNode, createContext, useState } from "react";

type ModalContextType = {
  modal: ReactNode;
  openModal: (modal: ReactNode) => void;
  closeModal: () => void;
};

export const ModalContext = createContext(false as unknown as ModalContextType);

const EMPTY_COMPONENT = () => <></>;

export const ModalContextProvider = ({ children }: PropsWithChildren) => {
  const [modal, setModal] = useState<ReactNode>(EMPTY_COMPONENT);

  return (
    <ModalContext.Provider
      value={{
        modal,
        openModal: setModal,
        closeModal: () => setModal(EMPTY_COMPONENT),
      }}>
      {children}
    </ModalContext.Provider>
  );
};
