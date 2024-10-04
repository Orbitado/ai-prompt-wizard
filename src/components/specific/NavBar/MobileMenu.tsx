import { renderLinks } from "@/services/renderNavigationLinks";
import React from "react";

export default function MobileMenu({ isOpen = false }: { isOpen: boolean }) {
  return (
    <>
      {isOpen && (
        <ul className="flex flex-col items-center gap-4 md:hidden my-4">
          {renderLinks()}
        </ul>
      )}
    </>
  );
}
