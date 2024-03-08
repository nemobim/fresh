import { setupDBConnection } from "@/server/collection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(res: NextApiRequest, req: NextApiResponse<string>) {
  //요청이 POST일 때
  if (res.method == "PUT") {
    const { title, boardId, content } = res.body;
    if (!title || !content) {
      return req.status(400).json("제목과 내용은 필수입니다.");
    }
    try {
      const db = await setupDBConnection();
      await db.collection("board").updateOne({ boardId }, { $set: { title, content } });
      return req.status(200).redirect("/board");
    } catch (error) {
      console.error("Error fetching data:", error);
      return req.status(500).json("Error fetching data");
    }
  }
}
