import { ObjectId } from "mongodb";
import { connectDB } from "./database";

/** db 연결하기 */
export const setupDBConnection = async () => {
  const client = await connectDB();
  const db = client.db("freshDB");
  return db;
};

/** boardList 가져오기 */
export const getBoardList = async () => {
  try {
    const db = await setupDBConnection();
    return await db.collection("board").find().toArray();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

interface Iboard {
  _id: ObjectId;
  boardId: string;
  title: string;
  content: string;
  createdAt: Date;
}

/**board 상세조회 */
export const getBoard = async (boardId: string) => {
  try {
    const db = await setupDBConnection();
    return await db.collection("board").findOne({ boardId });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
