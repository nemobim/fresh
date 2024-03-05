import { getBoard } from "@/server/collection";
import dayjs from "dayjs";
import Link from "next/link";

const page = async ({
  params,
}: {
  params: {
    boardId: string;
  };
}) => {
  const { boardId } = params;
  const boardData = await getBoard(boardId);

  if (!boardData) return <div>로딩중.</div>;

  const date = dayjs(boardData.createdAt).format("YYYY-MM-DD HH:mm");

  return (
    <div>
      <h1 className="text-4xl text-center">{boardData.title}</h1>
      <p className="text-slate-700 mt-3 text-end">{date}</p>
      <div className="p-4 bg-slate-200 rounded-md my-4 min-h-40 max-h-[400px] overflow-y-auto break-words whitespace-pre-line">{boardData.content}</div>
      <div className="flex justify-end mb-4 gap-4">
        <Link href={`/board/edit/${boardId}`} className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg">
          수정
        </Link>
        <Link href="/board" className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-white">
          돌아가기
        </Link>
      </div>
    </div>
  );
};

export default page;
