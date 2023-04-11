import { NavLink } from "react-router-dom";
import examio_icon from "./images/examio_icon.svg";
import { AiOutlineMenu, AiOutlineCaretDown } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-fixed flex flex-row justify-between px-20 py-5 z-50">
      <a
        href="/"
        className="flex items-center gap-3 font-black text-lg text-lightColor"
      >
        <img src={examio_icon} alt="examio-icon" />
        ExamIO
      </a>
      <div className="flex flex-row items-center gap-14">
        <ul className="flex gap-12">
          <li className="text-lightColor font-semibold md:hover:text-buttonColor md:hover:font-extrabold">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-lightColor font-semibold md:hover:text-buttonColor hover:font-extrabold">
            <NavLink to="/">About</NavLink>
          </li>
          <li className="text-lightColor font-semibold md:hover:text-buttonColor md:hover:font-extrabold">
            <NavLink to="/">Log In</NavLink>
          </li>
          <li className="flex items-center gap-2 text-lightColor font-semibold md:hover:text-buttonColor md:hover:font-extrabold">
            Products
            <span>
              <AiOutlineCaretDown />
            </span>
          </li>
        </ul>
        <button className="md:bg-transparent md:border-2 md:border-solid md:border-buttonColor px-5 py-2 rounded-lg md:text-buttonColor md:font-extrabold md:hover:bg-hoverColor md:hover:border md:hover:text-lightColor md:ease-in md:duration-300 text-lightColor bg-buttonColor font-bold">
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
