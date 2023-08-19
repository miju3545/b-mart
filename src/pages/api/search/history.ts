import type { NextApiRequest, NextApiResponse } from "next";
import { history } from ".";

type Data = {
  status: number;
  result: string[];
};

export default async function searchHistory(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "GET") {
    res.status(200).json({ status: 200, result: [...history.search].reverse() });
  }

  if (req.method === "DELETE") {
    history.search = history.search.filter((item) => item !== req.body);
    res.status(200).json({ status: 200, result: history.search });
  }
}
