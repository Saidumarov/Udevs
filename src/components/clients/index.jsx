import Marquee from "react-fast-marquee";
import { Clints2, ClintsDb } from "../../db";

const Clients = () => {
  return (
    <section className="w-full h-full bg-white pb-20">
      <div className="container pt-20 pb-14 max-[900px]:py-5">
        <h1 className="max-w-[800px] max-[900px]:text-[32px] max-[900px]:leading-[48px] text-[64px] leading-[64px] font-[600] text-[#1b5bf7]">
          Our clients
        </h1>
      </div>
      <div className="w-full relative overflow-hidden ">
        <Marquee
          gradient={false}
          speed={20}
          pauseOnHover={false}
          pauseOnClick={false}
          delay={0}
          play={true}
          direction="left"
          className="overflow-hidden py-3"
        >
          {ClintsDb.map((el, i) => (
            <img
              className="img  ml-10 w-[213px] max-[900px]:w-[180px] object-contain  rounded-3xl hover:scale-110 transition-all duration-500 cursor-pointer"
              src={el.img}
              alt="not found"
              key={i}
            />
          ))}
        </Marquee>
        <Marquee
          gradient={false}
          speed={20}
          pauseOnHover={false}
          pauseOnClick={false}
          delay={0}
          play={true}
          direction="right"
          className="overflow-hidden py-3 mt-5 max-[900px]:nt-0"
        >
          {Clints2.map((el, i) => (
            <img
              className="img  ml-10 max-[900px]:w-[180px]  w-[213px] object-contain  rounded-3xl hover:scale-110 transition-all duration-500 cursor-pointer"
              src={el.img}
              alt="not found"
              key={i}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;
