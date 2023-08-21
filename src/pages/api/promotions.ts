import { Promotion } from "@/lib/dto/promotion";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: number;
  result: Promotion[];
};

const promotionSliders = [
  { imageUrl: "https://images.unsplash.com/photo-1544511916-0148ccdeb877?w=1920&q=80&auto=format&fit=crop" },
  { imageUrl: "https://images.unsplash.com/photo-1544572571-ab94fd872ce4?w=1920&q=80&auto=format&fit=crop" },
  { imageUrl: "https://images.unsplash.com/reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?w=1920&q=80&auto=format&fit=crop" }
];
export default async function promotions(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ status: 200, result: promotionSliders });
}
