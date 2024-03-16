import commercialVideo from "../assets/AILA Infomercial final.mp4";
import Preview from "../assets/preview.png";

const Commercial = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center pt-14 px-8 sm:px-0">
      <p className="section-title text-2xl w-10/12 sm:text-3xl sm:w-full md:w-9/12 lg:md:w-6/12">Unlock the Future of Learning with AILA</p>
      <p className="section-desc w-full sm:w-7/12 mb-7 md:w-9/12 lg:w-7/12">
        Watch our compelling commercial video to see how AILA revolutionizes
        education. Discover how AILA simplifies complex topics and enhances
        learning experiences, empowering students to succeed in their academic
        journey.
      </p>
      <video
        className="rounded-lg shadow-2xl -mb-24 w-full sm:w-7/12 sm:-mb-48 md:w-9/12 md:-mb-30"
        controls
        poster={Preview}
      >
        <source src={commercialVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Commercial;
