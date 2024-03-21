import Pricing from "./Pricing";
import customIcon from "../assets/custom-icon.svg";
import uploadIcon from "../assets/upload-icon.svg";
import chatIcon from "../assets/chat-icon.svg";
import summaryIcon from "../assets/summary-icon.svg";
import desktop from "../assets/desktop.png";

const Features = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center py-8 px-8 sm:py-14 sm:px-12 md:px-5">
        <div className="flex flex-col justify-center items-center mt-28 sm:mt-52">
          <p className="section-title text-2xl w-10/12 sm:text-3xl sm:w-full">
            AILA features
          </p>
          <p className="section-desc w-full sm:w-7/12 mb-7 md:sm:w-10/12 lg:w-full">
            Explore AILA's innovative features for a seamless learning journey.
          </p>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-x-9 gap-y-9 sm:gap-y-0 mt-5">
          <div className="flex flex-col justify-center items-center text-center gap-3 sm:text-right sm:items-end">
            <img src={customIcon} alt="custom-icon" />
            <p className="feature-title text-lg w-full sm:text-2xl">
              Customize Learning Formats
            </p>
            <p className="text-center w-12/12 sm:text-right">
              Optionally generate summaries in PDF, audio, or video formats to
              tailor your study materials to your preferences.
            </p>
          </div>
          <div className="flex flex-col gap-9">
            <div className="flex flex-col justify-center items-center gap-3">
              <img src={uploadIcon} alt="upload-icon" />
              <p className="feature-title text-lg w-full sm:text-2xl">
                Upload Media
              </p>
              <p>
                Easily upload diverse media types, including PDFs, audio files,
                videos, YouTube URLs, website URLs, or text.
              </p>
            </div>
            <img src={desktop} alt="desktop" />
            <div className="flex flex-col justify-center items-center gap-3">
              <img src={chatIcon} alt="chat-icon" />
              <p className="feature-title text-lg w-full sm:text-2xl">
                Chatbot Interaction
              </p>
              <p>Ask for instant clarification and insights.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-3 sm:text-left sm:items-start">
            <img src={summaryIcon} alt="summary-icon" />
            <p className="feature-title text-lg w-full sm:text-2xl">
              Generate Summaries
            </p>
            <p>Simplify complex content instantly.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
