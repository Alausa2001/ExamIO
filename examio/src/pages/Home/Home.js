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

      {/* ==================================== First Section Starts =============================================== */}

      <div className="flex flex-col items-center md:flex-row md:items-center px-[8rem] py-10 gap-10 bg-lightColor md:h-[40rem]">
        {/* ------------------ Left Section -------------- */}

        <div className="flex flex-col items-center text-center gap-6  p-[2rem] border border-buttonColor rounded-md shadow-lg shadow-buttonColor-500/80 md:hover:w-[80rem] md:hover:h-[35rem] md:hover:justify-center md:hover:bg-buttonColor md:hover:text-lightColor md:ease-in md:duration-500">
          <img src={leftimg} alt="" />
          <h2 className="text-[30px] font-bold">Experience smarter testing</h2>
          <p>
            Lörem ipsum resk soligen. Krolagt musade läxrut på plahånde,
            airbaghjälm. Kytt döstäda. Mikropp hedersvåld: i egonar terarett.
            Trakåska
          </p>
          <button className="bg-buttonColor px-[1.5rem] py-[0.5rem] rounded-lg text-lightColor font-medium hover:px-[2rem] hover:bg-lightColor hover:text-buttonColor">
            Learn More
          </button>
        </div>

        {/* ------------------ Center Section -------------- */}

        <div className="flex flex-col items-center text-center gap-6  p-[2rem] border border-buttonColor rounded-md shadow-lg shadow-buttonColor-500/80 md:hover:w-[80rem] md:hover:h-[35rem] md:hover:justify-center md:hover:bg-buttonColor md:hover:text-lightColor md:ease-in md:duration-500">
          <img src={centerimg} alt="" className="w-[250px]" />
          <h2 className="text-[30px] font-bold -mt-9">Take Quality Exams</h2>
          <p>
            Lörem ipsum resk soligen. Krolagt musade läxrut på plahånde,
            airbaghjälm. Kytt döstäda. Mikropp hedersvåld: i egonar terarett.
            Trakåska intrateläda
          </p>
          <button className="bg-buttonColor px-[1.5rem] py-[0.5rem] rounded-lg text-lightColor font-medium hover:px-[2rem] hover:bg-lightColor hover:text-buttonColor">
            Learn More
          </button>
        </div>

        {/* ------------------ Right Section -------------- */}

        <div className="flex flex-col items-center text-center gap-6  p-[2rem] border border-buttonColor rounded-md shadow-lg shadow-buttonColor-500/80 md:hover:w-[80rem] md:hover:h-[35rem] md:hover:justify-center md:hover:bg-buttonColor md:hover:text-lightColor md:ease-in md:duration-500">
          <img src={rightimg} alt="" className="mt-3" />
          <h2 className="text-[30px] font-bold mt-3">Exam Preparations</h2>
          <p className="my-3">
            Lörem ipsum resk soligen. Krolagt musade läxrut på plahånde,
            airbaghjälm. Kytt döstäda. Mikropp hedersvåld: i egonar terarett.
            Trakåska
          </p>
          <button className="bg-buttonColor px-[1.5rem] py-[0.5rem] rounded-lg text-lightColor font-medium hover:px-[2rem] hover:bg-lightColor hover:text-buttonColor mb-4">
            Learn More
          </button>
        </div>
      </div>

      {/* ==================================== First Section 
      Ends =============================================== */}

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
              Lörem ipsum spermatvätt tratösm rebepp pinera samt tesa. Denengen
              efal kongen.
            </p>
            <button className="bg-buttonColor text-lightColor px-12 py-3 text-[1.2rem] font-semibold rounded-lg md:hover:bg-hoverColor md:hover:font-extrabold duration-700">
              Get Started for Free
            </button>
          </div>
        </div>
      </div>

      {/* ==================================== Second Section Starts =============================================== */}

      {/* ==================================== Third Section Starts =============================================== */}

      <div className="bg-lightColor p-20">
        <div className="flex flex-col md:flex-row justify-between items-baseline text-center">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img src={firstuser} alt="" />
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet consectetur. Venenatis odio felis
                congue dui. Egestas sapien magna integer aliquam eget placerat
              </p>
              <p>~ Ogo Meninwa.</p>
              <p>JAMB Student</p>
            </blockquote>
          </div>
          <div>
            <img src={seconduser} alt="" />
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet consectetur. Venenatis odio felis
                congue dui. Egestas sapien magna integer aliquam eget placerat
                noyjoi juior kbuio huoonk jbnin kiur.
              </p>
              <p>~ Nora Simeon.</p>
              <p>Languages Teacher</p>
            </blockquote>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-center">
          <div>
            <img src={thirduser} alt="" />
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet consectetur. Venenatis odio felis
                congue dui. Egestas sapien magna integer aliquam eget placerat
                hfiieui hihroo hirohi
              </p>
              <p>~ Caroline Olabisi.</p>
              <p>Albert High School Student</p>
            </blockquote>
          </div>
          <div>
            <img src={fourthuser} alt="" />
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet consectetur. Venenatis odio felis
                congue dui. Egestas sapien magna integer aliquam eget placerat
                noyjoi juior kbuio huoonk jbnin kiur.
              </p>
              <p>~ Nosa Ndukumba. </p>
              <p>Chemistry Teacher </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
