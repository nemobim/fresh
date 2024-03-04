import Title from "@/elements/Title";
import { getBoardList } from "@/server/collection";
import Link from "next/link";

const page = async () => {
  const boardList = await getBoardList();

  return (
    <div>
      <Title title="게시판" color="text-orange-500" />
      <div>
        {boardList.map((item) => (
          <div key={item.boardId} className="items-center p-3 shadow-md my-3 bg-gray-100 hover:bg-slate-100">
            <Link href={`/board/${item.boardId}`}>
              <div>
                <h2 className="font-bold text-lg">
                  {item.boardId}) {item.title}
                </h2>
                <div className="flex justify-between my-1">
                  <p className="text-sm w-3/4 break-words overflow-hidden whitespace-nowrap text-ellipsis">{item.content}</p>
                  <p className="text-sm text-slate-700">2022-22-22 10:22</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
