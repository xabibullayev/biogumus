export default function Colleagues() {
  return (
    <div className="px-[120px]">
      <h1 className="text-center text-[30px] font-medium mb-[28px]">
        Международное сотрудричество
      </h1>

      <p className="text-center text-[20px] mb-[60px]">
        Фирма Biogumus Farm уже давно сотрудничает с зарубежными компаниями, и
        число иностранных партнеров только увеличивается. Мы осуществили
        коллаборацию с партнерами из Японии, Италии, Израиля, Германии и т.д. В
        фотогалерее внизу вы можете стать свидетелем нашего партнерства.
      </p>

      <div className="flex gap-6">
        <div className="w-[33.3%] flex flex-col justify-between gap-6">
          <img src="/images/collagues/image-1.png" alt="" className="w-full" />
          <img src="/images/collagues/image-2.png" alt="" className="w-full" />
        </div>
        <div className="w-[33.3%] flex flex-col justify-between gap-6">
          <img src="/images/collagues/image-3.png" alt="" className="w-full" />
          <img src="/images/collagues/image-4.png" alt="" className="w-full" />
        </div>
        <div className="w-[33.3%] flex flex-col justify-between gap-6">
          <img src="/images/collagues/image-5.png" alt="" className="w-full" />
          <img src="/images/collagues/image-6.png" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}
