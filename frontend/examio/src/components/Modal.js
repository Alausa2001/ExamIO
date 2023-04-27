import success from "./images/success.svg";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div>
      <div className="modal max-w-[60%]">
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-3xl font-bold md:hover:bg-buttonColor md:hover:px-3 md:hover:text-lightColor"
        >
          &times;
        </button>
        <div className="flex items-center pb-5 border-b-2 border-buttonColor mb-10">
          <img src={success} alt="" className="w-[15%]" />
          <h1 className="font-bold text-[1.5rem] gap-3">
            Verification Successful
          </h1>
        </div>
        <p className="text-center text-lg font-semibold pb-10">
          Your account has been created successfully. Please login.
        </p>

        <div className="px-[1.5rem] py-[0.5rem] bg-buttonColor text-lightColor rounded-[0.5rem] text-lg font-bold md:hover:bg-hoverColor mx-auto text-center md:w-[50%]">
          <a href="/login">Log In</a>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Modal;
