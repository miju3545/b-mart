import { Cart } from "@/lib/dto/cart";
import { PropsWithChildren, createContext, useEffect, useReducer, useState } from "react";

type CartContextType = {
  cart: Cart;
  isLoading: boolean;
  updateCartItems: (cartItems: Cart["list"]) => void;
};

export const CartContext = createContext(false as unknown as CartContextType);

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<CartContextType["cart"]>({ totalPrice: 0, list: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [rending, rerender] = useReducer((prev) => !prev, false);

  const updateCartItems = async (currentCart: Cart["list"]) => {
    const res = await fetch("/api/cart", { method: "PUT", body: JSON.stringify(currentCart) });
    const data = res.json();
    rerender();
    return data;
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/cart")
      .then((res) => res.json())
      .then((data) => setCart(data.result))
      .finally(() => setIsLoading(false));
  }, [rending]);

  return <CartContext.Provider value={{ cart, isLoading, updateCartItems }}>{children}</CartContext.Provider>;
};
