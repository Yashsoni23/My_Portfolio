import React, { useState, useRef } from "react";
import AsideMenu from "./AsideMenu";
import SectionTitle from "./SectionTitle";
import CirLOderSet from "./CirLOderSet";

import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";

function LandingPage() {
  const [themecolormenu, setThemecolormenu] = useState(false);

  const [theme, settheme] = useState({
    ThemTextColor: "text-[#ec1839]",
    ThemBGColor: "bg-[#ec1839]",
    ThemBorderColor:
      "after:border-[#ec1839] before:border-[#ec1839] border-[#ec1839]",
  });

  const [aboutTab, setAboutTab] = useState(1);

  const setthimecolor = (color) => {
    settheme({
      ThemTextColor: `text-[${color}]`,
      ThemBGColor: `bg-[${color}]`,
      ThemBorderColor: `after:border-[${color}] before:border-[${color}] border-[${color}]`,
    });
  };

  return (
    <div>
      <AsideMenu themeColor={theme} />
      <main>
      
        {/* ---------------- home section ----------------*/}
        <div className="max-sm:snap-none snap-y snap-mandatory scroll-smooth overflow-y-scroll max-sm:left-0 absolute h-screen left-[19rem] top-0 right-0  text-[#302e4d] bg-[#f2f2fc] ">
          <section
            id="home"
            className="snap-start max-sm:h-[93.1vh] h-screen w-full flex justify-between flex-col py-[2rem] px-[3.5rem] max-sm:px-[2rem] "
          >
            <div className="fixed top-[6rem] right-[2rem] flex gap-[1.5rem] z-10">
              <div
                className={` ${
                  themecolormenu ? "w-[14rem]" : "w-0 hidden"
                }  relative h-[6.2rem] py-[.7rem] px-[1rem] rounded-[.6rem] bg-[#fdf9ff] before:content-[""] before:absolute
          before:h-[1.2rem] before:w-[1.2rem] before:-right-[.3rem] before:top-[.7rem] before:rounded-[.1rem] before:rotate-[45deg] before:bg-[#fdf9ff]  shadow-sm shadow-black`}
              >
                <h2 className="text-[1.1rem]">Theme color</h2>

                <div className="mt-[.6rem] flex justify-between">
                  <div
                    onClick={() => setthimecolor("#ec1839")}
                    className=" h-[2.5rem] w-[2.5rem] rounded-full bg-[#ec1839]"
                  ></div>
                  <div
                    onClick={() => setthimecolor("#ffa500")}
                    className=" h-[2.5rem] w-[2.5rem] rounded-full bg-[#ffa500]"
                  ></div>
                  <div
                    onClick={() => setthimecolor("#01a368")}
                    className=" h-[2.5rem] w-[2.5rem] rounded-full bg-[#01a368]"
                  ></div>
                  <div
                    onClick={() => setthimecolor("#0000ff")}
                    className=" h-[2.5rem] w-[2.5rem] rounded-full bg-[#0000ff]"
                  ></div>
                </div>
              </div>
              <div
                onClick={() => setThemecolormenu(!themecolormenu)}
                className=" h-[2.5rem] w-[2.5rem] rounded-full shadow-sm shadow-black bg-[#fdf9ff]"
              ></div>
            </div>

            <div className="flex items-center ">
              <h2 className="inline text-[20px] ">Follow me - </h2>
              <a
                href="#"
                className="ml-[.6rem] hover:translate-y-[-3px] transition duration-300 "
              >
                <FaFacebookSquare className="inline text-[1.5rem]" />
              </a>
              <a
                href="#"
                className="ml-[.6rem] hover:translate-y-[-3px] transition duration-300 "
              >
                <FaInstagram className="inline text-[1.5rem]" />
              </a>
              <a
                href="#"
                className="ml-[.6rem] hover:translate-y-[-3px] transition duration-300 "
              >
                <FaTwitter className="inline text-[1.5rem]" />
              </a>
              <a
                href="#"
                className="ml-[.6rem] hover:translate-y-[-3px] transition duration-300 "
              >
                <FaLinkedinIn className="inline text-[1.5rem]" />
              </a>
            </div>
            <div className="home-info flex justify-between flex-col text-[2.1rem] font-extrabold">
              <h3 className="capitalize ">hello!</h3>
              <h3>
                my name is{" "}
                <span
                  className={`capitalize text-[2.2rem] font-[700] ${theme.ThemTextColor}`}
                >
                  dhrumit panchal
                </span>
              </h3>
              <h2>
                I'm a{" "}
                <span className={`${theme.ThemTextColor}`}>Web Developer</span>
              </h2>
              <p className="mb-[4rem] text-[1.4rem] text-[#504e70] font-normal w-[80%] max-sm:w-full">
                I’m a web developer and i love develop next generation products.
                My expertise is to create a good user experience and mobile
                friendly websites.
              </p>
              <div className="flex gap-[2rem]">
                <a
                  href="#"
                  className={`capitalize py-[.6rem] px-[2rem] text-[1.1rem] rounded-[3rem] font-medium ${theme.ThemBGColor} text-white `}
                >
                  resume
                </a>
                <a
                  href="#"
                  className={`capitalize py-[.6rem] px-[2rem] text-[1.1rem] rounded-[3rem] font-medium ${theme.ThemBGColor} text-white `}
                >
                  about me
                </a>
              </div>
            </div>
            <div className="flex items-center gap-[2rem]">
              <a href="#" className="flex items-center">
                <FaWhatsapp className=" text-[1.4rem]  inline mr-[.4rem] hover:translate-y-[-3px] transition duration-300 " />
                <h2 className=" text-[1.4rem] ">Whatshapp</h2>
              </a>
              <a href="#" className="flex items-center ">
                <FaEnvelope className=" text-[1.4rem] inline mr-[.4rem] hover:translate-y-[-3px] transition duration-300 " />
                <h2 className=" text-[1.4rem] ">Email</h2>
              </a>
            </div>
          </section>

          {/* ---------------- about section ----------------*/}
          <section
            id="about"
            className=" snap-start relative max-sm:h-fit h-screen w-full flex justify-between flex-col py-[2rem] px-[3.5rem] max-sm:px-[2rem]"
          >
            <SectionTitle title={"About Me"} theme={theme} />

            <div className="max-sm:mt-[3rem] h-full flex justify-between items-center max-sm:flex-col max-sm:gap-[3rem]">
              <div className="h-[25rem] ">
                <img
                  src="./images/dhrumit-compresed.jpg"
                  className="h-full w-full"
                />
              </div>

              <div className="max-sm:mr-0 basis-[60%] mr-[2rem] flex justify-between gap-[2rem] flex-col max-sm:text-center">
                <h2 className="text-[2.1rem] font-bold">
                  I’m{" "}
                  <span className={`${theme.ThemTextColor}`}>
                    Dhrumit Panchal
                  </span>{" "}
                  a Web Developer , <br className="max-sm:hidden" />
                  web Designer and Sketch Artist.
                </h2>
                <p className="text-[1.3rem]">
                  I'm a skilled web developer specializing in creating immersive
                  online experiences. With a focus on responsive design and
                  exceptional user interactions, I craft websites that captivate
                  and engage. My proficiency extends to UI/UX design tools like
                  Figma, enhancing my ability to design interactive interfaces.
                  Beyond coding, I'm also a gifted sketch artist, infusing my
                  creations with a unique visual flair. With a passion for both
                  development and design, I bring a holistic approach to every
                  project, ensuring a seamless fusion of functionality and
                  aesthetics.
                </p>
              </div>
            </div>
          </section>

          {/* ---------------- about section (page 2) ----------------*/}
          <div className="snap-start max-sm:h-fit h-screen w-full flex justify-between items-center max-sm:flex-col gap-[8rem] max-sm:gap-[0rem] py-[2rem] px-[3.5rem] max-sm:px-[2rem]">
            <div className="pr-[.8rem] py-[2rem] max-sm:border-0 border-r-[1.5px] border-[#302e4d]">
              <ul className="mt-[1.4rem] max-sm:flex flex-wrap max-sm:justify-between">
                <li
                  onClick={() => setAboutTab(1)}
                  className={`${
                    aboutTab == 1 ? "text-[#ec1839]" : ""
                  } mb-[1.4rem] block transition-colors duration-300 cursor-pointer`}
                >
                  <h2 className="w-[11rem] text-[1.7rem] font-medium py-[.2rem] px-[.4rem] border-b-[1.5px] border-[#302e4d] flex">
                    Front End
                  </h2>
                </li>
                <li
                  onClick={() => setAboutTab(2)}
                  className={`${
                    aboutTab == 2 ? "text-[#ec1839]" : ""
                  } mb-[1.4rem] block transition-colors duration-300 cursor-pointer`}
                >
                  <h2 className="w-[11rem] text-[1.7rem] font-medium py-[.2rem] px-[.4rem] border-b-[1.5px] border-[#302e4d] flex">
                    Frameworks
                  </h2>
                </li>
                <li
                  onClick={() => setAboutTab(3)}
                  className={`${
                    aboutTab == 3 ? "text-[#ec1839]" : ""
                  } mb-[1.4rem] block transition-colors duration-300 cursor-pointer`}
                >
                  <h2 className="w-[11rem] text-[1.7rem] font-medium py-[.2rem] px-[.4rem] border-b-[1.5px] border-[#302e4d] flex">
                    Libraries
                  </h2>
                </li>
                <li
                  onClick={() => setAboutTab(4)}
                  className={`${
                    aboutTab == 4 ? "text-[#ec1839]" : ""
                  } mb-[1.4rem] block transition-colors duration-300 cursor-pointer`}
                >
                  <h2 className="w-[11rem] text-[1.7rem] font-medium py-[.2rem] px-[.4rem] border-b-[1.5px] border-[#302e4d] flex">
                    DataBase
                  </h2>
                </li>
                <li
                  onClick={() => setAboutTab(5)}
                  className={`${
                    aboutTab == 5 ? "text-[#ec1839]" : ""
                  } mb-[1.4rem] block transition-colors duration-300 cursor-pointer`}
                >
                  <h2 className="w-[11rem] text-[1.7rem] font-medium py-[.2rem] px-[.4rem] border-b-[1.5px] border-[#302e4d] flex">
                    Back End
                  </h2>
                </li>
              </ul>
            </div>
            <CirLOderSet tab={aboutTab} />
          </div>

          {/* ---------------- service section ----------------*/}
          <section
            id="services"
            className="snap-start max-sm:h-fit h-screen w-full flex justify-between flex-col py-[2rem] px-[3.5rem] max-sm:px-[2rem]"
          >
            <SectionTitle title={"services"} theme={theme} />

            <div className="relative max-sm:mt-[3rem] max-sm:h-fit h-full flex justify-center items-center  flex-col max-sm:gap-[3rem]">
              <h2 className="absolute top-0 text-[2rem] font-bold text-[#ec1839] capitalize">
                What I offer
              </h2>

              <div className="flex gap-[5rem] max-sm:gap-[2.5rem] max-sm:flex-col max-sm:pt-[6rem]">
                <div className="h-[25rem] w-[26rem] bg-[#fdf9ff] p-[2rem] rounded-[1rem] flex justify-between items-center flex-col border-[1px] border-[#e8dfec]">
                  <FaCode className="text-[5rem] mt-[2rem] text-[#ec1839]" />
                  <h2 className="text-[2rem] font-semibold">Web development</h2>
                  <p className="text-[1.2rem] ">
                    I'm a skilled web developer specializing in creating
                    immersive online experiences. With a focus on responsive
                    design and excepti.
                  </p>
                </div>

                <div className="h-[25rem] w-[26rem] bg-[#fdf9ff] p-[2rem] rounded-[1rem] flex justify-between items-center flex-col border-[1px] border-[#e8dfec]">
                  <FaCode className="text-[5rem] mt-[2rem] text-[#ec1839]" />
                  <h2 className="text-[2rem] font-semibold">Web designe</h2>
                  <p className="text-[1.2rem] ">
                    I'm a skilled web developer specializing in creating
                    immersive online experiences. With a focus on responsive
                    design and excepti.
                  </p>
                </div>
              </div>
            </div>
          </section>




        </div>
      </main>
    </div>
  );
}

export default LandingPage;
