import { renderLinks } from "@/services/renderNavigationLinks";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

import SocialMedia from "@/components/common/SocialMedia";
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
            <SocialMedia
              icon={<MdOutlineEmail />}
              href="mailto:vleonardojuanpablo@icloud.com"
            >
              Email Contact
            </SocialMedia>

            <SocialMedia icon={<FiPhone />} href="tel:+5493816134310">
              Phone Contact
            </SocialMedia>

            <SocialMedia
              icon={<PiLinkedinLogoBold />}
              href="https://www.linkedin.com/in/leonardo-valdez/"
              isBlank
            >
              LinkedIn
            </SocialMedia>

            <SocialMedia
              icon={<FiGithub />}
              href="https://github.com/Orbitado/ai-prompt-wizard"
              isBlank
            >
              GitHub
            </SocialMedia>
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
            <button className="bg-blue-600 p-2 rounded-e-[0.25rem] h-fit hover:bg-blue-700 font-bold">
              Subscribe
            </button>
          </form>
        </section>
      </div>
      <div className="container mx-auto mt-8">
        <hr className="border-gray-700" />
        <p className="text-center py-2 mt-6">
          &copy; 2024 AI Prompt Wizard. All rights reserved.
        </p>
        <p className="text-center">Made by Leonardo Juan Pablo Valdez</p>
      </div>
    </footer>
  );
}
