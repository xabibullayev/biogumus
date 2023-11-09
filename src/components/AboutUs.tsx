import Link from "next/link";
import MainButton from "./layouts/MainButton";

export default function AboutUs() {
  return (
    <div>
      <h1 className="mt-8 mb-10 text-center text-3xl font-medium    ">О нас</h1>

      <div className="flex gap-5 pl-24 pr-64 mb-14">
        <div className="w-[40%]">
          <h1 className="text-lg mb-16">
            Мы занимаемся выращиванием овощей, фруктов и орехов, а также
            перерабатываем их без химических добавок. Нашим основным продуктом
            является сушенный помидор, из лучших сортов.
          </h1>

          <MainButton title="Подробнее" />
        </div>
        <div className="w-[60%]">
          <img className="w-full" src="/images/aboutUs/aboutUs-1.jpg" alt="" />
        </div>
      </div>

      <div className="flex gap-5 pr-24 pl-64">
        <div className="w-[60%]">
          <img className="w-full" src="/images/aboutUs/aboutUs-2.jpg" alt="" />
        </div>
        <div className="w-[40%]">
          <h1 className="text-lg mb-16">
            Мы занимаемся выращиванием овощей, фруктов и орехов, а также
            перерабатываем их без химических добавок. Нашим основным продуктом
            является сушенный помидор, из лучших сортов.
          </h1>

          <MainButton title="Сертификаты" />
        </div>
      </div>
    </div>
  );
}
