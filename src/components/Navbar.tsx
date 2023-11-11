import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white h-[10vh] flex justify-between items-center px-[8vw] sticky top-0 shadow-navbar z-10">
      <Link href="/">
        <img className="w-[6vw]" src="/images/navbar/logo-1.jpg" alt="" />
      </Link>

      <ul className="flex gap-6 text-lg">
        <li>
          <Link href="/about">О нас</Link>
        </li>
        <li>
          <Link href="/products">Продукты</Link>
        </li>
        <li>
          <Link href="">Производство</Link>
        </li>
        <li>
          <Link href="/sertificates">Требования о пищевой безопасности</Link>
        </li>
        <li>
          <Link href="">Контакты</Link>
        </li>
      </ul>

      <Link href="/">
        <img className="w-[3vw]" src="/images/navbar/logo-2.png" alt="" />
      </Link>
    </div>
  );
}
