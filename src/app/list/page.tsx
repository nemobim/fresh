import Title from "@/elements/Title";
import { getItemList } from "@/server/collection";
import Link from "next/link";

const page = async () => {
  const itemList = await getItemList();

  return (
    <div>
      <Title title="상품 목록" color="text-lime-500" />
      <div>
        {itemList?.map((item) => (
          <div key={item.itemId} className="flex justify-between items-center p-3 border-b">
            <div>
              <h2 className="font-bold text-lg">
                [{item.sub}] {item.item}
              </h2>
              <p className="text-sm">
                {item.price}원<span className="text-xs text-gray-500"> / {item.desc}</span>
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <Link className="bg-green-400 p-2 rounded-md text-white hover:bg-green-500" href={`/list/${item.itemId}`}>
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
