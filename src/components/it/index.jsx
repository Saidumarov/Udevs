import { It } from "../../db";
import bg from "../../assets/svg/consulting.svg";
const IT_consulting = () => {
  return (
    <section className="mobile w-full h-full bg-white" id="desktop">
      <div className="container py-20 max-[900px]:py-5">
        <div className="reveal">
          <h1 className="max-w-[800px] max-[900px]:text-[32px] max-[900px]:leading-[48px] text-[64px] leading-[64px] font-[600] text-[#1b5bf7]">
            IT consulting
          </h1>
        </div>
        <div className="w-full flex  justify-between flex-wrap-reverse">
          <div className="w-[48%] pt-20 max-[900px]:pt-5 max-[900px]:w-full">
            <div className="reveal">
              <p className="text-[24px]  max-[900px]:text-[18px] max-[900px]:leading-[30px] leading-10 font-medium text-[#464359] pr-11 max-[900px]:pr-0">
                We can improve the qualifications of your employees thereby
                increasing the efficiency of your company
              </p>
            </div>
            <div className="reveal">
              <div className="flex w-full items-center flex-wrap justify-between my-10 pr-14 max-[900px]:pr-0 ">
                {It?.map((el, i) => (
                  <div
                    key={i}
                    className="block max-[515px]:w-[48%] py-[10px] mb-5  bg-[#f4f7ff] w-[152px] pl-[10px] pr-[20px] rounded-lg"
                  >
                    <img
                      src={el.img}
                      alt={el.title}
                      className=" max-[900px]:w-[50px]"
                    />
                    <span className="block max-[900px]:text-[16px] text-[18px] leading-[30px] font-medium text-black">
                      {el.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[48%] max-[900px]:w-full rounded-3xl mt-10 max-[900px]:mt-0  py-7 flex justify-center relative">
            <img
              src={bg}
              alt="consulting-bg"
              className="animation_img "
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                zIndex: 10,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IT_consulting;
