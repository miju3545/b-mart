import { PropsWithChildren, createContext } from "react";
import { CartItem } from "./CartContext";

export type OrderListContextType = {
  orderList: CartItem[];
};

export const OrderListContext = createContext(
  false as unknown as OrderListContextType
);

export const OrderListContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <OrderListContext.Provider value={{ orderList: [] }}>
      {children}
    </OrderListContext.Provider>
  );
};
