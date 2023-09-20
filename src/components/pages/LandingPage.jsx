import React, { useState, useEffect } from "react";
import AsideMenu from "../AsideMenu";
import SectionTitle from "../SectionTitle";
import CirLOderSet from "../CirLOderSet";
import WorkCard from "../WorkCard";

import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaCode,
  FaPaintBrush,
  FaDesktop,
  FaQuoteLeft,
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaPaperPlane,
  FaSun,
} from "react-icons/fa";
import { useRef } from "react";

function LandingPage() {
  const [themecolormenu, setThemecolormenu] = useState(false);
  const [aboutTab, setAboutTab] = useState(1);
  const [work, setWork] = useState("projects");

  // for theme color --------------------
  const [theme, setTheme] = useState({
    ThemTextColor: "text-[#ec1839]",
    ThemBGColor: "bg-[#ec1839]",
    ThemBorderColor:
      "after:border-[#ec1839] before:border-[#ec1839] border-[#ec1839]",
    ThemHoverText: "hover:text-[#ec1839]"
  });

  // for lite & dark mode ---------------
  const [liteMOde,setLiteMode] = useState(true)
  const [mode,setMode] = useState({
    ModeBgColor_900 : "bg-[#f2f2fc]",
    ModeBgColor_100 : "bg-[#fdf9ff]",
    ModeBgColor_50 : "bg-[#e8dfec]",
    ModeBgColor_50 : "bg-[#e8dfec]",
    ModeBorderColor_50 : "border-[#e8dfec]",
    ModeTextColor_900 : "text-[#302e4d]",
    ModeTextColor_700 : "text-[#504e70]"
  })

useEffect( () => {
  switch(liteMOde){
    case true : setMode({
      ModeBgColor_900 : "bg-[#f2f2fc] after:bg-[#f2f2fc] before:bg-[#f2f2fc]",
      ModeBgColor_100 : "bg-[#fdf9ff] after:bg-[#fdf9ff] before:bg-[#fdf9ff]",
      ModeBgColor_50 : "bg-[#e8dfec]  after:bg-[#e8dfec] before:bg-[#e8dfec]",
      ModeBorderColor_50 : "border-[#e8dfec]",
      ModeTextColor_900 : "text-[#302e4d]",
      ModeTextColor_700 : "text-[#504e70]"
    })
    break; 

    case false : setMode({
      ModeBgColor_900 : "bg-[#151515] after:bg-[#151515] before:bg-[#151515]",
      ModeBgColor_100 : "bg-[#222222] after:bg-[#222222] before:bg-[#222222]",
      ModeBgColor_50 : "bg-[#393939] after:bg-[#393939] before:bg-[#393939]",
      ModeBorderColor_50 : "border-[#393939]",
      ModeTextColor_900 : "text-[#ffffff]",
      ModeTextColor_700 : "text-[#e9e9e9]"
    })
    break
  }}, [liteMOde])


  const themeColor = (color) => {
    switch (color) {
      case "red":
        setTheme({
          ThemTextColor: "text-[#ec1839]",
          ThemBGColor: "bg-[#ec1839]",
          ThemBorderColor:
            "after:border-[#ec1839] before:border-[#ec1839] border-[#ec1839]",
                ThemHoverText: "hover:text-[#ec1839]"

        });
        break;

      case "orenge":
        setTheme({
          ThemTextColor: "text-[#fa5b0f]",
          ThemBGColor: "bg-[#fa5b0f]",
          ThemBorderColor:
            "after:border-[#fa5b0f] before:border-[#fa5b0f] border-[#fa5b0f]",
                ThemHoverText: "hover:text-[#fa5b0f]"

        });
        break;

      case "green":
        setTheme({
          ThemTextColor: "text-[#37b182]",
          ThemBGColor: "bg-[#37b182]",
          ThemBorderColor:
            "after:border-[#37b182] before:border-[#37b182] border-[#37b182]",
                ThemHoverText: "hover:text-[#37b182]"

        });
        break;

      case "blue":
        setTheme({
          ThemTextColor: "text-[#1854b4]",
          ThemBGColor: "bg-[#1854b4]",
          ThemBorderColor:
            "after:border-[#1854b4] before:border-[#1854b4] border-[#1854b4]",
                ThemHoverText: "hover:text-[#1854b4]"

        });
        break;
        case "pink":
        setTheme({
          ThemTextColor: "text-[#f021b2]",
          ThemBGColor: "bg-[#f021b2]",
          ThemBorderColor:
            "after:border-[#f021b2] before:border-[#f021b2] border-[#f021b2]",
                ThemHoverText: "hover:text-[#f021b2]"

        });
        break;


        
    }
  };

  let menuRef = useRef()
  useEffect(() => {
    let handler = (e) => {
      if(!menuRef .current.contains(e.target)){
        setThemecolormenu(false);
      }
    }
    document.addEventListener("mousedown",handler)

    return() => {
      document.removeEventListener("mousedown",handler)
    }
  })

  return (
    <div>
      <AsideMenu themeColor={theme} mode={mode} />
      <main>
        {/* ---------------- home section ----------------*/}
        <div className={`duration-500 transition-colors max-sm:snap-none snap-y snap-mandatory scroll-smooth overflow-y-scroll max-sm:left-0 absolute h-screen left-[19rem] top-0 right-0 ${mode.ModeTextColor_900} ${mode.ModeBgColor_900} `}>
          <section
            id="home"
            className="snap-start max-sm:h-[93.1vh] h-screen w-full flex justify-between flex-col py-[2rem] px-[3.5rem] max-sm:px-[2rem] "
          >
            <div ref={menuRef} className="fixed top-[6rem] right-[1.6rem] flex gap-[1.5rem] z-10 ">
            
              <div 
                className={` ${
                  themecolormenu ? "w-[16.5rem]" : "w-0 hidden"
                }  relative h-[6.2rem] mt-[4rem] py-[.7rem] px-[1rem] rounded-[.6rem] ${mode.ModeBgColor_100} before:content-[""] before:absolute
          before:h-[1.2rem] before:w-[1.2rem] before:-right-[.3rem] before:top-[.7rem] before:rounded-[.1rem] before:rotate-[45deg] shadow-sm shadow-black`}
              >
                <h2 className={`text-[1.1rem] ${mode.ModeTextColor_700}`}>Theme color</h2>

                <div className="mt-[.6rem] flex justify-between">
                  <div
                    onClick={() => themeColor("red")}
                    className=" h-[2.5rem] w-[2.5rem] rounded-full bg-[#ec1839]"
                  ></div>
                  <div
                    onClick={() => themeColor("orenge")}
                    className=" h-[2.5rem] w-[2.5rem] rounded-full bg-[#fa5b0f]"
                  ></div>
                  <div
                    onClick={() => themeColor("green")}
                    className=" h-[2.5rem] w-[2.5rem] rounded-full bg-[#37b182]"
                  ></div>
                  <div
                    onClick={() => themeColor("blue")}
                    className=" h-[2.5rem] w-[2.5rem] rounded-full bg-[#1854b4]"
                  ></div>
                  <div
                    onClick={() => themeColor("pink")}
                    className=" h-[2.5rem] w-[2.5rem] rounded-full bg-[#f021b2]"
                  ></div>
                </div>
              </div>
              <div className="flex flex-col gap-[1rem]">
              <div
                onClick={() => setLiteMode(!liteMOde) }
                className={`flex justify-center items-center h-[2.8rem] w-[2.8rem] rounded-full shadow-sm shadow-black ${mode.ModeBgColor_100}`}
              ><FaSun className={`${theme.ThemTextColor}`}/></div>
              <div
                onClick={() => setThemecolormenu(!themecolormenu) }
                className={`flex justify-center items-center h-[2.8rem] w-[2.8rem] rounded-full shadow-sm shadow-black ${mode.ModeBgColor_100}`}
              ><FaPaintBrush className={`${theme.ThemTextColor}`}/></div>
              
            </div>
            </div>
            

            <div className="flex items-center ">
              <h2 className="inline text-[20px] ">Follow me - </h2>
              <a
                href="#"
                className="ml-[.6rem] hover:translate-y-[-3px] transition-transform duration-300 "
              >
                <FaFacebookSquare className="inline text-[1.5rem]" />
              </a>
              <a
                href="#"
                className="ml-[.6rem] hover:translate-y-[-3px] transition-transform duration-300 "
              >
                <FaInstagram className="inline text-[1.5rem]" />
              </a>
              <a
                href="#"
                className="ml-[.6rem] hover:translate-y-[-3px] transition-transform duration-300 "
              >
                <FaTwitter className="inline text-[1.5rem]" />
              </a>
              <a
                href="#"
                className="ml-[.6rem] hover:translate-y-[-3px] transition-transform duration-300 "
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
                <span
                  id="typingText"
                  className={`typingText ${theme.ThemTextColor}`}
                >
                  Web Devloper
                </span>
              </h2>
              <p className={`mb-[4rem] text-[1.4rem] ${mode.ModeTextColor_700} font-normal w-[80%] max-sm:w-full`}>
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
                  href="#about"
                  className={`capitalize py-[.6rem] px-[2rem] text-[1.1rem] rounded-[3rem] font-medium ${theme.ThemBGColor} text-white `}
                >
                  about me
                </a>
              </div>
            </div>
            <div className="flex items-center gap-[2rem] " >
              <a href="#" className="flex items-center">
                <FaWhatsapp className=" text-[1.4rem]  inline mr-[.4rem] hover:translate-y-[-3px] transition-transform duration-300 " />
                <h2 className=" text-[1.4rem] ">Whatshapp</h2>
              </a>
              <a href="#" className="flex items-center ">
                <FaEnvelope className=" text-[1.4rem] inline mr-[.4rem] hover:translate-y-[-3px] transition-transform duration-300 " />
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
            <div className={`pr-[.8rem] py-[2rem] max-sm:border-0 border-r-[1.5px] ${mode.ModeBorderColor_50}`}>
              <ul className="mt-[1.4rem] max-sm:flex flex-wrap max-sm:justify-between">
                <li
                  onClick={() => setAboutTab(1)}
                  className={`${
                    aboutTab === 1 ? `${theme.ThemTextColor}` : ""
                  } mb-[1.4rem] block transition-colors duration-300 cursor-pointer`}
                >
                  <h2 className={`w-[11rem] text-[1.7rem] font-medium py-[.2rem] px-[.4rem] border-b-[1.5px]  ${mode.ModeBorderColor_50} flex`}>
                    Front End
                  </h2>
                </li>
                <li
                  onClick={() => setAboutTab(2)}
                  className={`${
                    aboutTab === 2 ? `${theme.ThemTextColor}` : ""
                  } mb-[1.4rem] block transition-colors duration-300 cursor-pointer`}
                >
                  <h2 className={`w-[11rem] text-[1.7rem] font-medium py-[.2rem] px-[.4rem] border-b-[1.5px]  ${mode.ModeBorderColor_50} flex`}>
                    Frameworks
                  </h2>
                </li>
                <li
                  onClick={() => setAboutTab(3)}
                  className={`${
                    aboutTab === 3 ? `${theme.ThemTextColor}` : ""
                  } mb-[1.4rem] block transition-colors duration-300 cursor-pointer`}
                >
                  <h2 className={`w-[11rem] text-[1.7rem] font-medium py-[.2rem] px-[.4rem] border-b-[1.5px]  ${mode.ModeBorderColor_50} flex`}>
                    Libraries
                  </h2>
                </li>
                <li
                  onClick={() => setAboutTab(4)}
                  className={`${
                    aboutTab === 4 ? `${theme.ThemTextColor}` : ""
                  } mb-[1.4rem] block transition-colors duration-300 cursor-pointer`}
                >
                  <h2 className={`w-[11rem] text-[1.7rem] font-medium py-[.2rem] px-[.4rem] border-b-[1.5px]  ${mode.ModeBorderColor_50} flex`}>
                    DataBase
                  </h2>
                </li>
                <li
                  onClick={() => setAboutTab(5)}
                  className={`${
                    aboutTab == +5 ? `${theme.ThemTextColor}` : ""
                  } mb-[1.4rem] block transition-colors duration-300 cursor-pointer`}
                >
                  <h2 className={`w-[11rem] text-[1.7rem] font-medium py-[.2rem] px-[.4rem] border-b-[1.5px]  ${mode.ModeBorderColor_50} flex`}>
                    Back End
                  </h2>
                </li>
              </ul>
            </div>
            <CirLOderSet tab={aboutTab} mode={mode}/>
          </div>

          {/* ---------------- service section ----------------*/}
          <section
            id="services"
            className=" snap-start max-sm:h-fit h-screen w-full flex justify-between flex-col py-[2rem] px-[3.5rem] max-sm:px-[2rem]"
          >
            <SectionTitle title={"services"} theme={theme} />

            <div className="relative max-sm:mt-[3rem] max-sm:h-fit h-full flex justify-center items-center  flex-col max-sm:gap-[3rem]">
              <h2 className={`absolute top-0 text-[2rem] font-bold ${theme.ThemTextColor} capitalize`}>
                What I offer
              </h2>

              <div className="flex gap-[2.5rem] max-sm:gap-[2.5rem] max-sm:flex-col max-sm:pt-[6rem] ">
                <div className={`h-[24rem] w-[22rem] ${mode.ModeBgColor_100} p-[2rem] rounded-[1rem] flex justify-between items-center flex-col border-[1px] ${mode.ModeBorderColor_50}`}>
                  <FaCode className={`text-[5rem] mt-[2rem] ${theme.ThemTextColor}`} />
                  <h2 className="text-[2rem] font-semibold">Web developer</h2>
                  <p className="text-[1.2rem] ">
                    I'm a skilled web developer specializing in creating
                    immersive online experiences. With a focus on responsive
                    design and excepti.
                  </p>
                </div>

                <div className={`h-[24rem] w-[22rem] ${mode.ModeBgColor_100} p-[2rem] rounded-[1rem] flex justify-between items-center flex-col border-[1px] ${mode.ModeBorderColor_50}`}>
                  <FaDesktop className={`text-[4rem] mt-[2rem] ${theme.ThemTextColor}`} />
                  <h2 className="text-[2rem] font-semibold">Web designe</h2>
                  <p className="text-[1.2rem] ">
                    I'm a skilled web developer specializing in creating
                    immersive online experiences. With a focus on responsive
                    design and excepti.
                  </p>
                </div>

                <div className={`h-[24rem] w-[22rem] ${mode.ModeBgColor_100} p-[2rem] rounded-[1rem] flex justify-between items-center flex-col border-[1px] ${mode.ModeBorderColor_50}`}>
                  <FaPaintBrush className={`text-[4rem] mt-[2rem] ${theme.ThemTextColor}`} />
                  <h2 className="text-[2rem] font-semibold">sketching</h2>
                  <p className="text-[1.2rem] ">
                    I'm a skilled web developer specializing in creating
                    immersive online experiences. With a focus on responsive
                    design and excepti.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ---------------- work section ----------------*/}

          <section
            id="work"
            className=" snap-start max-sm:h-fit h-screen w-full flex justify-between flex-col py-[2rem] px-[2.5rem] max-sm:px-[2rem]"
          >
            <div className="flex items-center justify-between pr-[2rem]">
              <SectionTitle title={"works"} theme={theme} />
              <div className="flex gap-[2rem] capitalize text-[1.4rem] font-medium ">
                <div
                  onClick={() => setWork("projects")}
                  className={`${
                    work === "projects" ? `${theme.ThemTextColor}` : ""
                  } hover:-translate-y-[2px] duration-300 cursor-pointer`}
                >
                  projects
                </div>
                <div
                  onClick={() => setWork("artworks")}
                  className={`${
                    work === "artworks" ? `${theme.ThemTextColor}` : ""
                  } hover:-translate-y-[2px] duration-300 cursor-pointer`}
                >
                  artworks
                </div>
              </div>
            </div>

            <div className="flex justify-start flex-wrap gap-[2rem] h-full w-full py-[2rem]">
              {/* add maximam 8 card */}
              <WorkCard
                title={"caffin"}
                image={"./images/work.jpg"}
                link={"https://github.com/DhrumitPanchal/caffeine-"}
                themeColor = {theme}
                mode ={mode}
              />
              <WorkCard
                title={"caffin"}
                image={"./images/work.jpg"}
                link={"https://github.com/DhrumitPanchal/caffeine-"}
                themeColor = {theme}
                mode ={mode}
              />
              <WorkCard
                title={"caffin"}
                image={"./images/work.jpg"}
                link={"https://github.com/DhrumitPanchal/caffeine-"}
                themeColor = {theme}
                mode ={mode}
              />
              <WorkCard
                title={"caffin"}
                image={"./images/work.jpg"}
                link={"https://github.com/DhrumitPanchal/caffeine-"}
                themeColor = {theme}
                mode ={mode}
              />
              <WorkCard
                title={"caffin"}
                image={"./images/work.jpg"}
                link={"https://github.com/DhrumitPanchal/caffeine-"}
                themeColor = {theme}
                mode ={mode}
              />
            </div>
          </section>

          {/* ---------------- testimonials ----------------*/}

          <section className=" snap-start max-sm:h-fit h-screen w-full flex justify-between flex-col py-[2rem] px-[2.5rem] max-sm:px-[2rem]">
            <div className="mt-[1rem] flex justify-center items-center flex-col ">
              <h4 className={`${theme.ThemTextColor} font-semibold leading-4`}>
                My Clients Say
              </h4>
              <h1 className="text-[2rem] font-bold">Testimonials</h1>
            </div>

            <div className="max-sm:mt-[2rem] relative h-full w-full flex justify-center items-center">
              <div className="h-full flex flex-col justify-center items-center gap-[1.6rem]">
                <div className={`flex flex-col justify-between gap-[1rem] h-[23rem] max-sm:h-fit w-[32rem] max-sm:w-[26rem] p-[2rem] ${mode.ModeBgColor_100} rounded-[.8rem] border-[1px] ${mode.ModeBorderColor_50} `}>
                  <h2 className={`text-[2.2rem] ${theme.ThemTextColor} `}>
                    <FaQuoteLeft />
                  </h2>
                  <div>
                    <p className="text-[1.1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem recusandae est accusantium sit sed optio maxime ea
                      repellendus necessitatibus ad! Distinctio cupiditate
                      impedit doloremque nihil deleniti recusandae quibusdam
                      blanditiis sunt?
                    </p>
                    <div className="mt-[.2rem] text-[1rem] font-semibold">
                      March 27,2020
                    </div>
                  </div>

                  <div className="flex gap-[1.5rem] items-center">
                    <div className="h-[4rem] w-[4rem] rounded-full bg-slate-300"></div>
                    <div className="text-[1rem]">
                      <h2 className="font-bold">Lee Doe</h2>
                      <h3>Director of a company</h3>
                    </div>
                  </div>
                </div>

                <div className="max-sm:hidden absolute flex justify-between items-center w-[60rem] -translate-y-[1rem] text-[1.5rem] text-[#fdf9ff]">
                  <div className={`flex justify-center items-center h-[2.8rem] w-[4.5rem] ${theme.ThemBGColor} rounded-[1.5rem] `}>
                    {" "}
                    <FaArrowLeft />{" "}
                  </div>
                  <div className={`flex justify-center items-center h-[2.8rem] w-[4.5rem] ${theme.ThemBGColor} rounded-[1.5rem] `}>
                    {" "}
                    <FaArrowRight />{" "}
                  </div>
                </div>

                <div className="flex gap-[.6rem]">
                  <div className={`h-[1rem] w-[1rem] rounded-full ${theme.ThemBGColor}`}></div>
                  <div className={`h-[1rem] w-[1rem] rounded-full border-[2px] ${theme.ThemBorderColor}`}></div>
                </div>
              </div>
            </div>
          </section>

          {/* -------------- contect section --------------- */}
          <section
            id="contect"
            className="snap-start max-sm:h-fit h-screen w-full flex justify-between flex-col py-[2rem] px-[3.5rem] max-sm:px-[2rem]"
          >
            <SectionTitle title={"contect"} theme={theme} />

            <div className="max-sm:mt-[2rem] h-full w-full flex justify-center flex-col items-center gap-[4rem]">
              <div className="flex justify-center flex-col items-center gap-[.1rem]">
                <h2 className={`text-[2rem] ${theme.ThemTextColor} font-bold capitalize `}>
                  Have You Any Qestions?
                </h2>
                <h4 className="text-[1.3rem] font-semibold">
                  I'M AT YOUR SERVICE
                </h4>
              </div>

              <div className="mb-[4rem] flex justify-between items-center  gap-[6rem] max-sm:gap-[3rem] max-sm:justify-center text-[3rem] flex-wrap">
                <a className={`cursor-pointer flex justify-center items-center flex-col gap-[.2rem] h-[8rem] w-[8rem] ${mode.ModeBgColor_100} rounded-[1rem] border-[1px] ${mode.ModeBorderColor_50} ${theme.ThemHoverText} duration-300 transition-colors `}>
                  {" "}
                  <FaInstagram className="" />{" "}
                  <h2 className="text-[1rem] font-medium">instagram</h2>{" "}
                </a>
                <a className={`cursor-pointer flex justify-center items-center flex-col gap-[.2rem] h-[8rem] w-[8rem] ${mode.ModeBgColor_100} rounded-[1rem] border-[1px] ${mode.ModeBorderColor_50} ${theme.ThemHoverText} duration-300 transition-colors `}>
                  {" "}
                  <FaGithub className="" />{" "}
                  <h2 className="text-[1rem] font-medium">github</h2>{" "}
                </a>
                <a className={`cursor-pointer flex justify-center items-center flex-col gap-[.2rem] h-[8rem] w-[8rem] ${mode.ModeBgColor_100} rounded-[1rem] border-[1px] ${mode.ModeBorderColor_50} ${theme.ThemHoverText} duration-300 transition-colors `}>
                  {" "}
                  <FaLinkedinIn className="" />{" "}
                  <h2 className="text-[1rem] font-medium">linkdin</h2>{" "}
                </a>
                <a className={`cursor-pointer flex justify-center items-center flex-col gap-[.2rem] h-[8rem] w-[8rem] ${mode.ModeBgColor_100} rounded-[1rem] border-[1px] ${mode.ModeBorderColor_50} ${theme.ThemHoverText} duration-300 transition-colors `}>
                  {" "}
                  <FaEnvelope className="" />{" "}
                  <h2 className="text-[1rem] font-medium">email</h2>{" "}
                </a>
              </div>
            </div>
          </section>

          {/* -------------- contect section page 2 --------------- */}

          <section
            id="contect"
            className="snap-start max-sm:h-fit h-screen w-full flex justify-center gap-[6rem] flex-col py-[2rem] px-[3.5rem] max-sm:px-[2rem]"
          >
            <div className="flex justify-center flex-col items-center gap-[.1rem]">
              <h2 className={`text-[2.2rem] ${theme.ThemTextColor} font-bold capitalize `}>
                SEND ME AN MESSAGES
              </h2>
              <h4 className="text-[1.3rem] font-semibold">
                I’M VERY RESPONSIVE TO MESSAGES
              </h4>
            </div>

            <div>
              <form
                action=""
                className="flex flex-col gap-[1rem] px-[2rem] max-sm:px-0"
              >
                <div className="flex max-sm:flex-col w-full gap-[1.5rem] max-sm:gap-[1rem]">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className={`h-[3.2rem] w-full px-[1rem] rounded-[.5rem] border-[1px] ${mode.ModeBgColor_100} ${mode.ModeBorderColor_50}`}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className={`h-[3.2rem] w-full px-[1rem] rounded-[.5rem] border-[1px] ${mode.ModeBgColor_100} ${mode.ModeBorderColor_50}`}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className={`h-[3.2rem] w-full px-[1rem] rounded-[.5rem] border-[1px] ${mode.ModeBgColor_100} ${mode.ModeBorderColor_50}`}
                />
                <textarea
                  name="Message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  required
                  className={`h-[9rem] w-full p-[1rem] rounded-[1rem] border-[1px] ${mode.ModeBgColor_100} ${mode.ModeBorderColor_50}`}
                />
                {/* <input type="submit" className="w-[12rem] h-[3.2rem] capitalize text-[1.1rem] rounded-[1rem] font-medium bg-[#ec1839] text-white"/> */}
                <button
                  type="submit"
                  className={`mt-[1rem] flex justify-center items-center gap-[1rem] w-[12rem] h-[3.2rem] capitalize text-[1.1rem] rounded-[1rem] font-medium ${theme.ThemBGColor}  text-[#fdf9ff] `}
                >
                  <FaPaperPlane className="text-[1.5rem]" />
                  Send Message
                </button>
              </form>
            </div>
          </section>

          {/* -----------end----------- */}
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
