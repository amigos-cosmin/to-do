import type { NextApiRequest, NextApiResponse } from "next";
import { persons } from "../../../Data/people"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(persons)
}
