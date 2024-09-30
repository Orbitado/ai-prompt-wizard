import Link from "next/link";
import { navigationLinks } from "../data/navigationLinks";
export const renderLinks = () => {
  return navigationLinks.map((link) => (
    <li key={link.name}>
      <Link
        href={link.href}
        className="font-medium text-azure text-md sm:text-lg hover:text-hoverblue transition duration-300 ease-in-out"
      >
        {link.name}
      </Link>
    </li>
  ));
};
