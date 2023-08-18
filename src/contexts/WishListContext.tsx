import { Product } from "@/lib/dto";
import { Wishlist } from "@/lib/dto/wishlist";
import { PropsWithChildren, createContext, useEffect, useReducer, useState } from "react";

type WishList = {
  wishlist: {
    items: Product[];
  };
  isLoading: boolean;
  updateWishlistItems: (items: Wishlist) => void;
};

export const WishListContext = createContext(false as unknown as WishList);

export const WishListContextProvider = ({ children }: PropsWithChildren) => {
  const [wishlist, setWishlist] = useState<WishList["wishlist"]>({ items: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [rending, rerender] = useReducer((prev) => !prev, false);

  const updateWishlistItems = async (currentCart: WishList["wishlist"]) => {
    const res = await fetch("/api/wishlist", { method: "PUT", body: JSON.stringify(currentCart) });
    const data = res.json();
    rerender();
    return data;
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/wishlist")
      .then((res) => res.json())
      .then((data) => setWishlist(data.result))
      .finally(() => setIsLoading(false));
  }, [rending]);

  return (
    <WishListContext.Provider value={{ wishlist, isLoading, updateWishlistItems }}>{children}</WishListContext.Provider>
  );
};
