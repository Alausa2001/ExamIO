import examio from "../Home/images/examio_icon.svg";
import line from "../Home/images/line_zero.svg";
import sideimg from "../Home/images/signup_img.png";
import { AiFillCaretLeft } from "react-icons/ai";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row py-5">
      {/* ----------- Left Side ------------------ */}
      <div className="hidden md:flex flex-col md:px-20 md:py-10 md:w-1/2">
        <a
          href="/"
          className="flex items-center text-lightColor md:hover:text-buttonColor absolute top-3 left-3 text-sm"
        >
          <AiFillCaretLeft />
          Back to Homepage
        </a>
        <a href="/" className="flex items-center gap-3">
          <img src={examio} alt="ExamIO icon or logo" />
          <h3 className="text-lg text-lightColor font-black">ExamIO</h3>
        </a>
        <div>
          <img
            src={line}
            alt="start-out underline"
            className="relative top-[6rem] right-5"
          />
          <h1 className="text-[3rem] text-lightColor font-extrabold italic pb-[1rem] pt-[1rem] leading-[4rem]">
            Start Out with our user-friendly Testing platform for free...
          </h1>
          <p className="text-lightColor text-[1.2rem] pb-[2rem]">
            Take tests, exams and practice using ExamIO....
          </p>
        </div>
        <img src={sideimg} alt="Signup side pic of a computer" />
      </div>

      {/* ----------- Right Side ------------------ */}
      <div className="border rounded-[20px] border-none bg-lightColor px-[2.5rem] py-[2.1rem] w-[90%] m-auto md:mr-20 md:w-[45%] md:mt-[7rem]">
        <h1 className="text-[1.1rem] text-center font-bold pb-5 mb-10 border-b-4 border-buttonColor flex flex-col gap-[1.5rem]">
          Log In to your ExamIO account
        </h1>
        <form method="get" className="flex flex-col gap-[1.5rem]">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johnsmith@gmail.com"
              required
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" required />
          </div>
          <button
            type="submit"
            className="px-[1.5rem] py-[0.8rem] bg-buttonColor text-lightColor rounded-[0.5rem] text-lg font-bold md:hover:bg-hoverColor w-[50%] mx-auto"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
