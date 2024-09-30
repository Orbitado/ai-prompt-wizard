import DesktopMenu from "@/components/specific/NavBar/DesktopMenu";
import NavigationButton from "@/components/specific/NavBar/NavigationButton";

export default function NavBar() {
  return (
    <header className="top-0 z-50 sticky bg-white shadow-md">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 py-4 container">
        <DesktopMenu />
        <NavigationButton />
      </nav>
    </header>
  );
}
