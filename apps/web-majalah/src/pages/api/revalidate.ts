import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== "my-secret-token") {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    if (typeof req.query.path === "string") {
      await Promise.all([res.revalidate("/"), res.revalidate(req.query.path)]);
    }

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
