import React, { useEffect, useState } from "react";
import logo from "../assets/svg/logo.svg";
import { Navbar } from "../db";
import { Link } from "react-router-dom";
import { Close, Instagram, Menu, X, Youtube } from "../constants";
const Header = () => {
  const [activeSection, setActiveSection] = useState("Direction");
  const [active, setAactive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 1400) {
        setActiveSection("Direction");
      } else if (scrollY < 2200) {
        setActiveSection("Command");
      } else {
        setActiveSection("Services");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className="w-full border-b fixed bg-white shadow-sm h-[72px] z-40">
        <div className="container h-full px-2 md:px-3 sm:px-4 bg-white ">
          <nav className="flex items-center justify-between h-full">
            <Link to={"/"}>
              <img className="w-[92px] m-0" src={logo} alt="Logo" />
            </Link>
            <ul className="flex items-center m-0 p-0 list-none max-[900px]:hidden">
              {Navbar.map((el, i) => (
                <li
                  className={`${
                    el.title === "Services" ||
                    el.title === "Portfolio" ||
                    el.title === "Language"
                      ? "nav-li"
                      : ""
                  } relative mr-[32px] mb-0`}
                  key={i}
                >
                  <a
                    className={`${
                      activeSection === el.title
                        ? "border-[#1b5bf7]"
                        : "border-transparent "
                    } block leading-[20px] py-[10px] ${
                      el.title !== "Language" && "hover:border-[#1b5bf7]"
                    } transition-all flex items-center gap-1 duration-200 px-0 text-[14px] font-[700] text-[#18191f] border-b-2 rounded-sm `}
                    href="#"
                  >
                    {el.title}
                    {el?.icon ? <img src={el?.icon} alt="svg" /> : <></>}
                  </a>

                  <ul
                    className={`pb-4 hidden border-t-[0.1px]  absolute ${
                      el.title === "Language" ? "w-[120px]" : "w-[300px]"
                    } border bordser bg-white ${
                      el.title === "Language" ? " ml-[-8px] " : "ml-[-100px]"
                    } shadow-sm  rounded-md `}
                  >
                    <p
                      className={`block font-[700] text-[#9e9e9e] space-1 text-sm ${
                        el.title === "Language"
                          ? "px-6 py-0  pt-5"
                          : "px-6 py-0 mb-5 pt-5"
                      }`}
                    >
                      {el.title !== "Language" ? el.title : ""}
                    </p>
                    {el?.category?.map((c, i) => (
                      <li
                        key={i}
                        className={`block ${
                          el.title === "Language" ? " px-2" : " px-6"
                        } mb-2 hover:bg-[#1b5bf7] hover:text-white transition-all duration-200`}
                      >
                        <a
                          href="services"
                          className="flex items-center w-full py-2 pl-3 "
                        >
                          <img
                            className={` ${
                              el.title === "Language"
                                ? "w-8 h-8 mr-2"
                                : "w-12 h-12 mr-4"
                            }  `}
                            src={c?.img}
                            alt="svg"
                          />
                          <span
                            className={`text-[13px] leading-snug ${
                              el.title === "Language" &&
                              "text-[16px] font-[500] "
                            } `}
                          >
                            {c.title}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <button className=" hover:scale-105 transition-all duration-200 w-[112px] h-[40px] text-center bg-[#1b5bf7] text-white rounded-[8px]">
                <a href="#" className="text-[14px] font-[700] text-[#fff]">
                  Contact
                </a>
              </button>
            </ul>
            <button
              onClick={() => setAactive(true)}
              className="max-[900px]:block hidden w-[30px] h-[30px] cursor-pointer"
            >
              <Menu />
            </button>
            <div
              className={` ${
                active ? "right-0" : "right-[-100%]"
              } h-screen w-full transition-all duration-300 top-0 right-0 z-50 bg-[#f4f7ff] fixed max-[900px]:block hidden`}
            >
              <div className="container flex h-[72px] items-center  justify-between">
                <Link to={"/"}>
                  <img className="w-[92px] m-0" src={logo} alt="Logo" />
                </Link>
                <button
                  onClick={() => setAactive(false)}
                  className="max-[900px]:block hidden w-[30px] h-[30px] cursor-pointer"
                >
                  <Close />
                </button>
              </div>
              <div className="text-center  pt-[31%] h-full">
                <ul>
                  <li className=" text-[32px] font-[600]  text-[#18191f] leading-[54px] ">
                    <a href="">Services</a>
                  </li>
                  <li className=" text-[32px] font-[600]  text-[#18191f] leading-[54px] ">
                    <a href="">Clients</a>
                  </li>
                  <li className=" text-[32px] font-[600]  text-[#18191f] leading-[54px] ">
                    <a href="">Command</a>
                  </li>
                </ul>
                <button className="text-[20px] mt-[35%] font-[700] py-3 px-4  hover:scale-105 transition-all duration-200 w-[96%] text-center bg-[#1b5bf7] text-white rounded-[8px]">
                  Contact
                </button>
                <div className="flex gap-5 mt-8 justify-center  items-center">
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
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
