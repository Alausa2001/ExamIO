import { NavLink } from "react-router-dom";
import examio_icon from "./images/examio_icon.svg";
import {
  AiOutlineMenu,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlineClose,
} from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="pt-4 lg:pt-0">
      {/* Desktop Nav */}
      {/* This is the container that will contain the logo and nav-links */}
      <div className="desktop-container hidden md:flex justify-between items-center w-[90%] mx-auto lg:w-full lg:fixed lg:bg-examiopurple lg:h-[5rem] lg:px-20">
        <a
          href="/"
          className="flex items-center gap-2 font-black text-lg text-lightColor"
        >
          <img src={examio_icon} alt="examio-icon" />
          ExamIO
        </a>
        <div className="flex gap-5 lg:gap-6 xl:gap-7 items-center">
          {/* nav-links */}
          <nav className="">
            <ul className="flex items-center gap-5 lg:gap-6 xl:gap-7 relative">
              <li className="text-lightColor font-semibold md:hover:text-buttonColor transition duration-500">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-lightColor font-semibold md:hover:text-buttonColor transition duration-500">
                <NavLink to="/">About</NavLink>
              </li>
              <li className="text-lightColor font-semibold md:hover:text-buttonColor transition duration-500">
                <NavLink to="/login">Log In</NavLink>
              </li>
              <li className="flex relative group items-center peer gap-2 text-lightColor font-semibold md:hover:text-buttonColor transition duration-500 cursor-pointer">
                Products
                <span>
                  <AiOutlineCaretDown />
                </span>
                {/* dropdown menu */}
                <div className="group-hover:block translate-y-[-40vh] group-hover:translate-y-0 hover:translate-y-0 transition duration-[700ms] absolute top-[1.5rem] left-0 w-[250px] text-textColor pt-4">
                  <ul className="flex flex-col gap-2 bg-lightColor p-2">
                    {/* add whatever you wanna add here. Eg links, images, etc */}
                    <li className="font-semibold md:hover:text-buttonColor transition duration-500 w-full">
                      <a href="/signup">Conduct Exams/Quiz</a>
                    </li>
                    <li className="font-semibold md:hover:text-buttonColor transition duration-500 w-full">
                      <a href="/signup">Schedule Exams</a>
                    </li>
                    <li className="font-semibold md:hover:text-buttonColor transition duration-500 w-full">
                      <a href="/signup">Write Exams</a>
                    </li>
                    <li className="font-semibold md:hover:text-buttonColor transition duration-500 w-full">
                      <a href="/signup">Exam Analysis</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <a
            href="/signup"
            className="md:bg-transparent inline-block border-2 border-buttonColor px-4 py-2 rounded-lg text-buttonColor font-extrabold hover:bg-hoverColor hover:text-lightColor ease-in duration-300  bg-buttonColor"
          >
            Get Started for Free
          </a>
        </div>
      </div>
      {/* Mobile Nav */}
      <div className="mobile-container md:hidden relative">
        <div className="flex justify-between items-center px-[1.25rem] relative z-[20]">
          <a
            href="/"
            className="flex items-center gap-2 font-black text-lg text-lightColor"
          >
            <img src={examio_icon} alt="examio-icon" />
            ExamIO
          </a>
          <button
            onClick={() => setShowNav(!showNav)}
            className="text-lightColor"
          >
            {showNav ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        <div
          className={`flex flex-col gap-6 absolute top-[110%]  w-full transition duration-700 bg-examiopurple p-7 py-[1.5rem] z-[1] ${
            showNav ? "translate-x-[0]" : "translate-x-[-100%]"
          }`}
        >
          {/* mobile nav-links */}
          <nav className="">
            <ul className="flex flex-col gap-6">
              <li className="text-lightColor font-semibold transition duration-500">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-lightColor font-semibold transition duration-500">
                <NavLink to="/">About</NavLink>
              </li>
              <li className="text-lightColor font-semibold transition duration-500">
                <NavLink to="/login">Log In</NavLink>
              </li>
              <li
                role="button"
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex flex-col peer gap-2 text-lightColor font-semibold transition duration-500 cursor-pointer"
              >
                <div className="flex gap-2 items-center">
                  Products
                  <span className="">
                    {!showDropdown ? (
                      <AiOutlineCaretDown />
                    ) : (
                      <AiOutlineCaretUp />
                    )}
                  </span>
                </div>
                {/* dropdown menu */}
                {/* customize however you like*/}
                {/* If you want to increase the width, you can  */}{" "}
                <div
                  className={`group top-[1.5rem] left-0 w-[250px] text-textColor ${
                    showDropdown ? "block" : "hidden"
                  }`}
                >
                  <ul className="flex flex-col gap-2 bg-lightColor p-2">
                    {/* add whatever you wanna add here. Eg links, images, etc */}
                    <li className="font-semibold md:hover:text-buttonColor transition duration-500 w-full">
                      <a href="/signup">Conduct Exams/Quiz</a>
                    </li>
                    <li className="font-semibold md:hover:text-buttonColor transition duration-500 w-full">
                      <a href="/signup">Schedule Exams</a>
                    </li>
                    <li className="font-semibold md:hover:text-buttonColor transition duration-500 w-full">
                      <a href="/signup">Write Exams</a>
                    </li>
                    <li className="font-semibold md:hover:text-buttonColor transition duration-500 w-full">
                      <a href="/signup">Exam Analysis</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <a
            href="/signup"
            className="bg-transparent inline-block w-fit border-2 border-buttonColor px-4 py-2 rounded-lg text-buttonColor font-extrabold"
          >
            Get Started for Free
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
