import React from "react";
import { mobileDB, technologies } from "../../db";
import bg from "../../assets/images/bg.png";
import mobile_dev from "../../assets/images/mobile_dev-.png";
const Mobile = () => {
  return (
    <section className="mobile w-full h-full bg-white">
      <div className="container py-20">
        <h1 className="max-w-[800px] max-[900px]:text-[32px] max-[900px]:leading-[48px] text-[64px] leading-[64px] font-[600] text-[#1b5bf7]">
          Development of mobile applications
        </h1>
        <div className="w-full flex items-end justify-between max-[900px]:flex-wrap-reverse  ">
          <div className="w-[48%] pt-20 max-[900px]:pt-8 max-[900px]:w-full">
            <p className="text-[24px] leading-10  max-[900px]:text-[18px] max-[900px]:leading-[30px] max-[900px]:pr-0  font-medium text-[#464359] pr-11">
              In collaboration with startups, we have learned how to create a
              creative and functional user interface for mobile applications.
            </p>
            <div className="flex max-[450px]:flex-wrap max-[450px]:justify-center w-full max-[900px]:justify-start max-[900px]:gap-5 items-center justify-between my-10 pr-16 max-[900px]:pr-0 ">
              {mobileDB?.map((el, i) => (
                <div
                  key={i}
                  className="block py-[10px] bg-[#f4f7ff] max-[450px]:w-full w-[150px] max-[900px]:w-[200px] pl-[10px] pr-[20px] rounded-lg"
                >
                  <img
                    src={el.img}
                    alt={el.title}
                    className=" max-[900px]:w-[50px] "
                  />
                  <span className="block max-[900px]:text-[16px] text-[18px] leading-[30px] font-medium text-black">
                    {el.title}
                  </span>
                </div>
              ))}
            </div>
            <h3 className=" text-[32px] pt-5 font-[600]  text-[#464359] leading-[54px] mb-[20px]">
              Technologies
            </h3>
            <div className="flex items-center">
              {technologies.map((el, i) => (
                <div key={i} className="max-w-16 mr-12 max-[600px]:mr-10">
                  <img
                    className="block max-[600px]:w-12 max-[600px]:w-12 w-14 h-14 mb-2"
                    src={el.img}
                    alt={el.title}
                  />
                  <span className="block max-[600px]:text-[18px] text-[20px] leading-[30px] font-medium text-black">
                    {el.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[45%] max-[900px]:w-full h-[580px] max-[900px]:h-[480px] max-[450px]:h-auto rounded-3xl  py-7 overflow-hidden flex justify-end relative">
            <img
              src={bg}
              alt="bg"
              className="w-full absolute h-full rounded-3xl  object-cover"
            />
            <img
              src={mobile_dev}
              alt="mobile_dev"
              className="w-[95%] h-full relative z-10 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
