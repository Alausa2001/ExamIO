import Navbar from "../../components/Navbar";
import sideimg from "./images/sideimg_one.png";
import line from "./images/line_acc.svg";
import leftimg from "./images/left_img.svg";
import centerimg from "./images/center_img.svg";
import rightimg from "./images/right_img.svg";
import sectionsectionimg from "./images/secondsectionimg.png";
import linetwo from "./images/line_two.svg";
import firstuser from "./images/First-User.png";
import seconduser from "./images/Second-User.png";
import thirduser from "./images/Third-User.png";
import fourthuser from "./images/Fourth-User.png";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* ==================================== Hero Section Start ================================================== */}

      <div className="md:h-[100vh] flex flex-col items-center justify-between pl-[5rem] pr-[2.5rem] py-10 md:flex-row">
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
          <a
            href="/signup"
            className="bg-buttonColor text-lightColor px-12 py-3 text-[1.2rem] font-semibold rounded-lg md:hover:bg-hoverColor md:hover:font-extrabold duration-700"
          >
            Get Started for Free
          </a>
        </div>
        <div>
          <img src={sideimg} alt="" />
        </div>
      </div>

      {/* ==================================== Hero Section Ends ================================================== */}

      {/* ==================================== First Section Starts =============================================== */}

      <div className="flex flex-col items-center md:flex-row md:items-center px-[8rem] py-10 gap-10 bg-lightColor md:h-[40rem]">
        {/* ------------------ Left Section -------------- */}

        <div className="flex flex-col items-center text-center gap-6  p-[2rem] border border-buttonColor rounded-md shadow-lg shadow-buttonColor-500/80 md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:hover:bg-buttonColor md:hover:text-lightColor md:duration-300">
          <img src={leftimg} alt="" />
          <h2 className="text-[30px] font-bold leading-none">
            Experience smarter testing
          </h2>
          <p>
            Lörem ipsum resk soligen. Krolagt musade läxrut på plahånde,
            airbaghjälm. Kytt döstäda. Mikropp hedersvåld: i egonar terarett.
          </p>
          <button className="bg-buttonColor px-[1.5rem] py-[0.5rem] rounded-lg text-lightColor font-medium md:hover:px-[2rem] md:hover:bg-lightColor md:hover:text-buttonColor">
            Learn More
          </button>
        </div>

        {/* ------------------ Center Section -------------- */}

        <div className="flex flex-col items-center text-center gap-6  p-[2rem] border border-buttonColor rounded-md shadow-lg shadow-buttonColor-500/80 md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:hover:bg-buttonColor md:hover:text-lightColor md:duration-30">
          <img src={centerimg} alt="" className="w-[205px]" />
          <h2 className="text-[30px] font-bold -mt-6 leading-none">
            Take Quality Exams
          </h2>
          <p>
            Lörem ipsum resk soligen. Krolagt musade läxrut på plahånde,
            airbaghjälm. Kytt döstäda. Mikropp hedersvåld: i egonar terarett.
            Trakåska intrateläda
          </p>
          <button className="bg-buttonColor px-[1.5rem] py-[0.5rem] rounded-lg text-lightColor font-medium md:hover:px-[2rem] md:hover:bg-lightColor md:hover:text-buttonColor">
            Learn More
          </button>
        </div>

        {/* ------------------ Right Section -------------- */}

        <div className="flex flex-col items-center text-center gap-6  p-[2rem] border border-buttonColor rounded-md shadow-lg shadow-buttonColor-500/80 md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:hover:bg-buttonColor md:hover:text-lightColor md:duration-30">
          <img src={rightimg} alt="" className="mt-3" />
          <h2 className="text-[30px] font-bold mt-3 leading-none">
            Exam Preparations
          </h2>
          <p className="my-1">
            Lörem ipsum resk soligen. Krolagt musade läxrut på plahånde,
            airbaghjälm. Kytt döstäda. Mikropp hedersvåld: i egonar terarett.
            Trakåska
          </p>
          <button className="bg-buttonColor px-[1.5rem] py-[0.5rem] rounded-lg text-lightColor font-medium md:hover:px-[2rem] md:hover:bg-lightColor md:hover:text-buttonColor">
            Learn More
          </button>
        </div>
      </div>

      {/* ==================================== First Section Ends =============================================== */}

      {/* ==================================== Second Section Starts =============================================== */}

      <div>
        <div className="flex flex-col items-center gap-10 pl-[5rem] pr-[2.5rem] py-20 md:flex-row">
          <div>
            <img src={sectionsectionimg} alt="" />
          </div>
          <div>
            <h1 className="w-[40rem] text-lightColor text-[3.2rem] font-extrabold italic">
              Transforming the Test taking experience with ease.
            </h1>
            <img
              src={linetwo}
              alt=""
              className="relative bottom-[10.5rem] right-[1.2rem]"
            />
            <p className="text-lightColor text-[1.5rem] mb-10">
              Lörem ipsum spermatvätt tratösm.
            </p>
            <a
              href="/signup"
              className="bg-buttonColor text-lightColor px-12 py-3 text-[1.2rem] font-semibold rounded-lg md:hover:bg-hoverColor md:hover:font-extrabold duration-700"
            >
              Get Started for Free
            </a>
          </div>
        </div>
      </div>

      {/* ==================================== Second Section Starts =============================================== */}

      {/* ==================================== Third Section Starts =============================================== */}

      <div className="bg-lightColor p-[8rem] flex flex-col gap-20">
        <div className="flex flex-col md:flex-row justify-between items-baseline text-center gap-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img src={firstuser} alt="" />
            <blockquote>
              <p className="italic pb-5">
                Lorem ipsum dolor sit amet consectetur. Venenatis odio felis
                congue dui. Egestas sapien magna integer aliquam eget placerat
                eget buon
              </p>
              <p className="font-bold">~ Ogo Meninwa.</p>
              <p className="text-sm">JAMB Student</p>
            </blockquote>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img src={seconduser} alt="" />
            <blockquote>
              <p className="italic pb-5">
                Lorem ipsum dolor sit amet consectetur. Venenatis odio felis
                congue dui. Egestas sapien magna integer aliquam eget placerat
                noyjoi juior kbuio huoonk jbnin kiur.
              </p>
              <p className="font-bold">~ Nora Simeon.</p>
              <p className="text-sm">Languages Teacher</p>
            </blockquote>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-baseline text-center gap-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img src={thirduser} alt="" />
            <blockquote>
              <p className="italic pb-5">
                Lorem ipsum dolor sit amet consectetur. Venenatis odio felis
                congue dui. Egestas sapien magna integer aliquam eget placerat
                hfiieui hihroo hirohi
              </p>
              <p className="font-bold">~ Caroline Olabisi.</p>
              <p className="text-sm">Albert High School Student</p>
            </blockquote>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img src={fourthuser} alt="" />
            <blockquote>
              <p className="italic pb-5">
                Lorem ipsum dolor sit amet consectetur. Venenatis odio felis
                congue dui. Egestas sapien magna integer aliquam eget placerat
                noyjoi juior kbuio huoonk jbnin kiur.
              </p>
              <p className="font-bold">~ Nosa Ndukumba. </p>
              <p className="text-sm">Chemistry Teacher </p>
            </blockquote>
          </div>
        </div>
      </div>

      {/* ==================================== Third Section Ends =============================================== */}

      <Footer />
    </div>
  );
};

export default Home;
