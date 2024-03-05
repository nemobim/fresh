import { setupDBConnection } from "@/server/collection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(res: NextApiRequest, req: NextApiResponse<string>) {
  //요청이 POST일 때
  if (res.method == "POST") {
    const { id, password } = res.body;
    if (!id || !password) {
      return req.status(400).json("아이디와 비밀번호는 필수입니다.");
    }
    try {
      const db = await setupDBConnection();
      // 컬렉션에 있는 문서의 수를 파악한다.

      //중복된 아이디가 있는지 확인
      const user = await db.collection("user").findOne({ id });
      if (user) {
        return req.status(400).json("이미 존재하는 아이디입니다.");
      }

      //userId 생성
      const count = await db.collection("user").countDocuments();
      const newUserId = count + 1;

      // board 컬렉션에 새로운 문서를 추가한다.
      await db.collection("user").insertOne({ ...res.body, userId: String(newUserId), createdAt: new Date() });
      return req.status(200).redirect("/");
    } catch (error) {
      console.error("Error fetching data:", error);
      return req.status(500).json("Error fetching data");
    }
  }
}
