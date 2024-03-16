import commercialVideo from "../assets/AILA Infomercial final.mp4";
import Preview from "../assets/preview.png";

const Commercial = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center pt-14">
      <p className="section-title">Unlock the Future of Learning with AILA</p>
      <p className="section-desc">
        Watch our compelling commercial video to see how AILA revolutionizes
        education. Discover how AILA simplifies complex topics and enhances
        learning experiences, empowering students to succeed in their academic
        journey.
      </p>
      <video
        className="rounded-lg shadow-2xl -mb-48"
        width="55%"
        controls
        poster={Preview}
      >
        <source src={commercialVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default Commercial;
