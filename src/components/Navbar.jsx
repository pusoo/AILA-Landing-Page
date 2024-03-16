import Logo from "../assets/logo.png";
import { RiHome5Fill } from "react-icons/ri";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoIosPricetags } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-10 pt-5 mb-8">
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
