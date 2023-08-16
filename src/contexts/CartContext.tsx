import { PropsWithChildren, createContext } from "react";

export type CartItem = {
  [name: string]: {
    count: number;
    checked: boolean;
  };
};
type CartContextType = {
  cart: CartItem[];
};

export const CartContext = createContext(false as unknown as CartContextType);

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <CartContext.Provider value={{ cart: [] }}>{children}</CartContext.Provider>
  );
};
