// import success from "./images/success.svg";

const Modal2 = ({ start, onStart }) => {
  if (!start) return null;
  return (
    <div>
      <div className="modal max-w-[70%]">
        <button
          onClick={onStart}
          className="absolute top-3 right-5 text-3xl font-bold md:hover:bg-buttonColor md:hover:px-3 md:hover:text-lightColor"
        >
          &times;
        </button>
        <div className="flex items-center pb-5 border-b-2 border-buttonColor mb-10">
          {/* <img src={success} alt="" className="w-[15%]" /> */}
          <h1 className="font-bold text-[1.5rem] gap-3 md:mx-auto">
            Please Confirm that You Are Ready!!! 👩‍💻
          </h1>
        </div>
        <p className="text-center text-lg font-semibold pb-5">
          ✔ Check that your internet is working properly.
        </p>
        <p className="text-center text-lg font-semibold pb-5">
          ✔ Check that your battery is connected and other devices.
        </p>
        <p className="text-center text-lg font-semibold pb-5 md:pb-10">
          ✔ Check that you are ready mentally to start.
        </p>

        <div className="px-[1.5rem] py-[0.5rem] bg-buttonColor text-lightColor rounded-[0.5rem] text-lg font-bold md:hover:bg-hoverColor mx-auto text-center md:w-[50%]">
          <a href="/exam">Yes, I Am Ready, Let's Start</a>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Modal2;
