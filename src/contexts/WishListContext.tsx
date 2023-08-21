import { Product } from "@/lib/dto";
import { PropsWithChildren, createContext, useEffect, useReducer, useState } from "react";

type WishList = {
  wishlist: {
    items: Product[];
  };
  isLoading: boolean;
  useUpdateWishlistItem: () => { mutate: (currentProduct: Product) => Promise<unknown> };
  inWishlist: (currentProduct: Product) => boolean;
};

export const WishListContext = createContext(false as unknown as WishList);

export const WishListContextProvider = ({ children }: PropsWithChildren) => {
  const [wishlist, setWishlist] = useState<WishList["wishlist"]>({ items: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [rending, rerender] = useReducer((prev) => !prev, false);

  const useUpdateWishlistItem = () => {
    return {
      mutate: async (currentProduct: Product) => {
        const res = await fetch("/api/wishlist", { method: "PATCH", body: JSON.stringify(currentProduct) });
        const data = res.json();
        rerender();
        return data;
      }
    };
  };

  const inWishlist = (currentProduct: Product) => {
    return wishlist.items.some((product) => product.id === currentProduct.id);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/wishlist")
      .then((res) => res.json())
      .then((data) => setWishlist(data.result))
      .finally(() => setIsLoading(false));
  }, [rending]);

  return (
    <WishListContext.Provider value={{ wishlist, isLoading, useUpdateWishlistItem, inWishlist }}>
      {children}
    </WishListContext.Provider>
  );
};
