import Title from "@/elements/Title";
import Cart from "@/static/cart.PNG";
import Image from "next/image";

const page = async () => {
  return (
    <div>
      <Title title="Fresh mart" color="text-green-500" />
      <div className="flex justify-center">
        <Image src={Cart} alt="fresh" width={500} height={500} />
      </div>
    </div>
  );
};

export default page;
