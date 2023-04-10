import Navbar from "../../components/Navbar";
import sideimg from "./images/sideimg_one.png";
import line from "./images/line_acc.svg";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* ==================================== Hero Section Start ================================================== */}

      <div className="flex flex-col items-center justify-between pl-[5rem] pr-[2.5rem] py-10 md:flex-row">
        <div>
          <h1 className="w-[40rem] text-lightColor text-[3.2rem] font-extrabold italic">
            Accelerate your learning with Computer Based Testing...
          </h1>
          <img
            src={line}
            alt=""
            className="relative bottom-[10.5rem] right-[1.2rem]"
          />
          <p className="text-lightColor text-[1.5rem] mb-10">
            Secure, Reliable and User-Friendly
          </p>
          <button className="bg-buttonColor text-lightColor px-12 py-3 text-[1.2rem] font-semibold rounded-lg md:hover:bg-hoverColor md:hover:font-extrabold duration-700">
            Get Started for Free
          </button>
        </div>
        <div>
          <img src={sideimg} alt="" />
        </div>
      </div>

      {/* ==================================== Hero Section Ends ================================================== */}

      <div></div>
    </div>
  );
};

export default Home;
