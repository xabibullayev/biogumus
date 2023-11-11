import React from "react";

export default function Read() {
  return (
    <div className="p-[120px]">
      <div className="flex gap-20 mb-24">
        <div className="border border-green rounded-md">
          <img src="/images/read/image-1.png" alt="" className="w-full" />
          <div className="px-5 mb-7">
            <p className="text-[14px] mb-10 mt-4">
              Korem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="w-full bg-green text-white py-3 text-[15px]">
              Подробнее
            </button>
          </div>
        </div>
        <div className="border border-green rounded-md">
          <img src="/images/read/image-2.png" alt="" className="w-full" />
          <div className="px-5 mb-7">
            <p className="text-[14px] mb-10 mt-4">
              Korem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="w-full bg-green text-white py-3 text-[15px]">
              Подробнее
            </button>
          </div>
        </div>
        <div className="border border-green rounded-md">
          <img src="/images/read/image-3.png" alt="" className="w-full" />
          <div className="px-5 mb-7">
            <p className="text-[14px] mb-10 mt-4">
              Korem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="w-full bg-green text-white py-3 text-[15px]">
              Подробнее
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[40px]">
        <p className="w-[20%] h-[1px] bg-black"></p>
        <h1 className="text-[30px]">ЧИТАТЬ</h1>
        <p className="w-[20%] h-[1px] bg-black"></p>
      </div>
    </div>
  );
}
