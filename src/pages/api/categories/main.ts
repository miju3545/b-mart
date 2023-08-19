import { MainCategory } from "@/lib/dto/category";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: number;
  result: MainCategory[];
};

const db = [
  {
    id: 0,
    title: "과일﹒샐러드",
    imageUrl: "https://cdn-mart.baemin.com/inventory-unit/33182e13-8b49-4750-a0f5-dc44371f9cda.jpg?h=100&w=100"
  },
  {
    id: 1,
    title: "정육﹒수산﹒계란",
    imageUrl: "https://cdn-mart.baemin.com/inventory-unit/33182e13-8b49-4750-a0f5-dc44371f9cda.jpg?h=100&w=100"
  },
  {
    id: 2,
    title: "밀키드",
    imageUrl: "https://cdn-mart.baemin.com/inventory-unit/33182e13-8b49-4750-a0f5-dc44371f9cda.jpg?h=100&w=100"
  },
  {
    id: 3,
    title: "우유﹒유제품",
    imageUrl: "https://cdn-mart.baemin.com/inventory-unit/33182e13-8b49-4750-a0f5-dc44371f9cda.jpg?h=100&w=100"
  },
  {
    id: 4,
    title: "빵﹒시리얼﹒잼",
    imageUrl: "https://cdn-mart.baemin.com/inventory-unit/33182e13-8b49-4750-a0f5-dc44371f9cda.jpg?h=100&w=100"
  },
  {
    id: 5,
    title: "분식﹒야식",
    imageUrl: "https://cdn-mart.baemin.com/inventory-unit/33182e13-8b49-4750-a0f5-dc44371f9cda.jpg?h=100&w=100"
  },
  {
    id: 6,
    title: "과자﹒초콜릿",
    imageUrl: "https://cdn-mart.baemin.com/inventory-unit/33182e13-8b49-4750-a0f5-dc44371f9cda.jpg?h=100&w=100"
  },
  {
    id: 7,
    title: "아이스크림",
    imageUrl: "https://cdn-mart.baemin.com/inventory-unit/33182e13-8b49-4750-a0f5-dc44371f9cda.jpg?h=100&w=100"
  },
  {
    id: 8,
    title: "헤어﹒바디﹒로션",
    imageUrl: "https://cdn-mart.baemin.com/inventory-unit/33182e13-8b49-4750-a0f5-dc44371f9cda.jpg?h=100&w=100"
  }
];

export default async function categories(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    res.status(200).json({ status: 200, result: db });
  } catch (err) {}
}
