import AppView from "../assets/section1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button, Modal } from "antd";

const Banner = () => {
  const info = () => {
    Modal.info({
      title: "This is a notification message",
      content: (
        <div>
          <p className="p-2">
            The app is currently being published on the Play Store.
          </p>
          <p className="p-2">
            <p>
              Try our web AILA system by clicking
              <span className="font-semibold">"Try it Now"</span>.
            </p>
          </p>
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <div className="column-12 flex flex-col justify-between items-center gap-2 sm:flex-row md:mt-5 md:gap-7">
      <div className="column-6 ml-0 max-w-[40em] w-full p-8 sm:ml-14 sm:w-7/12 sm:p-0 md:ml-6 lg:ml-14">
        <h1 className="mb-7 text-4xl leading-snug text-center sm:mb-10 sm:text-left md:mb-3 lg:text-6xl lg:mb-10">
          Simplify Learning with AILA!
        </h1>
        <p className="text-xl text-center mb-7 sm:mb-14 sm:text-left md:mb-10 md:text-lg lg:mb-10">
          Experience seamless learning with AILA, your ultimate educational
          companion. Tailored for students, AILA simplifies complex topics,
          making learning easier and more enjoyable.
        </p>
        <div className="hero-btn flex justify-center gap-5 sm:justify-start">
          <Button
            className="transition ease-in-out delay-150 bg-white hover:!text-black hover:-translate-y-1 duration-300 border-0 text-black text-lg h-12 rounded-full shadow-lg"
            onClick={info}
          >
            Download app
          </Button>
          <a
            href="https://aila-fe.vercel.app"
            className="flex items-center gap-3 text-lg"
          >
            Try it Now! <FaArrowRightLong />
          </a>
        </div>
      </div>
      <div className="column-6 pl-8 sm:p-0">
        <img src={AppView} alt="app" className="w-full" />
      </div>
    </div>
  );
};

export default Banner;
