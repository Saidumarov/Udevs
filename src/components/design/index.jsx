import { Technologies, UI } from "../../db";
import bg from "../../assets/images/bg.png";
import ux from "../../assets/images/ux.png";
const Design = () => {
  return (
    <section className="mobile w-full h-full bg-white">
      <div className="container py-20 max-[900px]:pt-5">
        <h1 className="max-w-[800px] max-[900px]:text-[32px] max-[900px]:leading-[48px] text-[64px] leading-[64px] font-[600] text-[#1b5bf7]">
          UI / UX design
        </h1>
        <div className="w-full flex  justify-between max-[900px]:flex-wrap-reverse">
          <div className="w-[48%] pt-20 max-[900px]:w-full max-[900px]:pt-5">
            <p className="text-[24px]  max-[900px]:text-[18px] max-[900px]:leading-[30px] max-[900px]:pr-0  leading-10 font-medium text-[#464359] pr-11">
              Our company takes a human-centered approach to design
            </p>
            <div className="flex w-full items-center flex-wrap justify-between my-10 pr-14 max-[560px]:pr-0 ">
              {UI?.map((el, i) => (
                <div
                  key={i}
                  className="block py-[10px] mb-5  bg-[#f4f7ff] w-[152px] max-[515px]:w-[48%] pl-[10px] pr-[20px] rounded-lg"
                >
                  <img src={el.img} alt={el.title} className=" max-[900px]:w-[50px]" />
                  <span className="block  max-[900px]:text-[16px] text-[18px] leading-[30px] font-medium text-black">
                    {el.title}
                  </span>
                </div>
              ))}
            </div>
            <h3 className=" text-[32px]  font-[600]  text-[#464359] leading-[54px] mb-[20px]">
              Technologies
            </h3>
            <div className="flex items-center">
              {Technologies.map((el, i) => (
                <div key={i} className="max-w-16 mr-12 max-[450px]:mr-7">
                  <img
                    className={`block ${
                      el.title === "Lottie" ? "w-10" : "w-14"
                    }  h-14 mb-2`}
                    src={el.img}
                    alt={el.title}
                  />
                  <span className="block  text-[20px] max-[600px]:text-[18px] leading-[30px] font-medium text-black">
                    {el.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[45%] max-[900px]:w-full h-[550px] max-[450px]:h-auto rounded-3xl mt-10 max-[900px]:mt-0  py-7 overflow-hidden flex justify-end relative">
            <img
              src={bg}
              alt="bg"
              className="w-full absolute h-full rounded-3xl  "
            />
            <img
              src={ux}
              alt="mobile_dev"
              className="w-[95%] h-full relative z-10 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
