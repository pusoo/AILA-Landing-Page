import AppView from "../assets/section1.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="column-12 flex justify-between items-center gap-2">
      <div className="column-6 ml-14 max-w-[40em] w-7/12">
        <h1 className="mb-10 text-6xl leading-snug">
          Simplify Learning with AILA!
        </h1>
        <p className="text-xl mb-14">
          Experience seamless learning with AILA, your ultimate educational
          companion. Tailored for students, AILA simplifies complex topics,
          making learning easier and more enjoyable.
        </p>
        <div className="hero-btn flex gap-5">
          <button className="bg-white border-0 text-black text-lg py-3 px-5 rounded-full shadow-lg">
            Download app
          </button>
          <a href="" className="flex items-center gap-3 text-lg">
            Try it Now! <FaArrowRightLong />
          </a>
        </div>
      </div>
      <div className="column-6">
        <img src={AppView} alt="app" className="w-full" />
      </div>
    </div>
  );
};

export default Banner;
