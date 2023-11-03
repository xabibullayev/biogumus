export default function Navbar() {
  return (
    <div className="h-[10vh] flex justify-between items-center px-[8vw]">
      <img className="w-[6vw]" src="/images/navbar/logo-1.jpg" alt="" />

      <ul className="flex gap-6 text-lg">
        <li>
          <a href="">О нас</a>
        </li>
        <li>
          <a href="">Продукты</a>
        </li>
        <li>
          <a href="">Производство</a>
        </li>
        <li>
          <a href="">Требования о пищевой безопасности</a>
        </li>
        <li>
          <a href="">Контакты</a>
        </li>
      </ul>

      <img className="w-[3vw]" src="/images/navbar/logo-2.png" alt="" />
    </div>
  );
}
