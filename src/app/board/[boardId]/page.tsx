import { getBoard } from "@/server/collection";
import dayjs from "dayjs";

const page = async ({ params }: any) => {
  const { boardId } = params;
  const boardData = await getBoard(boardId);

  if (!boardData) return <div>게시판이 없습니다.</div>;

  const date = dayjs(boardData.createdAt).format("YYYY-MM-DD HH:mm");

  return (
    <div>
      <h1 className="text-4xl text-center">{boardData.title}</h1>
      <p className="text-slate-700 mt-3 text-end">{date}</p>
      <div className="p-4 bg-slate-200 rounded-md my-4 min-h-40">{boardData.content}</div>
    </div>
  );
};

export default page;
