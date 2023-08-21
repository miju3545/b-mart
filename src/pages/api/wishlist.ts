import { Product, Wishlist } from "@/lib/dto";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: number;
  result: Wishlist;
};

const db: Wishlist = {
  items: []
};

const toggleItems = (store: Wishlist["items"], product: Product): Product[] => {
  const existingItem = store.find((item) => item.id === product.id);

  if (existingItem) {
    return store.filter((item) => item.id !== product.id);
  } else {
    return [...store, product];
  }
};

export default async function wishlist(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "PATCH") {
    const product = JSON.parse(req.body) as Product;
    db.items = toggleItems(db.items, product);

    res.status(200).json({ status: 200, result: db });
  }

  if (req.method === "GET") {
    res.status(200).json({ status: 200, result: db });
  }
}
