export default function Sertificate() {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <h1 className="w-[60%] text-center text-[30px]">
          Международные сертификаты качества и пищевой безопасности продуктов
          <b className="text-red-500"> Biogumus</b>
        </h1>
      </div>

      <div>
        <h1 className="text-center text-[20px] mb-[44px] mt-20">
          Сертификат <b>ISO</b>
        </h1>

        <div className=" h-70vh flex gap-10 px-[220px]">
          <img
            src="/images/sertificates/sertificate-1.png"
            alt=""
            className="w-[49%] h-full"
          />
          <img
            src="/images/sertificates/sertificate-2.png"
            alt=""
            className="w-[50.2%] h-full"
          />
        </div>
      </div>

      <div>
        <h1 className="text-center text-[20px] mb-[44px] mt-20">
          Сертификат от <b> ECOCERT</b>
        </h1>

        <div className=" h-70vh flex gap-10 px-[220px]">
          <img
            src="/images/sertificates/sertificate-3.png"
            alt=""
            className="w-[50.5%] h-full"
          />
          <img
            src="/images/sertificates/sertificate-4.png"
            alt=""
            className="w-[50%] h-full"
          />
        </div>
      </div>

      <div className="bg-bgGray flex items-center gap-5 p-[120px]">
        <img
          src="/images/sertificates/sertificate-5.png"
          alt=""
          className="w-[30%]"
        />
        <img
          src="/images/sertificates/sertificate-6.png"
          alt=""
          className="w-[40%]"
        />
        <img
          src="/images/sertificates/sertificate-7.png"
          alt=""
          className="w-[30%]"
        />
      </div>
    </div>
  );
}
