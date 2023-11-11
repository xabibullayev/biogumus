export default function Process() {
  return (
    <div className="px-28 mt-60">
      <h1 className="text-center mb-3 text-3xl font-medium">
        Процесс приготовления нашего продукта
      </h1>
      <div className="mb-20">
        <p className="text-center text-2xl">
          Вы можете увидеть как мы планируем
        </p>
        <p className="text-center text-2xl">наш процесс изготовления</p>
      </div>

      <div className="flex items-center gap-7">
        <div className="flex flex-col justify-center items-center gap-12 w-[25%] bg-greenlight h-[250px] p-4 border-radius rounded-lg">
          <img src="/images/process/process-1.png" alt="" />
          <p className="text-center">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <img src="/images/process/arrow.png" alt="" />

        <div className="flex flex-col justify-center items-center gap-12 w-[25%] bg-greenlight h-[250px] p-4 border-radius rounded-lg">
          <img src="/images/process/process-2.png" alt="" />
          <p className="text-center">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <img src="/images/process/arrow.png" alt="" />

        <div className="flex flex-col justify-center items-center gap-12 w-[25%] bg-greenlight h-[250px] p-4 border-radius rounded-lg">
          <img src="/images/process/process-3.png" alt="" />
          <p className="text-center">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <img src="/images/process/arrow.png" alt="" />

        <div className="flex flex-col justify-center items-center gap-12 w-[25%] bg-greenlight h-[250px] p-4 border-radius rounded-lg">
          <img src="/images/process/process-4.png" alt="" />
          <p className="text-center">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
