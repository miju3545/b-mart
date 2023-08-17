import { Category } from "@/lib/dto";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: number;
  result: Category;
};

export default async function categoryId(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const result = {
      id: 4,
      title: "빵﹒시리얼﹒잼",
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
    };

    res.status(200).json({ status: 200, result });
  } catch (err) {}
}
