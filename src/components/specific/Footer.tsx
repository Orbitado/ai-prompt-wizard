import { renderLinks } from "@/services/renderNavigationLinks";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-800 p-8 text-center text-white lg:text-start">
      <div className="gap-8 grid grid-cols-1 lg:grid-cols-4 mx-auto container">
        <article className="space-y-4">
          <h3 className="font-bold text-lg">AI Prompt Wizard</h3>
          <p>
            Empowering your AI interactions with intelligent prompt generation.
          </p>
        </article>
        <nav className="space-y-4">
          <h4 className="font-bold text-lg">Quick Links</h4>
          <ul className="space-y-2">{renderLinks({ isLight: true })}</ul>
        </nav>
        <section className="space-y-4">
          <h4 className="font-bold text-lg">Contact Us</h4>
          <address className="flex flex-col items-center lg:items-start space-y-2">
            <Link
              href={"mailto:vleonardojuanpablo@icloud.com"}
              className="flex items-center gap-2"
            >
              <MdOutlineEmail />
              <span className="hover:underline">Email Contact</span>
            </Link>
            <Link
              href={"tel:+5493816134310"}
              className="flex items-center gap-2"
            >
              <FiPhone />
              <span className="hover:underline">Phone Contact</span>
            </Link>
          </address>
        </section>
        <section className="space-y-4">
          <h4 className="font-bold text-lg">Stay Updated</h4>
          <p>Subscribe to our newsletter for the latest updates and tips.</p>
          <form action="" className="">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-s-[0.25rem] text-black"
              required
            />
            <button className="bg-blue-600 p-2 rounded-e-[0.25rem] h-fit">
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </footer>
  );
}
