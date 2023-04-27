import React from "react";
import demo from "./images/demo_img.png";
import exam from "./images/writexam_img.png";
import result from "./images/view_result.png";
import { Link } from "react-router-dom";
import HomeNav from "../../components/HomeNav";

const Homepage = () => {
  return (
    <div>
      <HomeNav userName={localStorage.getItem("fullName")} />
      <div className="bg-lightColor py-[6rem] flex flex-col items-center md:flex-row px-5 md:py-[-10rem] md:px-20 h-[300vh] md:h-[100vh] gap-10">
        <Link
          to="/demo"
          className="border-solid border-buttonColor border-[0.3px] drop-shadow-md rounded-lg pb-[1rem] md:hover:scale-105 duration-300 md:hover:bg-buttonColor md:hover:text-lightColor w-[25rem] md:w-[30rem] cursor-pointer"
        >
          <div className="pl-[2rem]">
            <img src={demo} alt="" />
          </div>
          <h2 className="text-[1.7rem] font-bold text-center mr-3 mt-[-1rem]">
            Take A Demo Test
          </h2>
          <p className="text-center px-[2rem] text-lg">
            Practice how to take your exam before the actual exam
          </p>
        </Link>
        <Link
          to="/write-exam"
          className="border-solid border-buttonColor border-[0.3px] drop-shadow-md rounded-lg pb-[1rem] md:hover:scale-105 duration-300 md:hover:bg-buttonColor md:hover:text-lightColor w-[25rem] md:w-[33rem] cursor-pointer"
        >
          <div className="px-[2rem]">
            <img src={exam} alt="" />
          </div>
          <h2 className="text-[1.7rem] font-bold text-center">Write An Exam</h2>
          <p className="text-center px-[2rem] text-lg">
            Click to write your scheduled exam, test or assessment
          </p>
        </Link>
        <Link
          to="/history"
          className="border-solid border-buttonColor border-[0.3px] drop-shadow-md rounded-lg pb-[1rem] md:hover:scale-105 duration-300 md:hover:bg-buttonColor md:hover:text-lightColor w-[25rem] md:w-[32rem] cursor-pointer"
        >
          <div className="px-[2rem]">
            <img src={result} alt="" />
          </div>
          <h2 className="text-[1.7rem] font-bold text-center">Exam History</h2>
          <p className="text-center px-[2rem] text-lg">
            View analysis of your exam history and evaluate results
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
