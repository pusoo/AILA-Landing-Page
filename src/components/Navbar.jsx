import { useState } from "react";
import Logo from "../assets/logo.png";
import { RiHome5Fill } from "react-icons/ri";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoIosPricetags } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav>
      <section className="MOBILE-MENU flex justify-end pt-8 px-8 lg:hidden">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 bg-white"></span>
          <span className="block h-0.5 w-8 bg-white"></span>
          <span className="block h-0.5 w-8 bg-white"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-center py-10">
            <li className="border-b border-gray-400 my-3 uppercase">
              <a href="/about">About</a>
            </li>
            <li className="border-b border-gray-400 my-3 uppercase">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li className="border-b border-gray-400 my-3 uppercase">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </section>
      <ul className="DESKTOP-MENU hidden space-x-8 lg:flex justify-center items-center gap-2 pt-5 mb-2">
        <li>
          <a href="#" className="flex items-center gap-1.5">
            <RiHome5Fill /> Home
          </a>
        </li>
        <li>
          <a href="#features" className="flex items-center gap-1.5">
            <BiSolidCategoryAlt /> Features
          </a>
        </li>
        <li>
          <a href="#" className="logo flex items-center gap-1.5 px-3">
            <img src={Logo} alt="logo" />
            <p>AILA</p>
          </a>
        </li>
        <li>
          <a href="#pricing" className="flex items-center gap-1.5">
            <IoIosPricetags /> Pricing
          </a>
        </li>
        <li>
          <a href="#team" className="flex items-center gap-1.5">
            <RiTeamFill /> Our Team
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
