import React from "react";
import Link from "next/link";
import { renderLinks } from "@/services/renderNavigationLinks";

export default function DesktopMenu() {
  return (
    <ul className="md:flex flex-wrap sm:gap-6 hidden">
      <li className="sr-only">
        <Link
          href="#main-content"
          className="top-0 absolute inset-x-0 font-medium text-azure text-md sm:text-lg hover:text-hoverblue"
        >
          Skip to main content
        </Link>
      </li>
      {renderLinks()}
    </ul>
  );
}
