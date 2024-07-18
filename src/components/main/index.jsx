import { useEffect, useRef } from "react";
import logo from "../../assets/svg/logo.svg";
import hero from "../../assets/svg/hero.svg";
import Typed from "typed.js";

const Main = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Development of mobile applications",
        "Development and implementation ERP systems",
        "User interface, User experience design",
        "Optimization IT consulting infrastructure",
        "IT consulting",
      ],
      typeSpeed: 50,
      startDelay: 50,
      backDelay: 1500,
      backSpeed: 80,
      loop: true,
      loopCount: Infinity,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <main className="w-full h-full ">
        <div className="pt-44 pb-36 flex items-center justify-between container flex-wrap">
          <div className="w-[48%] max-[900px]:w-full">
            <img
              className="main max-[900px]:w-[125px] max-[900px]:h-[41px] max-[900px]:mx-auto w-[267px]  block"
              src={logo}
              alt="Logo"
            />
            <h1 className="main text-[40px] max-[900px]:text-[28px] max-[900px]:text-center pt-5 font-[600]  text-[#464359] leading-[54px] mb-[20px]">
              IT-Outsourcing Company
            </h1>
            <div className="main mb-7 max-[900px]:text-center ">
              <span
                ref={el}
                className="text-[40px]  max-[900px]:text-[28px] max-[900px]:text-center font-[600]  text-[#1b5bf7] mb-5  leading-10 "
              />
            </div>
          </div>
          <div className="w-[48%] max-[900px]:w-full">
            <img src={hero} alt="" className="max-[900px]:mx-auto block" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
