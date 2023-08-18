import { Category } from "@/lib/dto";
import { MainCategory } from "@/lib/dto/category";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: number;
  result: MainCategory[];
};

const db = [
  { id: 0, title: "과일﹒샐러드", imageUrl: "/" },
  { id: 1, title: "정육﹒수산﹒계란", imageUrl: "/" },
  { id: 2, title: "밀키드", imageUrl: "/" },
  { id: 3, title: "우유﹒유제품", imageUrl: "/" },
  { id: 4, title: "빵﹒시리얼﹒잼", imageUrl: "/" },
  { id: 5, title: "분식﹒야식", imageUrl: "/" },
  { id: 6, title: "과자﹒초콜릿", imageUrl: "/" },
  { id: 7, title: "아이스크림", imageUrl: "/" },
  { id: 8, title: "헤어﹒바디﹒로션", imageUrl: "/" }
];

export default async function categories(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    res.status(200).json({ status: 200, result: db });
  } catch (err) {}
}
