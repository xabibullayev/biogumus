import React from "react";

export default function WhyUs() {
  return (
    <div className="px-[120px] py-20">
      <h1 className="text-[30px] text-center mb-[18px]">Почему мы?</h1>

      <p className="text-[25px] text-center mb-[120px]">
        6 причин выбирать наши продукты
      </p>

      <div className="flex gap-[20px]">
        <div className=" w-[33.3%] flex flex-col items-end justify-between pb-8">
          <div>
            <p className="text-[18px] text-end">100% Натуральный продукт</p>
            <p className="text-[18px] text-end">(имеются органические</p>
            <p className="text-[18px] text-end">сертификаты)</p>
          </div>

          <div>
            <p className="text-[18px] text-end">Чистота и безопасность</p>
            <p className="text-[18px] text-end">ISO22000:2018</p>
          </div>

          <div>
            <p className="text-[18px] text-end">Без консервантов</p>
            <p className="text-[18px] text-end">Продукция выращивается,</p>
            <p className="text-[18px] text-end">перерабатывается и</p>
            <p className="text-[18px] text-end">упаковывается без химических</p>
            <p className="text-[18px] text-end">добавок</p>
          </div>
        </div>
        <div className=" w-[33.3%] flex items-center justify-center">
          <img
            src="/images/ourProducts/1-2.png"
            alt=""
            className="ml-[12%] w-full"
          />
        </div>
        <div className=" w-[33.3%] flex flex-col justify-between gap-20 pb-8">
          <div>
            <p className="">Лучший дизайн упаковок</p>
          </div>
          <div>
            <p className="text-[18px]">Doy-pack и вакуумная упаковки с</p>
            <p className="text-[18px]">использованием Fast Delivery</p>
            <p className="text-[18px]">естественного Азота.</p>
          </div>
          <div>
            <p className="text-[18px]">Налажена логистика по доставке грузов</p>
            <p className="text-[18px]">Узбекистану и всему миру!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
