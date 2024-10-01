import Link from "next/link";
import { navigationLinks } from "../data/navigationLinks";
export const renderLinks = ({
  isLight = false,
}: { isLight?: boolean } = {}) => {
  return navigationLinks.map((link) => (
    <li key={link.name}>
      <Link
        href={link.href}
        aria-label={`Click here to go to the ${link.name}`}
        className={`font-medium ${
          isLight ? "text-white" : "text-azure"
        } text-md sm:text-base hover:text-hoverblue transition duration-300 ease-in-out list-none`}
      >
        {link.name}
      </Link>
    </li>
  ));
};
