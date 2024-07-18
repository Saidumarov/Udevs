import React from "react";
import logo from "../assets/svg/logo.svg";
import { Instagram, X, Youtube } from "../constants";
const Footer = () => {
  return (
    <footer className="w-full bg-[#f4f7ff] h-full">
      <div className="pb-10">
        <img className="w-[106px] mx-auto pt-16" src={logo} alt="Logo" />
      </div>
      <div className="container flex justify-between max-[768px]:flex-wrap">
        <div className="w-auto max-[768px]:w-full max-[768px]:mt-5 ">
          <h3 className="text-[1.2rem] text-[#313133] pb-2 font-[600]">
            About us
          </h3>
          <a
            className="flex items-center justify-start  text-[18px] leading-8 text-[#1b5bf7] hover:underline"
            href=""
          >
            Direction
          </a>
          <a
            className="flex items-center justify-start  text-[18px] leading-8 text-[#1b5bf7] hover:underline"
            href=""
          >
            Command
          </a>
          <a
            className="flex items-center justify-start  text-[18px] leading-8 text-[#1b5bf7] hover:underline"
            href=""
          >
            Tools
          </a>
          <a
            className="flex items-center justify-start  text-[18px] leading-8 text-[#1b5bf7] hover:underline"
            href=""
          >
            Clients
          </a>
        </div>
        <div className="w-auto max-[768px]:w-full max-[768px]:mt-5">
          <h3 className="text-[1.2rem] text-[#313133] pb-2 font-[600]">
            Services
          </h3>
          <a
            className="flex items-center justify-start  text-[18px] leading-8 text-[#1b5bf7] hover:underline"
            href=""
          >
            Development of mobile applications
          </a>
          <a
            className="flex items-center justify-start  text-[18px] leading-8 text-[#1b5bf7] hover:underline"
            href=""
          >
            Development and implementation ERP systems
          </a>
          <a
            className="flex items-center justify-start  text-[18px] leading-8 text-[#1b5bf7] hover:underline"
            href=""
          >
            User interface, User experience design
          </a>
          <a
            className="flex items-center justify-start  text-[18px] leading-8 text-[#1b5bf7] hover:underline"
            href=""
          >
            IT consulting
          </a>
          <a
            className="flex items-center justify-start  text-[18px] leading-8 text-[#1b5bf7] hover:underline"
            href=""
          >
            Optimization IT consulting infrastructure
          </a>
        </div>
        <div className="w-auto max-[768px]:w-full max-[768px]:mt-5">
          <h3 className="text-[1.2rem] text-[#313133] pb-2 font-[600]">
            Portfolio
          </h3>
          <a
            className="flex items-center justify-start  text-[18px] leading-8 text-[#1b5bf7] hover:underline"
            href=""
          >
            Delever{" "}
          </a>
          <a
            className="flex items-center justify-start  text-[18px] leading-8 text-[#1b5bf7] hover:underline"
            href=""
          >
            Sms.uz
          </a>
          <a
            className="flex items-center justify-start  text-[18px] leading-8 text-[#1b5bf7] hover:underline"
            href=""
          >
            Goodzone
          </a>
          <a
            className="flex items-center justify-start  text-[18px] leading-8 text-[#1b5bf7] hover:underline"
            href=""
          >
            Iman
          </a>
        </div>
      </div>
      <div className="container pt-5">
        <hr />
      </div>
      <div className=" max-[768px]:flex-wrap-reverse max-[768px]:justify-center container flex justify-between items-center pt-4 pb-7  ">
        <p className="text-[#1b5bf7]  max-[768px]:pt-2 max-[768px]:w-full max-[768px]:text-center">
          © 2024 Udevs. All rights reserved
        </p>
        <div className="flex gap-5  items-center">
          <span className="w-10 h-10  rounded-full bg-[#bbcdfa] cursor-pointer p-2 ">
            <Instagram />
          </span>
          <span className="w-10 h-10  rounded-full bg-[#bbcdfa] cursor-pointer p-2 ">
            <X />
          </span>
          <span className="w-10 h-10  rounded-full bg-[#bbcdfa] cursor-pointer p-2 ">
            <Youtube />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
