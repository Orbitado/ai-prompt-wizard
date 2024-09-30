"use client";
import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import MobileMenu from "@/components/NavBar/MobileMenu";

export default function NavigationButton() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        title="Open navigation"
        className="md:hidden"
        onClick={toggleDropdown}
      >
        {isOpen ? (
          <RxHamburgerMenu className="text-3xl text-azure" />
        ) : (
          <RxCross2 className="text-3xl text-azure" />
        )}
      </button>
      <MobileMenu isOpen={isOpen} />
    </>
  );
}
