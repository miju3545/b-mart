import { Cart, CartProduct } from "@/lib/dto/cart";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: number;
  result: Cart;
};

const db = {
  totalPrice: 12000,
  items: [
    {
      id: 1001,
      title: "포스트 콘프라이크",
      price: 4000,
      discountPrice: 3600,
      discountPercent: 10,
      categoryId: 4,
      imageUrl: "https://cdn-mart.baemin.com/sellergoods/main/066eded0-3e89-4652-879c-ab5fc35926cd.jpg?h=300&w=300",
      quantity: 1
    },
    {
      id: 1002,
      title: "브라운 브레드",
      discountPrice: 4000,
      discountPercent: 0,
      price: 4000,
      categoryId: 4,
      imageUrl: "https://cdn-mart.baemin.com/sellergoods/main/066eded0-3e89-4652-879c-ab5fc35926cd.jpg?h=300&w=300",
      quantity: 1
    },
    {
      id: 1003,
      title: "오곡 책스초코",
      discountPrice: 4000,
      discountPercent: 0,
      price: 4000,
      categoryId: 4,
      imageUrl: "https://cdn-mart.baemin.com/sellergoods/main/066eded0-3e89-4652-879c-ab5fc35926cd.jpg?h=300&w=300",
      quantity: 1
    }
  ]
};

export default async function cart(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "PUT") {
    const list = JSON.parse(req.body);
    db.totalPrice = list.reduce((acc: number, cur: CartProduct) => acc + cur.discountPrice * cur.quantity, 0);
    db.items = list;
    res.status(200).json({ status: 200, result: db });
  }

  if (req.method === "GET") {
    res.status(200).json({ status: 200, result: db });
  }
}
