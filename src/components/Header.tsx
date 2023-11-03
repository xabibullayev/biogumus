import Link from "next/link";

export default function Header() {
  return (
    <div className="h-[90vh] bg-header-bg bg-cover text-white flex flex-col justify-center items-center relative">
      <h1 className="w-[60%] text-[40px] text-center font-medium mb-3">
        Лучшие сушёные овощи, фрукты и орехи из Узбекистана! Попробуйте!
      </h1>
      <p className="w-[25%] text-lg text-center mb-5">
        Самые вкусные и полезные продукты питания натурального производства, без
        консервантов от TASTY FOOD!
      </p>
      <Link href="" className="bg-green px-[40px] py-[10px] text-base">
        Начать
      </Link>

      <div className="flex gap-3 absolute right-11 bottom-16">
        <img className="w-[108px]" src="/images/header/header-1.png" alt="" />
        <img className="w-[82px]" src="/images/header/header-2.png" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  );
}
