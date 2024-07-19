import { useEffect, useState } from "react";
import team from "../../assets/svg/teamUsers.svg";
const Team = () => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 1370) {
        setActive(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (active) {
      setTimeout(() => {
        if (count < 100) {
          setCount(count + 1);
        }
      }, 10);
    }
  }, [count, active]);
  return (
    <section className="w-full h-full bg-[#f4f7ff]" id="team">
      <div className="container py-20 max-[900px]:pt-6">
        <div className="reveal">
          <h1 className="max-w-[800px] max-[900px]:text-[32px] text-[64px] leading-[64px] font-[600] text-[#1b5bf7]">
            Team
          </h1>
        </div>
        <div className="w-full flex items-center justify-between flex-wrap-reverse">
          <div className="w-[48%] pt-20 max-[400px]:pt-5 max-[900px]:w-full">
            <div className="reveal">
              <p className="text-[20px] leading-10 font-medium max-[600px]:pr-0 text-[#464359] pr-11 max-[900px]:text-[18px] max-[900px]:leading-8 max-[900px]:w-[70%] max-[600px]:w-full">
                For each project, we form a team that includes a project
                manager, business analyst, UI / UX designer, DevOps, QA
                engineer, backend and front-end developers.
              </p>
            </div>
            <div className="reveal">
              <span className="max-[900px]:text-[80px] mb-1 text-[120px] leading-[96px] font-[700] text-[#1b5bf7] mt-10 block">
                {count}+
              </span>
            </div>
            <div className="reveal">
              <p className="main max-[900px]:text-[24px] text-[40px] pt-5 max-[900px]:pt-0 font-[600]  text-[#464359] leading-[54px] mb-[20px]">
                Dedicated team
              </p>
            </div>
          </div>
          <div className="w-[48%] flex justify-end max-[900px]:justify-start max-[900px]:pl-12 max-[600px]:pl-0 max-[600px]:justify-center max-[900px]:pt-16 max-[900px]:w-full ">
            <div className="animation_img">
              <img
                src={team}
                alt="Team"
                className=" max-[900px]:h-[350px] max-[600px]:h-[290px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
