import React from "react";

function SectionTitle({title , theme}) {
  return (
    <div className=" flex flex-col ">
      <h2 className="text-[1.7rem] font-extrabold capitalize">{title}</h2>
      <div
        className={`h-[.4rem] w-[6rem] ${theme.ThemBGColor}  rounded-[.4rem]`}
      ></div>
      <div
        className={`mt-[.3rem] h-[.4rem] w-[4rem] ${theme.ThemBGColor} rounded-[.4rem]`}
      ></div>
    </div>
  );
}

export default SectionTitle;
