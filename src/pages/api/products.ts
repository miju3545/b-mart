// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from "@/lib/dto";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: number;
  result: Product[];
};

export default async function products(req: NextApiRequest, res: NextApiResponse<Data>) {
  const result = [
    {
      id: 1001,
      title: "포스트 콘프라이크",
      price: 4000,
      discountPrice: 3600,
      discountPercent: 10,
      categoryId: 4,
      imageUrl: "/"
    },
    {
      id: 1002,
      title: "브라운 브레드",
      discountPrice: 0,
      discountPercent: 0,
      price: 4000,
      categoryId: 4,
      imageUrl: "/"
    },
    {
      id: 1003,
      title: "오곡 책스초코",
      discountPrice: 0,
      discountPercent: 0,
      price: 4000,
      categoryId: 4,
      imageUrl: "/"
    },
    {
      id: 1004,
      title: "포스트 콘프라이크",
      price: 4000,
      discountPrice: 3600,
      discountPercent: 10,
      categoryId: 4,
      imageUrl: "/"
    },
    {
      id: 1005,
      title: "브라운 브레드",
      discountPrice: 0,
      discountPercent: 0,
      price: 4000,
      categoryId: 4,
      imageUrl: "/"
    },
    {
      id: 1006,
      title: "오곡 책스초코",
      discountPrice: 0,
      discountPercent: 0,
      price: 4000,
      categoryId: 4,
      imageUrl: "/"
    },
    {
      id: 1007,
      title: "오곡 책스초코",
      discountPrice: 0,
      discountPercent: 0,
      price: 4000,
      categoryId: 4,
      imageUrl: "/"
    },
    {
      id: 1008,
      title: "오곡 책스초코",
      discountPrice: 0,
      discountPercent: 0,
      price: 4000,
      categoryId: 4,
      imageUrl: "/"
    },
    {
      id: 1009,
      title: "오곡 책스초코",
      discountPrice: 0,
      discountPercent: 0,
      price: 4000,
      categoryId: 4,
      imageUrl: "/"
    }
  ];
  res.status(200).json({ status: 200, result });
}
