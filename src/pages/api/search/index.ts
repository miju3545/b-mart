import type { NextApiRequest, NextApiResponse } from "next";
import { productDb } from "../products";

type Data = {
  status: number;
  result: string[];
};

export const history = {
  search: [] as string[]
};

export default async function search(req: NextApiRequest, res: NextApiResponse<Data>) {
  const keyword = req.query.keyword as string;
  const result = productDb
    .filter((product) => keyword && product.title.indexOf(keyword) > -1)
    .map((product) => product.title);

  history.search.push(keyword);
  history.search = Array.from(new Set(history.search.filter((v) => v !== "")));
  res.status(200).json({ status: 200, result });
}
