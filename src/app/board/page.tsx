import Title from "@/elements/Title";
import { connectDB } from "@/server/database";
import Link from "next/link";

const page = async () => {
  let client = await connectDB;
  const db = client.db("freshDB");
  let result = await db.collection("board").find().toArray();

  return (
    <div>
      <Title title="board" color="text-blue-500" />
      <div>
        {result.map((item) => (
          <div key={item.boardId} className="flex justify-between items-center p-3 shadow-md my-3 hover:bg-slate-100">
            <Link href={`/board/${item.boardId}`}>
              <div>
                <h2 className="font-bold text-lg">
                  {item.boardId}) {item.title}
                </h2>
                <p className="text-sm overflow-hidden">{item.content}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
