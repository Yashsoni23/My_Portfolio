import React, { useState } from "react";
import CirculerLoder from "./CirculerLoder";

function CirLOderSet(props) {
  const tab = props.tab;

  if (tab == 1) {
    return (
      <div className="max-sm:w-full max-sm:h-fit h-[40rem] w-[45rem] py-[2rem] mr-[6rem] max-sm:mr-0 flex justify-between max-sm:justify-center items-center flex-col gap-[5rem] max-sm:gap-[3rem] ">
        <div className=" w-full flex justify-between max-sm:justify-center max-sm:items-center max-sm:flex-col max-sm:gap-[3rem]">
          <CirculerLoder
            color={"#E44D26"}
            seccolor={"bg-[#F16529]"}
            per={90}
            img={"./images/html-5.png"}
            h={"h-[5rem]"}
          />
          <CirculerLoder
            color={"#264DE4"}
            seccolor={"bg-[#2965F1]"}
            per={85}
            img={"./images/css-3.png"}
            h={"h-[5rem]"}
          />
        </div>
        <CirculerLoder
          color={"#E4A126"}
          seccolor={"bg-[#E4A126]"}
          per={80}
          img={"./images/javascript.png"}
          h={"h-[5rem]"}
        />
      </div>
    );
  }

  if (tab == 2) {
    return (
      <div className="max-sm:w-full max-sm:h-fit h-[40rem] w-[45rem] py-[2rem] mr-[6rem] max-sm:mr-0 flex justify-between max-sm:justify-center items-center flex-col gap-[5rem] max-sm:gap-[3rem] ">
        <div className="w-full flex justify-between max-sm:justify-center max-sm:items-center max-sm:flex-col max-sm:gap-[3rem]">
          <CirculerLoder
            color={"#7110F5"}
            seccolor={"bg-[#7110F5]"}
            per={90}
            img={"./images/boostrap.png"}
            h={"h-[5rem]"}
          />
          <CirculerLoder
            color={"#38BDF8"}
            seccolor={"bg-[#38BDF8]"}
            per={90}
            img={"./images/tailwind.png"}
            h={"h-[4rem]"}
          />
        </div>
        <CirculerLoder
          color={"#5C2D91"}
          seccolor={"bg-[#6D429C]"}
          per={80}
          img={"./images/dotnet.png"}
          h={"h-[5rem]"}
        />
      </div>
    );
  }

  if (tab == 3) {
    return (
      <div className="max-sm:w-full max-sm:h-fit h-[40rem] w-[45rem] py-[2rem] mr-[6rem] max-sm:mr-0 flex justify-between max-sm:justify-center items-center flex-col gap-[5rem] max-sm:gap-[3rem] ">
        <div className="w-full flex justify-between max-sm:justify-center max-sm:items-center max-sm:flex-col max-sm:gap-[3rem]">
          <CirculerLoder
            color={"#00D8FF"}
            seccolor={"bg-[#00D8FF]"}
            per={75}
            img={"./images/react.png"}
            h={"h-[5rem]"}
          />
          <CirculerLoder
            color={"#1169AE"}
            seccolor={"bg-[#1169AE]"}
            per={70}
            img={"./images/jquery.png"}
            h={"h-[5rem]"}
          />
        </div>
        <CirculerLoder
          color={"#689F63"}
          seccolor={"bg-[#689F63]"}
          per={85}
          img={"./images/nodejs.png"}
          h={"h-[3rem]"}
        />
      </div>
    );
  }

  if (tab == 4) {
    return (
      <div className="max-sm:w-full max-sm:h-fit h-[40rem] w-[45rem] py-[2rem] mr-[6rem] max-sm:mr-0 flex justify-between max-sm:justify-center items-center flex-col gap-[5rem] max-sm:gap-[3rem] ">
        <div className="w-full flex justify-between max-sm:justify-center max-sm:items-center max-sm:flex-col max-sm:gap-[3rem]">
          <CirculerLoder
            color={"#EE0004"}
            seccolor={"bg-[#EE0004]"}
            per={75}
            img={"./images/oracle.png"}
            h={"h-[5rem]"}
          />
          <CirculerLoder
            color={"#00618A"}
            seccolor={"bg-[#00618A]"}
            per={70}
            img={"./images/mysql.png"}
            h={"h-[3rem]"}
          />
        </div>
        <CirculerLoder
          color={"#8A8A8A"}
          seccolor={"bg-[#8A8A8A]"}
          per={0}
          img={"./images/lock.png"}
          h={"h-[5rem]"}
        />
      </div>
    );
  }

  if (tab == 5) {
    return (
      <div className="max-sm:w-full max-sm:h-fit h-[40rem] w-[45rem] py-[2rem] mr-[6rem] max-sm:mr-0 flex justify-between max-sm:justify-center items-center flex-col gap-[5rem] max-sm:gap-[3rem] ">
        <div className="w-full flex justify-between max-sm:justify-center max-sm:items-center max-sm:flex-col max-sm:gap-[3rem]">
          <CirculerLoder
            color={"#00589C"}
            seccolor={"bg-[#00589C]"}
            per={90}
            img={"./images/c.png"}
            h={"h-[5rem]"}
          />
          <CirculerLoder
            color={"#659AD2"}
            seccolor={"bg-[#659AD2]"}
            per={85}
            img={"./images/c++.png"}
            h={"h-[5rem]"}
          />
        </div>
        <CirculerLoder
          color={"#280068"}
          seccolor={"bg-[#280068]"}
          per={45}
          img={"./images/csharp.png"}
          h={"h-[5rem]"}
        />
      </div>
    );
  }
}

export default CirLOderSet;
