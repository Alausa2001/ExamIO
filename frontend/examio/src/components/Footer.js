import examio from "./images/examio_icon.svg";
import facebook from "./images/fb_icon.svg";
import linkedin from "./images/in_icon.svg";
import twitter from "./images/twit_icon.svg";
import instagram from "./images/insta_icon.svg";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-20 p-20">
      {/* --------- Left Hand Side ------------ */}
      <div className="md:border-r-[3px] md:pr-20 border-lightColor">
        <div className="flex items-center gap-5 pb-7">
          <img src={examio} alt="ExamIO icon" className="w-[20%] md:w-[50%]" />
          <h1 className="text-lightColor text-[2rem] font-extrabold">ExamIO</h1>
        </div>
        <div className="flex gap-5 pb-7">
          <img src={facebook} alt="Facebook logo" className="md:w-[2rem]" />
          <img src={linkedin} alt="Linkedin logo" className="md:w-[2rem]" />
          <img src={twitter} alt="Twitter logo" className="md:w-[2rem]" />
          <img src={instagram} alt="Instagram logo" className="md:w-[2rem]" />
        </div>
        <p className="text-lightColor text-[10px] pb-10 border-b-[3px] md:border-b-0">
          &copy; 2023 ALX Webstack Portfolio
        </p>
      </div>

      {/* ------------ Right Hand Side ------------ */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-20 pt-3 text-lightColor md:pl-10">
        <ul className="flex flex-col gap-3">
          <li className="text-lg font-bold">Product</li>
          <li className="md:hover:underline decoration-buttonColor">
            <a href="/">Home</a>
          </li>
          <li className="md:hover:underline decoration-buttonColor">Product</li>
          <li className="md:hover:underline decoration-buttonColor">Pricing</li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li className="text-lg font-bold">Solutions</li>
          <li className="md:hover:underline decoration-buttonColor">
            Online Exams
          </li>
          <li className="md:hover:underline decoration-buttonColor">
            Online Learning
          </li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li className="text-lg font-bold">Company</li>
          <li className="md:hover:underline decoration-buttonColor">About</li>
          <li className="md:hover:underline decoration-buttonColor">
            Customers
          </li>
          <li className="md:hover:underline decoration-buttonColor">Careers</li>
          <li className="md:hover:underline decoration-buttonColor">Blog</li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li className="text-lg font-bold">Support</li>
          <li className="md:hover:underline decoration-buttonColor">Login</li>
          <li className="md:hover:underline decoration-buttonColor">
            Help Center
          </li>
          <li className="md:hover:underline decoration-buttonColor">
            API Docs
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
