import Link from "next/link";

import DesktopMenu from "@/components/NavBar/DesktopMenu";
import NavigationButton from "@/components/NavBar/NavigationButton";

export default function NavBar() {
  return (
    <header className="top-0 z-50 sticky bg-white shadow-md">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 py-4 container">
        <div className="flex flex-wrap justify-between items-center">
          <h1 className="font-bold text-azure text-xl sm:text-2xl md:text-3xl">
            <Link href="/">AI Prompt Wizard</Link>
          </h1>
          <DesktopMenu />
        </div>
        <NavigationButton />
      </nav>
    </header>
  );
}
