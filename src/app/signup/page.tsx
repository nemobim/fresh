import Title from "@/elements/Title";
import Link from "next/link";

const page = () => {
  return (
    <div className="mt-10">
      <Title title="회원가입" color="text-green-500" />
      <div className="flex flex-col items-center mt-5">
        <h1 className="text-4xl text-center">환영합니다</h1>
        <form action="/api/joinUser" method="POST" className="mt-6 flex flex-col">
          <input type="text" name="id" placeholder="아이디" className="border-2 border-green-500 rounded-md p-2 m-2" />
          <input type="password" name="password" placeholder="비밀번호" className="border-2 border-green-500 rounded-md p-2 m-2" />
          <button className="bg-green-500 text-white p-2 rounded-md m-2">회원가입</button>
        </form>
        <Link href="/" className="text-green-500">
          돌아가기
        </Link>
      </div>
    </div>
  );
};

export default page;
