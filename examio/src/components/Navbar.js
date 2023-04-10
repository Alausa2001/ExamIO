import { NavLink } from "react-router-dom";
import examio_icon from "./images/examio_icon.svg";
import { AiOutlineMenu, AiOutlineCaretDown } from "react-icons/ai";
import bghero from "./images/bg_hero.png";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-20 py-5 z-50">
      <div className="flex items-center gap-3 font-black text-lg text-lightColor">
        <img src={examio_icon} alt="examio-icon" />
        ExamIO
      </div>
      <div className="flex flex-row items-center gap-14">
        <ul className="flex gap-12">
          <li className="text-lightColor font-semibold hover:text-buttonColor hover:font-extrabold">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-lightColor font-semibold hover:text-buttonColor hover:font-extrabold">
            <NavLink to="/">About</NavLink>
          </li>
          <li className="text-lightColor font-semibold hover:text-buttonColor hover:font-extrabold">
            <NavLink to="/">Log In</NavLink>
          </li>
          <li className="flex items-center gap-2 text-lightColor font-semibold hover:text-buttonColor hover:font-extrabold">
            Products
            <span>
              <AiOutlineCaretDown />
            </span>
          </li>
        </ul>
        <button className="bg-transparent border-2 border-solid border-buttonColor px-5 py-2 rounded-lg text-buttonColor font-extrabold hover:bg-hoverColor hover:border hover:text-lightColor ease-in duration-300">
          Get Started for Free
        </button>

        <span className="text-lightColor md:hidden cursor-pointer">
          <AiOutlineMenu />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
