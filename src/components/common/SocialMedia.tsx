import Link from "next/link";

export default function SocialMedia({
  icon,
  children,
  isBlank,
  href,
}: {
  icon: React.ReactNode;
  children: string;
  href: string;
  isBlank?: boolean;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2"
      target={isBlank ? "_blank" : "_self"}
      rel="noopener noreferrer"
      aria-label={`Click here to go to Leonardo's ${children}`}
    >
      {icon}
      <span className="hover:underline">{children}</span>
    </Link>
  );
}
