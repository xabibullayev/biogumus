import Link from "next/link";

export default function OurProducts() {
  return (
    <div className="bg-greened py-10 px-28">
      <h1 className="text-center mb-24 mt-[50px]  text-3xl font-medium">
        Наши продукты
      </h1>

      <div className="flex gap-[52px] mb-[80px]">
        <div className="flex bg-white p-[40px] rounded-xl">
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

        <div className="flex bg-white p-[40px] rounded-xl">
          <div className="w-[40%]">
            <img src="/images/ourProducts/2-2.png" alt="" className="w-full" />
          </div>
          <div className="w-[60%]">
            <h1 className="text-[20px] font-medium mb-[12px]">Strong 7</h1>
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

      <div className="flex gap-[52px]">
        <div className="flex bg-white p-[40px] rounded-xl">
          <div className="w-[40%]">
            <img src="/images/ourProducts/4-2.png" alt="" className="w-full" />
          </div>
          <div className="w-[60%]">
            <h1 className="text-[20px] font-medium mb-[12px]">СемечкО</h1>
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

        <div className="flex bg-white p-[40px] rounded-xl">
          <div className="w-[40%]">
            <img src="/images/ourProducts/7-2.png" alt="" className="w-full" />
          </div>
          <div className="w-[60%]">
            <h1 className="text-[20px] font-medium mb-[12px]">
              Господин Фисташкин
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

      <div className="flex justify-center my-[60px]">
        <Link
          href="/"
          className="bg-white text-[15px] border border-green py-[17px] px-[84px] text-green"
        >
          Еще
        </Link>
      </div>
    </div>
  );
}
