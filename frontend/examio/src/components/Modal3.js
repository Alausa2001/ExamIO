const Modal3 = (props) => {
  if (!props.start) return null;
  return (
    <div>
      <div className="modal max-w-[70%]">
        <div className="text-center pb-5 border-b-2 border-buttonColor mb-10">
          <h1 className="font-bold text-[1.5rem] gap-3 md:mx-auto">
            Your Results:
          </h1>
        </div>
        <p className="font-bold text-[2.5rem] gap-3 md:mx-auto md:my-5 text-center">
          {" "}
          Scored {props.score} out of {props.questions}
        </p>
        <p className="font-bold text-[2rem] bg-examiopurple text-lightColor rounded-md px-3 w-[6rem] gap-3 md:mx-auto text-center">
          {parseInt((props.score / props.questions) * 100).toString() + "%"}
        </p>

        <div className="px-[1.5rem] py-[0.5rem] mt-10 bg-buttonColor text-lightColor rounded-[0.5rem] text-lg font-bold md:hover:bg-hoverColor mx-auto text-center md:w-[50%]">
          <a href="/homepage">Back to HomePage</a>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Modal3;
