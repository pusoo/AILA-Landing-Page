import { RiSendPlane2Fill } from "react-icons/ri";
import { AiFillCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="pt-14 px-14">
      <div className="flex gap-5 pb-8">
        <div className="w-6/12 flex flex-col gap-3.5">
          <p className="font-bold text-3xl">AILA</p>
          <p>
            Your Ultimate Learning Companion: Empowering learners with
            simplified content, interactive chatbot assistance, and customizable
            study materials.
          </p>
        </div>
        <div className="w-3/12 flex flex-col gap-3.5">
          <p className="text-2xl uppercase font-semibold">quick link</p>
          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Our Team</li>
          </ul>
        </div>
        <div className="w-4/12 flex flex-col gap-5">
          <div>
            <p className="text-2xl uppercase font-semibold mb-1">
              Stay Updated with AILA
            </p>
            <p>Subscribe for the latest updates.</p>
          </div>
          <div className="flex items-center bg-white py-1 pl-4 pr-1 rounded-md max-w-80">
            <input
              className="rounded-md bg-transparent w-full focus:outline-none text-black "
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
        <p>Copyright 2024 AILA. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
