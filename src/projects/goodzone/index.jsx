import goodzone from "../../assets/images/goodzone.png";
import goodzonet from "../../assets/svg/godzone.png";
import savat from "../../assets/svg/savat.svg";
import { DeleverDb } from "../../db";
const Goodzone = () => {
  return (
    <section className="mobile w-full h-full bg-white">
      <div className="container py-20 max-[900px]:py-5">
        <div className="w-full hidden max-[900px]:block">
          <img
            src={goodzonet}
            alt="Goodzone"
            className="block mb-[30px] max-w-full max-[900px]:mb-4"
          />
          <div className="mb-[34px]">
            <span
              className="inline-flex gap-2 py-1 px-4 text-sm leading-7 font-medium rounded-[100px] items-center text-[#FF5722]"
              style={{ backgroundColor: "rgba(255,87,34,0.2)" }}
            >
              <img src={savat} alt="Savat" className="w-6 h-6" />
              E-Commerce
            </span>
          </div>
        </div>
        <div className="w-full flex items-center justify-between flex-wrap  ">
          <div className="w-[48%] max-[900px]:w-full">
            <img src={goodzone} alt="Goodzone" className="rounded-3xl" />
          </div>
          <div className="w-[48%] max-[900px]:w-full  pl-6 max-[900px]:pl-2">
            <img
              src={goodzonet}
              alt="Goodzone"
              className="block mb-[30px] max-w-full max-[900px]:hidden"
            />
            <div className="mb-[34px] max-[900px]:hidden">
              <span
                className="inline-flex gap-2 py-1 px-4 text-sm leading-7 font-medium rounded-[100px] items-center text-[#FF5722]"
                style={{ backgroundColor: "rgba(255,87,34,0.2)" }}
              >
                <img src={savat} alt="Savat" className="w-6 h-6" />
                E-Commerce
              </span>
            </div>
            <p className="text-[20px] max-[900px]:text-[18px] max-[900px]:leading-[30px] max-[900px]:pt-5 leading-10 font-[560] text-[#464359]">
              Goodzone - Internet shop of household appliances in Uzbekistan.
            </p>

            <h3 className=" text-[1.7rem]  font-[600]  text-[#464359] leading-[54px] mb-[20px]">
              What we did?
            </h3>
            <div className="flex w-full items-center flex-wrap justify-start gap-y-4 gap-7 max-[515px]:gap-0 max-[515px]:justify-between ">
              {DeleverDb?.map((el, i) => (
                <div
                  key={i}
                  className="block py-[10px] max-[515px]:w-[48%] max-[515px]:mb-5  bg-[#f4f7ff] w-[152px] pl-[10px] pr-[20px] rounded-lg"
                >
                  <img src={el.img} alt={el.title} className=" max-[900px]:w-[50px]" />
                  <span className="block text-[18px] leading-[30px] font-medium text-black">
                    {el.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goodzone;
