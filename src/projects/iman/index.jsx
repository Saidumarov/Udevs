import imanLogo from "../../assets/svg/iman-8d343bfc270029c181003633c9652299.svg";
import imanbg from "../../assets/images/imanApp-121e2c6598e85d2d53bec9ad7504dee3.png";
import iman from "../../assets/svg/bank.svg";
import { SmsuzDb } from "../../db";
const Iman = () => {
  return (
    <section className="mobile w-full h-full bg-white" id="iman">
      <div className="container pb-20">
        <div className="reveal">
          <div className="w-full hidden  max-[900px]:block mt-20">
            <img
              src={imanLogo}
              alt="Iman"
              className="block  max-[900px]:mb-4 mb-[30px] max-w-full max-[900px]:w-[200px] max-[450px]:w-[50%] mt-10"
            />
            <div className="mb-[34px] max-[900px]:mb-4">
              <span
                className="inline-flex gap-2 py-1 px-4 text-sm leading-7 font-medium rounded-[100px] items-center text-[#01CAB0]"
                style={{ backgroundColor: "rgba(1,202,176,0.2)" }}
              >
                <img src={iman} alt="dastavka" className="w-6 h-6" />
                Finance
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between flex-wrap-reverse pt-20 max-[900px]:pt-2 ">
          <div className="w-[48%] max-[900px]:w-full">
            <div className="reveal">
              <img
                src={imanLogo}
                alt="Iman"
                className="block mb-[30px] max-w-full max-[900px]:hidden"
              />
              <div className="mb-[34px] max-[900px]:hidden">
                <span
                  className="inline-flex gap-2 py-1 px-4 text-sm leading-7 font-medium rounded-[100px] items-center text-[#01CAB0]"
                  style={{ backgroundColor: "rgba(1,202,176,0.2)" }}
                >
                  <img src={iman} alt="dastavka" className="w-6 h-6" />
                  Finance
                </span>
              </div>
            </div>
            <div className="reveal">
              <p className="text-[20px] max-[900px]:mt-5 max-[900px]:text-[18px] max-[900px]:leading-[30px] leading-10 font-[560] text-[#464359] pr-11">
                Iman - It is a mutual financing platform based on the principles
                of Islamic Finance. Buyers, sellers and investors meet here.
              </p>
            </div>

            <div className="reveal">
              <h3 className=" text-[1.7rem]  font-[600]  text-[#464359] leading-[54px] mb-[20px]">
                What we did?
              </h3>
            </div>
            <div className="reveal">
              <div className="flex w-full items-center flex-wrap gap-y-4 gap-7 max-[515px]:gap-0 max-[515px]:justify-between pr-7 max-[900px]:pr-0 ">
                {SmsuzDb?.map((el, i) => (
                  <div
                    key={i}
                    className="block py-[10px] max-[515px]:mb-4 max-[515px]:w-[48%]  bg-[#f4f7ff] w-[152px] pl-[10px] pr-[20px] max-[900px]:pr-0 rounded-lg"
                  >
                    <img
                      src={el.img}
                      alt={el.title}
                      className=" max-[900px]:w-[50px]"
                    />
                    <span className="block text-[18px] leading-[30px] font-medium text-black">
                      {el.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[48%] max-[900px]:w-full">
            <div className="animation_img">
              <img
                src={imanbg}
                alt="Iman"
                className="rounded-3xl mt-10 max-[900px]:mt-0 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iman;
