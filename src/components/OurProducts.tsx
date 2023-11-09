import Link from "next/link";
import MainButton from "./layouts/MainButton";

export default function OurProducts() {
  return (
    <div className="bg-greened py-10 px-28">
      <h1 className="text-center mb-24 text-3xl font-medium">Наши продукты</h1>

      <div className="flex gap-[52px]">
        <div className="flex bg-white p-[40px]">
          <div className="w-[40%]">
            <img src="/images/ourProducts/1-2.png" alt="" className="w-full" />
          </div>
          <div className="w-[60%]">
            <h1 className="text-[20px] font-medium mb-[12px]">
              Сеньор Помидор
            </h1>
            <h2 className="text-[18px] font-[400] mb-[12px]">
              Вяленые итальянские помидоры San Marzano с солью
            </h2>
            <p className="text-[15px] font-[300] mb-[40px]">
              Вяленые итальянские помидоры San Marzano с сольюВяленые
              итальянские помидоры San Marzano с солью...
            </p>
            <Link
              href="/"
              className="text-[15px] border border-green py-[13px] px-[42px] text-green"
            >
              Подробнее
            </Link>
          </div>
        </div>

        <div className="flex bg-white p-[40px]">
          <div className="w-[40%]">
            <img src="/images/ourProducts/1-2.png" alt="" className="w-full" />
          </div>
          <div className="w-[60%]">
            <h1 className="text-[20px] font-medium mb-[12px]">
              Сеньор Помидор
            </h1>
            <h2 className="text-[18px] font-[400] mb-[12px]">
              Вяленые итальянские помидоры San Marzano с солью
            </h2>
            <p className="text-[15px] font-[300] mb-[40px]">
              Вяленые итальянские помидоры San Marzano с сольюВяленые
              итальянские помидоры San Marzano с солью...
            </p>
            <Link
              href="/"
              className="text-[15px] border border-green py-[13px] px-[42px] text-green"
            >
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
