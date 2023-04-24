import React from "react";
import examio_icon from "./images/examio_icon.svg";

const HomeNav = (props) => {
  return (
    <div className="flex items-center justify-between p-5 md:px-20 text-lightColor bg-examiopurple h-[5rem] md:h-[7rem]">
      <a
        href="/homepage"
        className="flex items-center gap-3 font-extrabold md:text-2xl"
      >
        <img src={examio_icon} alt="" />
        ExamIO
      </a>
      <div className="flex items-center gap-4">
        <h3 className="text-[1.5rem] font-bold tracking-wide rounded-full bg-buttonColor px-1 cursor-pointer">
          CK
        </h3>
        <span className="font-bold md:text-2xl">Hello, {props.userName}</span>
      </div>
    </div>
  );
};

export default HomeNav;
