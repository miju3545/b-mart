import { Product } from ".";

export type CartProduct = Product & {
  quantity: number;
};

export type Cart = {
  totalPrice: number;
  list: CartProduct[] | [];
};
