import location from "../../assets/svg/location.svg";
import tel from "../../assets/svg/tel.svg";
import sms from "../../assets/svg/sms.svg";
import {
  Fasebook,
  Instagram2,
  Teligram,
  Twitter2,
  Youtube2,
} from "../../constants";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage({ name: "", email: "", message: "" });
  };
  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  return (
    <section className="mobile w-full h-full bg-white pb-20 max-[768px]:pb-0   ">
      <div className="container pt-20 pb-14 max-[768px]:pb-0 max-[900px]:pt-5">
        <h1 className="max-w-[800px] max-[900px]:text-[32px] text-[64px] leading-[64px] font-[600] text-[#1b5bf7]">
          Contact us
        </h1>
        <div className="shadov w-full flex items-center flex-wrap justify-between mt-20 max-[900px]:mt-0  bg-white rounded-[10px] pt-10 max-[768px]:px-0 px-24 pb-20">
          <div className="w-[48%] max-[768px]:w-full mt-[-70px] max-[768px]:mt-0">
            <h3 className="text-[24px] leading-7 font-semibold  text-[#464359]">
              Leave us a message
            </h3>
            <form onSubmit={handleSubmit} className="w-full">
              <input
                required
                type="text"
                placeholder="Name"
                name="name"
                value={message.name}
                onChange={handleChange}
                className="w-[94%] max-[768px]:w-full h-14 border border-[#B4BEC8] outline-none rounded-md text-[20px] pl-5 mt-6"
              />
              <input
                required
                type="email"
                name="email"
                value={message.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-[94%] h-14   max-[768px]:w-full border border-[#B4BEC8] outline-none rounded-md text-[20px] pl-5 mt-6"
              />
              <textarea
                required
                name="message"
                value={message.message}
                onChange={handleChange}
                className="w-[94%]  max-[768px]:w-full h-36 resize-none border border-[#B4BEC8] outline-none rounded-md text-[20px] pl-5 mt-6 pt-3"
                placeholder="Your message"
              />
              <button className="main max-[768px]:mx-auto block mt-6 hover:scale-105 transition-all duration-200 w-[248px] h-[48px] text-center bg-[#1b5bf7] text-white rounded-[8px]">
                <span className="text-[20px] font-[700] text-[#fff]">Send</span>
              </button>
            </form>
          </div>
          <div className="w-[48%] max-[768px]:w-full pt-20">
            <p className="flex gap-1 pb-5 items-center">
              <img src={location} alt="" />
              <span>
                Ташкент, Юнусабадский район, проспект Амира Темура, 129Б
              </span>
            </p>
            <p className="flex gap-1 items-center pb-5">
              <img src={tel} alt="" />
              <span>+998 88 765 07 14</span>
            </p>
            <p className="flex gap-1 items-center pb-5">
              <img src={sms} alt="" />
              <span>jafarxon06@gmail.com</span>
            </p>
            <p className="flex gap-1 items-center pb-5">
              <span className="block w-7 h-7">
                <Teligram />
              </span>
              <a
                href="https://t.me/saidumarov_006"
                className="text-blue-800 font-semibold"
              >
                t.me/saidumarov_006
              </a>
            </p>
            <div className="w-full max-[768px]:hidden flex items-center gap-4 ">
              <span className="block cursor-pointer w-7 h-7">
                <Youtube2 />
              </span>
              <span className="block cursor-pointer w-7 h-7">
                <Instagram2 />
              </span>
              <span className="block cursor-pointer w-7 h-7">
                <Fasebook />
              </span>
              <span className="block cursor-pointer w-7 h-7">
                <Twitter2 />
              </span>
            </div>
            <div className="w-[85%]  max-[768px]:hidden overflow-hidden rounded-md mt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.156311648024!2d69.33484177606674!3d41.34895607130485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8dbb8e1f0391%3A0xd04770323fe890a5!2sUdevs!5e0!3m2!1suz!2s!4v1721274945501!5m2!1suz!2s"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
