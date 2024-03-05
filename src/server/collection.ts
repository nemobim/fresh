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

/**board 상세조회 */
export const getBoard = async (boardId: string) => {
  try {
    const db = await setupDBConnection();
    return await db.collection("board").findOne({ boardId });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

/**상품목록 조회 */
export const getItemList = async () => {
  try {
    const db = await setupDBConnection();
    return await db.collection("post").find().toArray();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

/**상품 상세 조회 */
export const getItem = async (itemId: string) => {
  try {
    const db = await setupDBConnection();
    return await db.collection("post").findOne({ itemId });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
