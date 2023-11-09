import Link from "next/link";

type MainButtonProps = {
    title: string,
}

export default function MainButton ({title}: MainButtonProps) {
    return (
        <Link
        href=""
        className="border border-green py-4 px-12 text-lg text-green"
      >
        {title}
      </Link>
    )
}