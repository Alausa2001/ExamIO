import examio_icon from "./images/examio_icon.svg";

const Navbar = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row items-center gap-3 font-black text-lg text-lightColor">
        <img src={examio_icon} alt="examio-icon" />
        ExamIO
      </div>
      <div className="flex flex-row items-center gap-8"></div>
    </div>
  );
};

export default Navbar;
