import React from "react";


function CirculerLoder(props) {
    const color = props.color;
    const seccolor = props.seccolor;
    const per = props.per;
    const img = props.img;
    const progress = (per*360)/100;
    const h = props.h
        
  return (
    <>
    <div className="relative h-[16rem] w-[20rem]">
      <div
        className=" relative h-[13rem] w-[13rem] flex items-center justify-center flex-col rounded-full before:absolute before:h-[9.5rem] before:w-[9.5rem] before:bg-[#f2f2fc] before:rounded-full  shadow-md shadow-black"
        style={{ background: `conic-gradient(${color} ${progress}deg , #e2e2ec 0deg)` }}
      >
        <img src={img} alt="" className={`z-20 ${h} ` } />
      </div>
      <div className={`absolute bottom-0 right-0 flex justify-center items-center h-[2.6rem] w-[8rem] ${seccolor} skew-x-[-25deg]`}><h2 className="text-white text-[1.3rem] skew-x-[25deg]">{per}%</h2>
       <div className={`absolute top-0 h-[10.8rem] w-[.1rem] ${seccolor} origin-top rotate-[110deg] flex justify-center items-center`}>
        <div className={`absolute bottom-0 h-[.6rem] w-[.6rem] rounded-full ${seccolor} skew-x-[17deg] skew-y-[-35deg]`}></div>
       </div>
       </div>
      </div>
    </>
  );
}

export default CirculerLoder;
