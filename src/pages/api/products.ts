// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from "@/lib/dto";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: number;
  result: Product[];
};

export default async function products(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();

    res.status(200).json({ status: 200, result });
  } catch (err) {}
}
