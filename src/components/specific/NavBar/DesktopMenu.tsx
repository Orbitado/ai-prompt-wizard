import React from "react";
import Link from "next/link";
import { renderLinks } from "@/services/renderNavigationLinks";

export default function DesktopMenu() {
  return (
    <div className="md:flex flex-wrap justify-between items-center hidden">
      <h1 className="font-bold text-azure text-xl sm:text-2xl md:text-3xl">
        <Link href="/">AI Prompt Wizard</Link>
      </h1>
      <ul className="md:flex flex-wrap sm:gap-6 hidden">
        <li className="sr-only">
          <Link
            href="#main-content"
            aria-label="Skip to main content"
            className="top-0 absolute inset-x-0 font-medium text-azure text-md sm:text-lg hover:text-hoverblue"
          >
            Skip to main content
          </Link>
        </li>
        {renderLinks()}
      </ul>
    </div>
  );
}
