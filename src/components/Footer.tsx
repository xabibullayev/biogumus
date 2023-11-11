import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="px-[120px] pt-[70px] pb-[30px]  bg-gray">
      <div className="flex gap-20">
        <div className="w-[50%] flex flex-col justify-between py-12">
          <div className="flex items-center gap-4">
            <div className="py-4 px-6 bg-green rounded-full">
              <img src="/images/footer/location.png" alt="" />
            </div>

            <div>
              <h1 className="text-[20px] font-medium">Легко найти</h1>
              <p className="text-[15px]">
                ул. Д.Эшимбетова, 52, 230100 г. Нукус, Республика Узбекистан
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-[26px] bg-green rounded-full">
              <img src="/images/footer/mailbox.png" alt="" />
            </div>

            <div>
              <h1 className="text-[20px] font-medium">
                Есть о чем поговорить? Напишите
              </h1>
              <p className="text-[15px]">sales@biogumusfarm.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-[24px] bg-green rounded-full">
              <img src="/images/footer/phone.png" alt="" />
            </div>

            <div>
              <h1 className="text-[20px] font-medium">Телефон</h1>
              <p className="text-[15px]">+99897 357-70-77</p>
            </div>
          </div>
        </div>

        <div className="w-[50%] border border-black rounded-xl px-[55px] pt-7 pb-5">
          <h1 className="text-center text-xl font-medium mb-[30px]">
            Связаться
          </h1>

          <div className="flex gap-[35px] mb-3">
            <input
              type="text"
              className="w-[50%] p-3 outline-none text-[15px]"
              placeholder="Имя"
            />
            <input
              type="text"
              className="w-[50%] p-3 outline-none text-[15px]"
              placeholder="Фамилия"
            />
          </div>

          <div className="flex gap-[35px] mb-3">
            <input
              type="text"
              className="w-[50%] p-3 outline-none text-[15px]"
              placeholder="Телефон"
            />
            <input
              type="text"
              className="w-[50%] p-3 outline-none text-[15px]"
              placeholder="Фамилия"
            />
          </div>

          <textarea
            className="w-full outline-none mb-3 p-3 text-[15px] resize-none"
            placeholder="Комментарии"
            rows={4}
          ></textarea>

          <button className="bg-green w-full py-3 text-[15px] text-white">
            Представлять на рассмотрение
          </button>
        </div>
      </div>

      <div className="mt-[60px] flex justify-between">
        <p className="text-[14px] font-medium">
          © 2023 Biogumusfarm & Tasty Food
        </p>
        <div className="flex gap-6">
          <Link href="/">
            <img src="/images/footer/instagram.png" alt="" />
          </Link>
          <Link href="/">
            <img src="/images/footer/telegram.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
