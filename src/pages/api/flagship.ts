import { SubCategory } from "@/lib/dto/category";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: number;
  result: SubCategory[] | [];
  message?: string;
};

export default async function flagship(req: NextApiRequest, res: NextApiResponse<Data>) {
  const result = [
    { id: 101, title: "빵" },
    { id: 102, title: "시리얼" },
    { id: 103, title: "떡" },
    { id: 104, title: "잼﹒스프레드" }
  ];

  res.status(200).json({ status: 200, result });
}
