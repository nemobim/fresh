const page = () => {
  return (
    <div className="p-5">
      <form action="/api/postBoard" method="POST" className="flex gap-10 flex-col">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">글쓰기</h1>
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
        <div className="flex justify-end">
          <button type="submit" className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg">
            등록
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
