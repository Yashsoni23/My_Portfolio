import React from "react";

function WorkCard({title , image , link}) {
return (
    <div className="flex justify-between flex-col p-[1rem] h-[16rem] w-[17rem] max-sm:h-fit max-sm:w-full rounded-[.8rem] bg-[#fdf9ff] border-[1px] border-[#e8dfec]">
    <img src={image} className="h-[10rem] w-full max-sm:h-auto rounded-[.6rem]"/>
    <h2 className="mt-[.4rem] text-[1.4rem] font-semibold capitalize">
        {title}
    </h2>
    <a href={link} target="_blank" className="text-[#ec1839] text-[1rem]">
        view..
    </a>
    </div>
    );
}

export default WorkCard;
