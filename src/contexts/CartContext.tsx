import { useForceRender } from "@/hooks/useForceRender";
import { Cart } from "@/lib/dto/cart";
import { PropsWithChildren, createContext, useEffect, useReducer, useState } from "react";

type CartContextType = {
  cart: Cart;
  useUpdateCartItems: () => { mutate: (currentCart: Cart["items"]) => Promise<unknown> };
  currentPrice: number;
  setCurrentPrice: (price: number) => void;
};

export const CartContext = createContext(false as unknown as CartContextType);

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<Cart>({ totalPrice: 0, items: [] });
  const [currentPrice, setCurrentPrice] = useState(0);
  const { renderFlag, forceRender } = useForceRender();

  // TODO: hooks으로 변경할 것
  const useUpdateCartItems = () => {
    return {
      mutate: async (currentCart: Cart["items"]) => {
        const res = await fetch("/api/cart", { method: "PUT", body: JSON.stringify(currentCart) });
        const data = res.json();
        forceRender();
        return data;
      }
    };
  };

  useEffect(() => {
    fetch("/api/cart")
      .then((res) => res.json())
      .then((data) => {
        setCart(data.result);
        setCurrentPrice(data.result.totalPrice);
      });
  }, [renderFlag]);

  return (
    <CartContext.Provider value={{ cart, useUpdateCartItems, currentPrice, setCurrentPrice }}>
      {children}
    </CartContext.Provider>
  );
};
