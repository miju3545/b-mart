import { Product } from "@/lib/dto";
import { PropsWithChildren, createContext } from "react";

type WishListContextType = {
  wishlist: Product[];
};

export const WishListContext = createContext(
  false as unknown as WishListContextType
);

export const WishListContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <WishListContext.Provider value={{ wishlist: [] }}>
      {children}
    </WishListContext.Provider>
  );
};
