import bg from "../../assets/images/bg.png";
import erp from "../../assets/images/erp.png";
import { OptimizationDb } from "../../db";
const Optimization = () => {
  return (
    <section className="w-full h-full bg-[#f4f7ff]" id="settings">
      <div className="container py-20  max-[900px]:py-5">
        <div className="reveal">
          <h1 className="max-w-[800px] max-[900px]:text-[32px] max-[900px]:leading-[48px] text-[64px] leading-[64px] font-[600] text-[#1b5bf7]">
            Optimization Infrastructure
          </h1>
        </div>
        <div className="w-full flex items-center justify-between  max-[900px]:flex-wrap">
          <div className="w-[45%] max-[900px]:w-full rounded-3xl h-[500px] mt-16 max-[900px]:mt-10 max-[600px]:h-auto overflow-hidden flex justify-end relative">
            <img
              src={bg}
              alt="bg"
              className="w-full absolute h-full  rounded-3xl "
            />
            <img src={erp} alt="erp" className="img_cover animation_img" />
          </div>
          <div className="w-[48%] pt-20 pl-14 max-[900px]:w-full max-[900px]:pt-5 max-[900px]:pl-0">
            <div className="reveal">
              <p className="text-[24px]  max-[900px]:text-[18px] max-[900px]:leading-[30px]  leading-10 font-medium text-[#464359] ">
                Our experienced professionals will help you optimize your
                infrastructure
              </p>
            </div>
            <div className="reveal">
              <div className="flex w-full  items-center justify-between my-10 flex-wrap  ">
                {OptimizationDb?.map((el, i) => (
                  <div
                    key={i}
                    className="block py-[10px] max-[515px]:w-[48%] bg-[#e0e8ff] w-[152px] pl-[10px] pr-[15px] rounded-lg mb-4"
                  >
                    <img
                      src={el.img}
                      alt={el.title}
                      className="w-14 h-14 mb-3 block  max-[900px]:w-[50px]"
                    />
                    <span className="block max-[900px]:text-[16px] text-[18px] leading-[30px] font-medium text-black">
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

export default Optimization;
