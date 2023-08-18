import { Category } from "@/lib/dto";
import type { NextApiRequest, NextApiResponse } from "next";
import { categoryDb } from ".";

type Data = {
  status: number;
  result: Category | [];
  message?: string;
};

export default async function categoryId(req: NextApiRequest, res: NextApiResponse<Data>) {
  const getCategoryInfo = (id: number) => {
    return categoryDb.find((category) => category.id === id) || {};
  };

  const result = {
    ...getCategoryInfo(Number(req.query.categoryId)),
    subCategories: [
      { id: 101, title: "빵" },
      { id: 102, title: "시리얼" },
      { id: 103, title: "떡" },
      { id: 104, title: "잼﹒스프레드" }
    ],
    products: [
      {
        id: 1001,
        title: "포스트 콘프라이크",
        price: 4000,
        discountPrice: 0,
        discountPercent: 0,
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
      }
    ]
  } as unknown as Category;

  if (result.id) {
    return res.status(200).json({ status: 200, result });
  }

  res.status(404).json({ status: 404, result: [], message: "not found" });
}
