import React from "react";
import examio_icon from "./images/examio_icon.svg";

const HomeNav = (props) => {
  const [firstName, lastName] = props.userName.split(" ");
  const firstLettersName =
    firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

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
        <h3 className="text-[1.5rem] font-bold tracking-wide rounded-full bg-buttonColor px-1 cursor-pointer relative group peer gap-2 text-lightColor transition duration-500">
          {firstLettersName}
          <div className="group-hover:block translate-y-[-50vh] md:translate-y-[-70vh] group-hover:translate-y-0 hover:translate-y-0 transition duration-[700ms] absolute top-[1.7rem] left-0 w-[200px] md:w-[290px] text-textColor pt-4">
            <ul className="flex flex-col gap-2 bg-lightColor p-2">
              <li className="font-semibold md:hover:text-buttonColor transition duration-500 w-full text-[1.1rem]">
                <a href="/">Write Exam</a>
              </li>
              <li className="font-semibold md:hover:text-buttonColor transition duration-500 w-full text-[1.1rem]">
                <a href="/">Exam History</a>
              </li>
              <li className="font-semibold md:hover:text-buttonColor transition duration-500 w-full text-[1.1rem]">
                <a href="/">Log Out</a>
              </li>
            </ul>
          </div>
        </h3>
        <span className="font-bold md:text-2xl">Hello, {props.userName}</span>
      </div>
    </div>
  );
};

export default HomeNav;
