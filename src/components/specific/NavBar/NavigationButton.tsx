"use client";
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import MobileMenu from "@/components/specific/NavBar/MobileMenu";
import Link from "next/link";

export default function NavigationButton() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) {
        setIsOpen(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="md:hidden font-bold text-azure text-xl sm:text-2xl md:text-3xl">
          <Link href="/">AI Prompt Wizard</Link>
        </h1>
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
      </div>
      <MobileMenu isOpen={isOpen} />
    </>
  );
}
