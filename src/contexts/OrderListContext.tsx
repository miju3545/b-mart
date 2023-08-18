import { Cart } from "@/lib/dto/cart";
import { PropsWithChildren, createContext, useEffect, useReducer, useState } from "react";

type OrderListContextType = {
  cart: Cart;
  useUpdateCartItems: () => { mutate: (currentCart: Cart["items"]) => Promise<unknown> };
  currentPrice: number;
  setCurrentPrice: (price: number) => void;
};

export const OrderListContext = createContext(false as unknown as OrderListContextType);

export const OrderListContextProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<Cart>({ totalPrice: 0, items: [] });
  const [currentPrice, setCurrentPrice] = useState(0);
  const [render, rerender] = useReducer((prev) => !prev, false);

  // TODO: hooks으로 변경할 것
  const useUpdateCartItems = () => {
    return {
      mutate: async (currentCart: Cart["items"]) => {
        const res = await fetch("/api/cart", { method: "PUT", body: JSON.stringify(currentCart) });
        const data = res.json();
        rerender();
        return data;
      }
    };
  };

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setCart(data.result);
        setCurrentPrice(data.result.totalPrice);
      });
  }, [render]);

  return (
    <OrderListContext.Provider value={{ cart, useUpdateCartItems, currentPrice, setCurrentPrice }}>
      {children}
    </OrderListContext.Provider>
  );
};
