import customIcon from "../assets/custom-icon.svg";
import uploadIcon from "../assets/upload-icon.svg";
import chatIcon from "../assets/chat-icon.svg";
import summaryIcon from "../assets/summary-icon.svg";
import desktop from "../assets/desktop.png";

const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center py-14 px-12">
      <div className="mt-52">
        <p className="section-title">AILA features</p>
        <p className="section-desc">
          Explore AILA's innovative features for a seamless learning journey.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-9">
        <div className="flex flex-col justify-center items-end text-right gap-3">
          <img src={customIcon} alt="custom-icon" />
          <p className="feature-title text-2xl w-9/12">Customize Learning Formats</p>
          <p className="text-right w-12/12">
            Optionally generate summaries in PDF, audio, or video formats to
            tailor your study materials to your preferences.
          </p>
        </div>
        <div className="flex flex-col gap-9">
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={uploadIcon} alt="upload-icon" />
            <p className="feature-title text-2xl">Upload Media</p>
            <p>
              Easily upload diverse media types, including PDFs, audio files,
              videos, YouTube URLs, website URLs, or text.
            </p>
          </div>
          <img src={desktop} alt="desktop" />
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={chatIcon} alt="chat-icon" />
            <p className="feature-title text-2xl">Chatbot Interaction</p>
            <p>Ask for instant clarification and insights.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-3">
          <img src={summaryIcon} alt="summary-icon" />
          <p className="feature-title text-2xl">Generate Summaries</p>
          <p>Simplify complex content instantly.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
