import { RiSendPlane2Fill } from "react-icons/ri";
import { AiFillCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="pt-8 px-8 sm:pt-14 sm:px-14">
      <div className="flex flex-col gap-7 pb-8 sm:flex-row md:gap-5 lg:items-start">
        <div className="w-full flex flex-col justify-center items-center gap-3.5 sm:w-6/12 sm:items-start">
          <p className="font-bold text-3xl">AILA</p>
          <p className="text-center md:text-left">
            Your Ultimate Learning Companion: Empowering learners with
            simplified content, interactive chatbot assistance, and customizable
            study materials.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center sm:w-2/12 sm:items-start md:justify-start">
          <p className="text-2xl uppercase font-semibold mb-3.5">quick link</p>
          <ul className="flex flex-row gap-5 sm:flex-col sm:gap-0">
            <div className="text-center sm:text-left">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
            </div>
            <div className="text-center sm:text-left">
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#team">Our Team</a>
              </li>
            </div>
          </ul>
        </div>
        <div className="w-full flex flex-col justify-center items-center text-center gap-5 sm:w-4/12 sm:items-start sm:text-left">
          <div>
            <p className="text-2xl uppercase font-semibold mb-1">
              Stay Updated with AILA
            </p>
            <p>Subscribe for the latest updates.</p>
          </div>
          <div className="flex items-center bg-white py-1 pl-4 pr-1 rounded-md w-full max-w-80">
            <input
              className="rounded-md bg-transparent w-full focus:outline-none text-black"
              type="email"
              name=""
              id=""
              placeholder="Your email address"
            />
            <button className="email-btn rounded-md h-full py-2 px-2.5">
              <RiSendPlane2Fill />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 border-t p-5">
        <AiFillCopyrightCircle />
        <p className="text-xs md:text-base">Copyright 2024 AILA. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
