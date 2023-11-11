export default function Excursion() {
  return (
    <div className="p-[120px] pb-0">
      <h1 className="text-center mb-20 text-[30px]">
        Экскурсия на фаврике <b className="text-red-500">Биогумус</b>
      </h1>

      <iframe
        src="https://www.youtube.com/embed/wLtVgLt7dBA?si=kDDMS6EPvMVf75Wu"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-[600px]"
      ></iframe>

      <h1 className="text-[30px] mt-20 mb-5">Tasty food</h1>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wLtVgLt7dBA?si=kDDMS6EPvMVf75Wu"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-[600px]"
      ></iframe>
    </div>
  );
}
