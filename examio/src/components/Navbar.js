import { NavLink } from "react-router-dom";
import examio_icon from "./images/examio_icon.svg";
import { AiOutlineMenu, AiOutlineCaretDown } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="bg-fixed translate-y-[-100] bg-examiopurple flex flex-col md:flex-row px-10 md:px-20 py-5 md:fixed w-full left-0 top-0 md:h-[6rem] z-10">
      <div>
        <a
          href="/"
          className="flex items-center gap-3 font-black text-lg text-lightColor md:pr-[22rem] pb-5 md:pb-0"
        >
          <img src={examio_icon} alt="examio-icon" />
          ExamIO
        </a>
        <button
          onClick={() => setShowNav(!showNav)}
          className="text-lightColor md:hidden cursor-pointer absolute right-10 top-10"
        >
          {showNav ? (
            <AiOutlineMenu />
          ) : (
            <button className="text-2xl absolute -top-3 -right-2">
              &times;
            </button>
          )}
        </button>
      </div>

      <div className="md:flex flex-col md:flex-row items-center gap-14 absolute top-0 left-0 right-0 bg-examiopurple pl-10 pt-20 z-[-1]">
        <ul className="flex flex-col md:flex-row gap-12 mt-10 md:mt-0">
          <li className="text-lightColor font-semibold md:hover:text-buttonColor md:hover:font-extrabold">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-lightColor font-semibold md:hover:text-buttonColor md:hover:font-extrabold">
            <NavLink to="/">About</NavLink>
          </li>
          <li className="text-lightColor font-semibold md:hover:text-buttonColor md:hover:font-extrabold">
            <NavLink to="/login">Log In</NavLink>
          </li>
          <li className="flex items-center gap-2 text-lightColor font-semibold md:hover:text-buttonColor md:hover:font-extrabold">
            Products
            <span>
              <AiOutlineCaretDown />
            </span>
          </li>
        </ul>
        <a
          href="/signup"
          className="md:bg-transparent inline-block mt-10 md:mt-0 md:border-2 md:border-solid md:border-buttonColor px-5 py-2 rounded-lg md:text-buttonColor md:font-extrabold md:hover:bg-hoverColor md:hover:border md:hover:text-lightColor md:ease-in md:duration-300 text-lightColor bg-buttonColor font-bold"
        >
          Get Started for Free
        </a>
      </div>
    </div>
  );
};

export default Navbar;
