import Link from "next/link";
export default function Button({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode | string;
}) {
  return (
    <div className="flex flex-wrap justify-center">
      <Link
        href={href}
        className="bg-blue-600 hover:bg-blue-700 px-8 py-2 rounded-full w-fit font-bold text-sm text-white xs:text-md lg:text-lg"
      >
        {children}
      </Link>
    </div>
  );
}
