"use client";

import axios from "axios";
import Link from "next/link";

const page = async ({
  params,
}: {
  params: {
    boardId: string;
  };
}) => {
  const { boardId } = params;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = (e.target as any).title.value;
    const content = (e.target as any).content.value;

    if (!title || !content) {
      alert("제목과 내용은 필수입니다.");
      return;
    }

    axios.put(`/api/editBoard`, { title, content, boardId }).then((res) => {});
  };

  return (
    <div className="p-5">
      <form className="flex gap-10 flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">글 수정</h1>
          <div className="flex flex-row gap-4">
            <label htmlFor="title" className="text-2xl w-20">
              제목
            </label>
            <input type="text" id="title" name="title" className="w-full border border-neutral-600 rounded-md p-2" />
          </div>
          <div className="flex flex-row gap-4">
            <label htmlFor="content" className="text-2xl w-20">
              내용
            </label>
            <textarea id="content" name="content" className="w-full min-h-[20rem] border border-neutral-600 rounded-md p-2" />
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Link href="/board" className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-white">
            취소
          </Link>
          <button type="submit" className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg">
            수정
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
