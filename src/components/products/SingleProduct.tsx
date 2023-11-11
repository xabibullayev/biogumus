type ProdoctProps = {
  title: string;
  img: string;
  desc: string[];
};

export default function SingleProduct({ title, img, desc }: ProdoctProps) {
  return (
    <div className="flex gap-10 mb-20">
      <div className="w-[25%]">
        <img src={img} alt="" className="w-full" />
      </div>

      <div className="w-[75%]">
        <h1 className="text-[30px] font-medium mb-4">{title}</h1>

        <img src="/images/stars.png" alt="" className="mb-4" />

        <div>
          {desc.map((desc, index) => (
            <p key={index} className="text-[18px]">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
