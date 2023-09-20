import React from "react";

function WorkCard({title , image , link , themeColor ,mode}) {
    const {ThemTextColor , ThemBGColor , ThemBorderColor} = themeColor
    const {ModeBgColor_900,ModeBgColor_100,ModeBgColor_50,ModeTextColor_900,ModeTextColor_700,ModeBorderColor_50} = mode

return (
    <div className={`flex justify-between flex-col p-[1rem] h-[16rem] w-[17rem] max-sm:h-fit max-sm:w-full rounded-[.8rem] ${ModeBgColor_100} border-[1px] ${ModeBorderColor_50}`}>
    <img src={image} className="h-[10rem] w-full max-sm:h-auto rounded-[.6rem]"/>
    <h2 className="mt-[.4rem] text-[1.4rem] font-semibold capitalize">
        {title}
    </h2>
    <a href={link} target="_blank" className={`${ThemTextColor} text-[1rem]`}>
        view..
    </a>
    </div>
    );
}

export default WorkCard;
