import Title from "@/elements/Title";
import { getItem } from "@/server/collection";
import Image from "next/image";

const page = async ({
  params,
}: {
  params: {
    itemId: string;
  };
}) => {
  const { itemId } = params;
  const data = await getItem(itemId);

  if (!data) return <div>로딩중.</div>;

  return (
    <div>
      <Title title={data.item} color="text-slate-800" />
      <p className="text-center text-sm">{data.sub}</p>
      <div className="flex justify-center p-4">
        <Image src={data.imgUrl} alt={data.item} width={300} height={300} />
      </div>
      <p className="text-blue-700 mt-3 text-3xl font-bold text-center">{data.price} 원</p>
      <div className="p-4 bg-slate-100 rounded-md my-4 min-h-20">{data.desc}</div>
    </div>
  );
};

export default page;
