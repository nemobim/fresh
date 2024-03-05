import Title from "@/elements/Title";
import Cart from "@/static/cart.PNG";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  return (
    <div>
      <Title title="Fresh mart" color="text-green-500" />
      <div className="flex justify-center">
        <Image src={Cart} alt="fresh" width={300} height={300} />
      </div>
      <div className="flex flex-col items-center mt-5">
        <h1 className="text-4xl text-center">환영합니다</h1>
        <form className="mt-6">
          <input type="text" placeholder="아이디" className="border-2 border-green-500 rounded-md p-2 m-2" />
          <input type="password" placeholder="비밀번호" className="border-2 border-green-500 rounded-md p-2 m-2" />
          <button className="bg-green-500 text-white p-2 rounded-md m-2">로그인</button>
          <Link href="/signup" className="text-green-500">
            회원가입
          </Link>
        </form>
      </div>
    </div>
  );
};

export default page;
