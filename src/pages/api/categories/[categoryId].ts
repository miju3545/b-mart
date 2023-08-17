// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from "@/lib/dto";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: number;
  result: Product[];
};

export default async function categoryId(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const result = [];

    res.status(200).json({ status: 200, result });
  } catch (err) {}
}
