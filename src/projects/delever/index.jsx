import delver from "../../assets/images/delever_app-d50b0f5953ce60eec080bad20fe68a78.png";
import delverT from "../../assets/svg/delvert.svg";
import dastavka from "../../assets/svg/das.svg";
import { DeleverDb } from "../../db";
const Delever = () => {
  return (
    <section className="mobile w-full h-full bg-white" id="portfolio">
      <div className="container py-20 max-[900px]:py-5">
        <div className="reveal">
          <div className="w-full hidden max-[900px]:block">
            <img
              src={delverT}
              alt="Delver"
              className="block mb-[30px] max-w-full max-[900px]:mb-4"
            />
            <div className="">
              <span
                className="inline-flex gap-2 py-1 px-4 text-sm leading-7 font-medium rounded-[100px] items-center text-[#FF5722]"
                style={{ backgroundColor: "rgba(255,87,34,0.2)" }}
              >
                <img src={dastavka} alt="dastavka" className="w-6 h-6" />
                Delivery
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between flex-wrap pt-20 max-[900px]:pt-5 ">
          <div className="w-[48%] max-[900px]:w-full">
            <div className="animation_img">
              <img src={delver} alt="delver" className="rounded-3xl" />
            </div>
          </div>
          <div className="w-[48%]  max-[900px]:w-full  pl-6 max-[900px]:pl-2">
            <div className="reveal">
              <img
                src={delverT}
                alt="Delver"
                className="block mb-[30px] max-w-full max-[900px]:hidden"
              />
              <div className="mb-[34px] max-[900px]:hidden">
                <span
                  className="inline-flex gap-2 py-1 px-4 text-sm leading-7 font-medium rounded-[100px] items-center text-[#FF5722]"
                  style={{ backgroundColor: "rgba(255,87,34,0.2)" }}
                >
                  <img src={dastavka} alt="dastavka" className="w-6 h-6" />
                  Delivery
                </span>
              </div>
            </div>
            <div className="reveal">
              <p className="text-[20px] max-[900px]:text-[18px] max-[900px]:leading-[30px] leading-10 font-[560] text-[#464359] ">
                Delever - Delivery service automation targeted at both consumers
                and restaurants.
              </p>
            </div>

            <div className="reveal">
              <h3 className=" text-[1.7rem]  font-[600]  text-[#464359] leading-[54px] mb-[20px]">
                What we did?
              </h3>
            </div>
            <div className="reveal">
              <div className="flex w-full items-center flex-wrap justify-start gap-y-4 gap-7 max-[515px]:gap-0 max-[515px]:justify-between ">
                {DeleverDb?.map((el, i) => (
                  <div
                    key={i}
                    className="block py-[10px] max-[515px]:w-[48%] max-[515px]:mb-5  bg-[#f4f7ff] w-[152px] pl-[10px] pr-[20px] rounded-lg"
                  >
                    <img
                      src={el.img}
                      alt={el.title}
                      className=" max-[900px]:w-[50px]"
                    />
                    <span className="block text-[18px] max-[900px]:text-[16px] leading-[30px] font-medium text-black">
                      {el.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delever;
