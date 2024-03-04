import Title from "@/elements/Title";
import Link from "next/link";

const page = () => {
  const martList = [
    {
      order: 1,
      name: "토마토",
      price: 3000,
      desc: "신선한 토마토",
    },
    {
      order: 2,
      name: "오이",
      price: 2000,
      desc: "신선한 오이",
    },
    {
      order: 3,
      name: "고구마",
      price: 5000,
      desc: "신선한 고구마",
    },
    {
      order: 4,
      name: "당근",
      price: 4000,
      desc: "신선한 당근",
    },
    {
      order: 5,
      name: "양파",
      price: 3000,
      desc: "신선한 양파",
    },
  ];
  return (
    <div>
      <Title title="List" color="text-sky-500" />
      <div>
        {martList.map((item) => (
          <div key={item.order} className="flex justify-between items-center p-3 border-b">
            <div>
              <h2 className="font-bold text-lg">
                {item.order}) {item.name}
              </h2>
              <p className="text-sm">
                {item.price}원<span className="text-xs text-gray-500"> / {item.desc}</span>
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <Link className="bg-green-400 p-2 rounded-md text-white hover:bg-green-500" href={`/list/${item.order}`}>
                상세보기
              </Link>
              <button className="bg-rose-400 hover:bg-rose-500 text-white px-4 py-2 rounded-lg">구매하기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
