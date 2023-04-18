import React, { useState } from "react";
import HomeNav from "../../components/HomeNav";
import Subjects from "../../components/Subjects";
import ExamID from "../../components/ExamID";
import Timers from "../../components/Timers";
import Modal2 from "../../components/Modal2";

const WriteExam = () => {
  const [showModal2, setShowModal2] = useState(false);
  const toggleModal = () => {
    setShowModal2(!showModal2);
  };

  return (
    <div className="bg-lightColor pb-10">
      <form>
        <HomeNav />
        <ExamID />
        <Subjects />
        <Timers />
      </form>
      <div className="my-3 flex mx-10 md:mx-20 md:my-[3rem]">
        <button
          onClick={toggleModal}
          className="text-lightColor md:text-[1.2rem] md:hover:bg-hoverColor font-bold  bg-buttonColor px-10 py-2 rounded-lg md:px-20 md:py-[0.8rem] drop-shadow-lg"
        >
          Start Exam
        </button>
      </div>
      <Modal2 start={showModal2} onStart={toggleModal} />
    </div>
  );
};

export default WriteExam;
