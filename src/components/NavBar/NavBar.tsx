import Link from "next/link";

export default function NavBar() {
  const navigationLinks = [
    { name: "Features", href: "/" },
    { name: "Examples", href: "/" },
    { name: "Tutorial", href: "/" },
    { name: "Testimonials", href: "/" },
  ];

  return (
    <header className="top-0 z-50 sticky bg-white shadow-md">
      <nav className="flex flex-wrap justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 py-4 container">
        <h1 className="font-bold text-azure text-xl sm:text-2xl md:text-3xl">
          <Link href="/">AI Prompt Wizard</Link>
        </h1>
        <ul className="flex flex-wrap gap-6">
          <li className="sr-only">
            <Link
              href="#main-content"
              className="top-0 absolute inset-x-0 font-medium text-azure text-md sm:text-lg hover:text-hoverblue"
            >
              Skip to main content
            </Link>
          </li>
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="font-medium text-azure text-md sm:text-lg hover:text-hoverblue"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
