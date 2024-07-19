import { WorkDb } from "../../db";

const Work = () => {
  return (
    <section className="w-full h-full bg-white pb-20">
      <div className="container pt-20 max-[900px]:pt-0 max-[900px]:pb-0 pb-14">
        <div className="reveal">
          <h1 className="max-w-[800px] max-[900px]:text-[32px] text-[64px] leading-[64px] font-[600] text-[#1b5bf7]">
            How we work!
          </h1>
        </div>
      </div>
      <div className="reveal">
        <div className="w-[1350px] max-[1430px]:w-[95%] pt-10 mx-auto flex items-center justify-between relative flex-wrap">
          <div className="w-full  absolute flex justify-center top-[42%] max-[900px]:top-[50%] left-0">
            <div className="w-[80%] max-[900px]:w-[550px] max-[900px]:ml-[-700px] max-[800px]:ml-[-500px] max-[500px]:ml-[-300px] max-[400px]:ml-[-280px]  max-[600px]:ml-[-400px] border-dotted  max-[900px]:rotate-90 border-t-[3.9px] border-[#ac98ff] h-auto   "></div>
          </div>
          {WorkDb.map((el, i) => (
            <div
              key={i}
              className="w-[20%] max-[900px]:mb-5 max-[900px]:w-full  max-[900px]:items-center max-[900px]:flex justify-start relative"
            >
              <img
                className="block mx-auto max-[900px]:mx-0 max-[900px]:w-[56px] "
                src={el.img}
                alt={el.title}
              />
              <div>
                <h3 className="text-[18px] pl-5 max-[900px]:text-left leading-7 font-semibold text-center  text-[#464359]">
                  {el.title}
                </h3>
                <span className=" max-[900px]:text-left   text-[16px] text-[#464359] leading-7 font-normal px-4 text-center block">
                  {el.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
