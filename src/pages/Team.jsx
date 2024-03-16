import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";

const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center py-14 px-14">
      <div>
        <p className="section-title">Our creative team</p>
        <p className="section-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col justify-center items-center gap-4 shadow-lg p-8 w-72">
          <img src={member1} alt="member1" />
          <div>
            <p className="text-base font-bold uppercase">
              Desa Keith L. Ambasa
            </p>
            <p className="text-sm font-semibold uppercase">Project Manager</p>
          </div>
          <p className="team-desc text-sm leading-4">
            Leads the planning and execution of AILA's web and mobile platforms,
            ensuring the timely delivery of features and adherence to project
            timelines.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 shadow-lg p-8 w-72">
          <img src={member2} alt="member1" />
          <div>
            <p className="text-base font-bold uppercase">
              Deedray Ann F. Capitulo
            </p>
            <p className="text-sm font-semibold uppercase">
              Front-end Developer
            </p>
          </div>
          <p className="team-desc text-sm leading-4">
            Designs and implements user interfaces for AILA's web and mobile
            applications, focusing on creating intuitive and engaging
            experiences for users.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 shadow-lg p-8 w-72">
          <img src={member3} alt="member1" />
          <div>
            <p className="text-base font-bold uppercase">
              Heart Angel Estabaya
            </p>
            <p className="text-sm font-semibold uppercase">
              Back-end Developer
            </p>
          </div>
          <p className="team-desc text-sm leading-4">
            Manages the server-side logic and database systems of AILA's
            platforms, ensuring seamless data processing and system
            functionality to support user interactions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
