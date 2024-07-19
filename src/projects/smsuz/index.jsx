import smsuz from "../../assets/images/smsuz_app-c123f9db0e8dfe776a6f738a4df62c68.png";
import smsuzt from "../../assets/svg/smsuzt.svg";
import notifcation from "../../assets/svg/notf.svg";
import { SmsuzDb } from "../../db";
const Smsuz = () => {
  return (
    <section className="mobile w-full h-full bg-white" id="sms">
      <div className="container pb-20">
        <div className="reveal">
          <div className="w-full hidden max-[900px]:block mt-20">
            <img
              src={smsuzt}
              alt="Smsuz"
              className="block max-[900px]:mb-4 mb-[30px] max-w-full max-[900px]:w-[300px] max-[450px]:w-[70%] mt-10"
            />
            <div className="mb-[34px] max-[900px]:mb-4">
              <span
                className="inline-flex gap-2 py-1 px-4 text-sm leading-7 font-medium rounded-[100px] items-center text-[#4473E5]"
                style={{ backgroundColor: "rgba(68,115,229,0.2)" }}
              >
                <img src={notifcation} alt="dastavka" className="w-6 h-6" />
                Notification
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between flex-wrap-reverse pt-20 max-[900px]:pt-2 ">
          <div className="w-[48%] max-[900px]:w-full">
            <div className="reveal">
              <img
                src={smsuzt}
                alt="Smsuz"
                className="block max-[900px]:hidden max-[900px]:mb-4 mb-[30px] max-w-full max-[900px]:w-[80%]"
              />
              <div className="mb-[34px] max-[900px]:mb-4 max-[900px]:hidden">
                <span
                  className="inline-flex gap-2 py-1 px-4 text-sm leading-7 font-medium rounded-[100px] items-center text-[#4473E5]"
                  style={{ backgroundColor: "rgba(68,115,229,0.2)" }}
                >
                  <img src={notifcation} alt="dastavka" className="w-6 h-6" />
                  Notification
                </span>
              </div>
            </div>
            <div className="reveal">
              <p className="text-[20px] max-[900px]:text-[18px] max-[900px]:leading-[30px] leading-10 font-[560] text-[#464359] pr-11 max-[900px]:pr-0 max-[900px]:pt-5">
                Smsuz.uz - It is a platform for bulk SMS messaging.
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
                    className="block py-[10px] max-[515px]:mb-4 max-[515px]:w-[48%]  bg-[#f4f7ff] w-[152px] pl-[10px] pr-[20px] rounded-lg"
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
          <div className="w-[48%]  max-[900px]:w-full">
            <div className="animation_img">
              <img
                src={smsuz}
                alt="Smsuz"
                className="rounded-3xl mt-10 max-[900px]:mt-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Smsuz;
