import React, { useState,useEffect } from "react";
import {
  FaHome,
  FaUserAlt,
  FaListUl,
  FaBriefcase,
  FaComments,
  FaBars,
  FaTimes,
} from "react-icons/fa";
function AsideMenu(props) {
  const [activeSection, setActiveSection] = useState("home");
  const [menuopen, setMenuopen] = useState(false);
  const themeColor = props.themeColor
  
  return (
    <aside
      className={` ${
        menuopen ? "max-sm:left-0" : "max-sm:-left-[23.5rem]"
      } max-sm:w-[23.5rem] transition-all duration-500 fixed z-50 flex justify-center items-center flex-col top-0 left-0 h-screen w-[19rem] p-[9rem] bg-[#fdf9ff] text-[#302e4d] border-[1px] border-[#e8dfec]`}
    >
      <div className="logo absolute top-[3.8rem] capitalize ">
        <a
          href="#"
          className={`relative font-[700] py-[1.2rem] px-[1.4rem] text-[2.2rem] tracking-[.2rem] 
      before:content-[""] before:absolute before:w-[1.6rem] before:h-[1.6rem] before:border-b-[.4rem] before:border-l-[.4rem] after:border-[#ec1839] before:border-[#ec1839] before:bottom-0 before:left-0 
      after:content-[""] after:absolute after:w-[1.6rem] after:h-[1.6rem] after:border-t-[.4rem] after:border-r-[.4rem]  after:top-0 after:right-0`}
        >
          <span className="text-[2.5rem]">D</span>hrumit
        </a>
      </div>
      <div
        onClick={() => setMenuopen(!menuopen)}
        className="h-[3rem] w-[3.2rem] border-[1px] border-[#e8dfec] cursor-pointer fixed right-[1.5rem] top-[1.5rem] rounded-[.5rem] bg-[#fdf9ff] max-sm:flex justify-center items-center hidden "
      >
        {menuopen ? (
          <FaTimes
            className={`text-[1.5rem] ${themeColor.ThemTextColor}`}
            style={{ transition: ".5s" }}
          />
        ) : (
          <FaBars
            className={`text-[1.5rem] ${themeColor.ThemTextColor}`}
            style={{ transition: ".5s" }}
          />
        )}
      </div>
      <ul className="mt-[3.7rem]">
        <li
          className={`mb-[1.4rem] block transition-colors duration-300 ${
            activeSection === "home" ? "text-[#ec1839]" : " "
          }`}
          
        >
          <a
            href="#home"
            onClick={() => {
              setMenuopen(!menuopen);
              setActiveSection("home");
            }}
            className="text-[1.2rem] font-[600] py-[.4rem] px-[1.2rem] border-b-[1px] border-[#e8dfec] flex items-center"
          >
            <FaHome className="inline mr-[1.1rem] " />
            Home
          </a>
        </li>
        <li
          className={`mb-[1.4rem] block transition-colors duration-300 ${
            activeSection === "about" ? "text-[#ec1839]" : " "
          }`}
        >
          <a
            href="#about"
            onClick={() => {
              setMenuopen(!menuopen);
              setActiveSection("about");
            }}
            className="text-[1.2rem] font-[600] py-[.4rem] px-[1.2rem] border-b-[1px] border-[#e8dfec] flex items-center"
          >
            <FaUserAlt className="inline mr-[1.1rem] " />
            About
          </a>
        </li>
        <li
          className={`mb-[1.4rem] block transition-colors duration-300 ${
            activeSection === "services" ? "text-[#ec1839]" : " "
          }`}
        >
          <a
            href="#services"
            onClick={() => {
              setMenuopen(!menuopen);
              setActiveSection("services");
            }}
            className="text-[1.2rem] font-[600] py-[.4rem] px-[1.2rem] border-b-[1px] border-[#e8dfec] flex items-center"
          >
            <FaListUl className="inline mr-[1.1rem] " />
            Services
          </a>
        </li>
        <li
          className={`mb-[1.4rem] block transition-colors duration-300 ${
            activeSection === "work" ? "text-[#ec1839]" : " "
          }`}
        >
          <a
            href="#"
            onClick={() => {
              setMenuopen(!menuopen);
              setActiveSection("work");
            }}
            className="text-[1.2rem] font-[600] py-[.4rem] px-[1.2rem] border-b-[1px] border-[#e8dfec] flex items-center"
          >
            <FaBriefcase className="inline mr-[1.1rem] " />
            Work
          </a>
        </li>
        <li
          className={`mb-[1.4rem] block transition-colors duration-300 ${
            activeSection === "contect" ? "text-[#ec1839]" : " "
          }`}
        >
          <a
            href="#"
            onClick={() => {
              setMenuopen(!menuopen);
              setActiveSection("contect");
            }}
            className="text-[1.2rem] font-[600] py-[.4rem] px-[1.2rem] border-b-[1px] border-[#e8dfec] flex items-center"
          >
            <FaComments className="inline mr-[1.1rem] " />
            Contect
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default AsideMenu;
