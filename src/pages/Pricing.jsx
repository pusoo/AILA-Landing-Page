import { IoMdCheckmark } from "react-icons/io";
import robot1 from "../assets/robot1.png";
import robot2 from "../assets/robot2.png";

const Pricing = () => {
  return (
    <div className="pt-14">
      <p className="section-title text-center text-2xl sm:text-3xl sm:w-full">
        AILA AWESOME OFFERS
      </p>
      <div className="grid grid-cols-1 gap-5 pt-5 px-10 -mb-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        <div className="relative price-card-bg rounded-3xl h-[485px] sm:h-[535px] md:h-[495px] lg:h-[545px] xl:h-[535px]">
          <div className="trial-tag absolute overflow-hidden top-0 right-0 h-36 w-36">
            <span className="absolute w-52 py-2 top-5 -right-16 text-white text-center rotate-45 text-sm">Trial pack</span>
          </div>
          <div className="bg-white text-[#333333] flex flex-col justify-between items-center text-center m-2 p-7 rounded-3xl h-[470px] sm:h-[520px] md:h-[480px] lg:h-[530px] xl:h-[520px]">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col justify-center items-center">
                <p className="font-semibold">Trial offer</p>
                <p className="text-sm">
                  Perfect for new learners enjoy our free trials
                </p>
              </div>
              <p className="font-bold text-2xl">Free 1 Month</p>
              <ul className="flex flex-col gap-1 text-left text-sm mt-2">
                <li className="flex gap-2">
                  <IoMdCheckmark /> 5 Credits
                </li>
                <li className="flex gap-2">
                  <IoMdCheckmark /> 1 free 5 mins video conversion
                </li>
                <li className="flex gap-2">
                  <IoMdCheckmark /> Free Access All Features except the Chatbot
                </li>
                <li className="flex gap-2">
                  <IoMdCheckmark /> Video limited for 5 mins
                </li>
                <li className="flex gap-2">
                  <IoMdCheckmark /> Audio limited for 5 mins
                </li>
                <li className="flex gap-2">
                  <IoMdCheckmark /> Unlimited file uploads
                </li>
              </ul>
            </div>
            <button className="price-button text-white rounded-xl py-2.5 w-full">
              Start Trial
            </button>
          </div>
        </div>
        <div className="price-card-bg relative overflow-hidden rounded-3xl h-[485px] sm:h-[535px] md:h-[495px] lg:h-[545px] xl:h-[535px]">
          <div className="starter-tag absolute overflow-hidden top-0 right-0 h-36 w-36">
            <span className="absolute w-52 py-2 top-5 -right-16 text-white text-center rotate-45 text-sm">Starter pack</span>
          </div>
          <div className="bg-white text-[#333333] flex flex-col justify-between items-center text-center m-2 p-7 rounded-3xl h-[470px] sm:h-[520px] md:h-[480px] lg:h-[530px] xl:h-[520px]">
            <div className="flex flex-col justify-center items-center">
              <p className="font-semibold">Basic offer</p>
              <p className="text-sm">
                Ideal for casual learners exploring various topics.
              </p>
            </div>
            <p className="font-bold text-4xl">₱180</p>
            <div className="bg-[#d9d9d9] rounded-full w-6/12">
              <div className="pricing-month rounded-full text-white px-4 py-1 text-[0.625em] w-fit">
                Monthly
              </div>
            </div>
            <ul className="flex flex-col gap-1 text-left text-sm">
              <li className="flex gap-2">
                <IoMdCheckmark /> 10 Credits
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> 2 free 5 mins video conversion
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> 1 free 5 mins Audio conversion
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> Free Access All Features with Chatbot
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> Video limited for 5 mins
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> Audio limited for 5 mins
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> Unlimited file uploads
              </li>
            </ul>
            <button className="price-button text-white rounded-xl py-2.5 mt-5 w-full">
              Purchase
            </button>
          </div>
        </div>
        <div className="price-card-bg relative overflow-hidden rounded-3xl h-[485px] sm:h-[535px] md:h-[495px] lg:h-[545px] xl:h-[535px]">
          <div className="popular-tag absolute overflow-hidden top-0 right-0 h-36 w-36">
            <span className="absolute w-52 py-2 top-5 -right-16 text-white text-center rotate-45 text-sm">Popular pack</span>
          </div>
          <div className="bg-white text-[#333333] flex flex-col justify-between items-center text-center m-2 p-7 rounded-3xl h-[470px] sm:h-[520px] md:h-[480px] lg:h-[530px] xl:h-[520px]">
            <div className="flex flex-col justify-center items-center">
              <p className="font-semibold">Premium offer</p>
              <p className="text-sm">
                Perfect for dedicated learners engaging in deeper research or
                study.
              </p>
            </div>
            <p className="font-bold text-4xl">₱450</p>
            <div className="bg-[#d9d9d9] rounded-full w-6/12">
              <div className="pricing-month rounded-full text-white px-4 py-1 text-[0.625em] w-fit">
                Monthly
              </div>
            </div>
            <ul className="flex flex-col gap-1 text-left text-sm">
              <li className="flex gap-2">
                <IoMdCheckmark /> 30 Credits
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> 2 free 10 mins video conversion
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> 1 free 5 mins Audio conversion
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> Free Access All Features with Chatbot
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> Video limited for 10 mins
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> Audio limited for 15 mins
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> Unlimited file uploads
              </li>
            </ul>
            <button className="price-button text-white rounded-xl py-2.5 mt-5 w-full">
              Purchase
            </button>
          </div>
        </div>
        <div className="price-card-bg relative overflow-hidden rounded-3xl h-[485px] sm:h-[535px] md:h-[495px] lg:h-[545px] xl:h-[535px]">
          <div className="exclusive-tag absolute overflow-hidden top-0 right-0 h-36 w-36">
            <span className="absolute w-52 py-2 top-5 -right-16 text-white text-center rotate-45 text-sm">Exclusive pack</span>
          </div>
          <div className="bg-white text-[#333333] flex flex-col justify-between items-center text-center m-2 p-7 rounded-3xl h-[470px] sm:h-[520px] md:h-[480px] lg:h-[530px] xl:h-[520px]">
            <div className="flex flex-col justify-center items-center">
              <p className="font-semibold">Grand offer</p>
              <p className="text-sm">
                Perfect for dedicated learners more engaging in deeper research
                or study.
              </p>
            </div>
            <p className="font-bold text-4xl">₱750</p>
            <div className="bg-[#d9d9d9] rounded-full w-6/12">
              <div className="pricing-month rounded-full text-white px-4 py-1 text-[0.625em] w-fit">
                Monthly
              </div>
            </div>
            <ul className="flex flex-col gap-1 text-left text-sm">
              <li className="flex gap-2">
                <IoMdCheckmark /> 50 Credits
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> 5 free 25 mins video conversion
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> 3 free 5 mins Audio conversion
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> Free Access All Features with Chatbot
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> Video limited for 10 mins
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> Audio limited for 15 mins
              </li>
              <li className="flex gap-2">
                <IoMdCheckmark /> Unlimited file uploads
              </li>
            </ul>
            <button className="price-button text-white rounded-xl py-2.5 mt-5 w-full">
              Purchase
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-5 w-full">
        <img src={robot1} alt="robot" className="w-4/12 md:w-2/12"/>
        <img src={robot2} alt="robot" className="w-4/12 md:w-2/12"/>
      </div>
    </div>
  );
};

export default Pricing;
