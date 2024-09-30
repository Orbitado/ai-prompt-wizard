import { renderLinks } from "@/services/renderNavigationLinks";

export default function MobileMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <>
      {isOpen || (
        <ul className="flex flex-col items-center gap-4 md:hidden my-4">
          {renderLinks()}
        </ul>
      )}
    </>
  );
}
