import { setupDBConnection } from "@/server/collection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(res: NextApiRequest, req: NextApiResponse<string>) {
  //요청이 POST일 때
  if (res.method == "POST") {
    const { title, content } = res.body;
    if (!title || !content) {
      return req.status(400).json("제목과 내용은 필수입니다.");
    }

    try {
      const db = await setupDBConnection();
      // 컬렉션에 있는 문서의 수를 파악한다.
      const count = await db.collection("board").countDocuments();
      const newBoardId = count + 1;

      // board 컬렉션에 새로운 문서를 추가한다.
      await db.collection("board").insertOne({ ...res.body, boardId: String(newBoardId), createdAt: new Date() });
      return req.status(200).redirect("/board");
    } catch (error) {
      console.error("Error fetching data:", error);
      return req.status(500).json("Error fetching data");
    }
  }
}
