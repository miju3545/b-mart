import { Category } from "@/lib/dto";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: number;
  result: Pick<Category, "id" | "title">[];
};

export default async function categories(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const result = [
      { id: 0, title: "과일﹒샐러드" },
      { id: 1, title: "정육﹒수산﹒계란" },
      { id: 2, title: "밀키드" },
      { id: 3, title: "우유﹒유제품" },
      { id: 4, title: "빵﹒시리얼﹒잼" },
      { id: 5, title: "분식﹒야식" },
      { id: 6, title: "과자﹒초콜릿" },
      { id: 7, title: "아이스크림" },
      { id: 8, title: "헤어﹒바디﹒로션" },
      { id: 9, title: "더보기" },
      { id: 10, title: "빵" },
      { id: 11, title: "시리얼" },
      { id: 12, title: "떡" },
      { id: 13, title: "잼﹒스프레드" }
    ];

    res.status(200).json({ status: 200, result });
  } catch (err) {}
}
