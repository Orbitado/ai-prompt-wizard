import Link from "next/link";
export default function Button({
  href,
  children,
  isLight,
}: {
  href: string;
  children: React.ReactNode | string;
  isLight?: boolean;
}) {
  return (
    <div className="flex flex-wrap justify-center">
      <Link
        href={href}
        className={`${
          isLight
            ? "bg-white text-blue-600"
            : "bg-blue-600 hover:bg-blue-700 text-white "
        } px-8 py-2 rounded-full w-fit font-bold text-md
xs:text-lg`}
      >
        {children}
      </Link>
    </div>
  );
}
