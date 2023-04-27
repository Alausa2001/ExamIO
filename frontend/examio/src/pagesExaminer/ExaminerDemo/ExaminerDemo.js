import HomeNav from "../../components/HomeNav";
import Subjects from "../../components/Subjects";
import { useState } from "react";

const Demotest = () => {
  const [newQuestion, setNewQuestion] = useState(false);

  const handleNewQuestion = () => {
    setNewQuestion(!newQuestion);
  };

  const inputExam = {
    label: "Please type in the required question",
    pholder: `What is the word that is opposite in meaning to the word "Humility"?`,
    hFor: "question",
    type: "text",
    option: {
      A: "A",
      B: "B",
      C: "C",
      D: "D",
      E: "E",
    },
  };

  return (
    <div className="bg-lightColor pb-10">
      <form>
        <HomeNav />
        <Subjects />
        <div className="py-5 md:pt-10 px-10 md:px-20">
          <label
            htmlFor="duration"
            className="text-[1rem] md:text-[1.2rem] font-extrabold"
          >
            Please input the exam duration
          </label>
          <input
            type={inputExam.type}
            id="duration"
            name="duration"
            placeholder="e.g. 2hrs 30mins"
          />{" "}
        </div>
        <div className="py-5 md:pt-10 px-10 md:px-20">
          <label htmlFor="course">Please input the Course/Subject</label>
          <input
            type={inputExam.type}
            id="course"
            name="course"
            placeholder="e.g. English Language"
          />
        </div>
        <div className="py-5 md:pt-10 px-10 md:px-20">
          <label htmlFor={inputExam.hFor}>{inputExam.label}</label>
          <input
            type={inputExam.type}
            id={inputExam.hFor}
            name={inputExam.hFor}
            placeholder={inputExam.pholder}
          />{" "}
        </div>
        <h3 className="px-10 md:px-20 mt-5">Options:</h3>
        <div className="py-5 md:pt-10 px-10 md:px-20">
          <label htmlFor="options">Option {inputExam.option.A}</label>
          <input type={inputExam.type} id="options" placeholder="Pride" />{" "}
        </div>
        <div className="py-5 md:pt-10 px-10 md:px-20">
          <label htmlFor="options">Option {inputExam.option.B}</label>
          <input
            type={inputExam.type}
            id="options"
            placeholder="Prejudice"
          />{" "}
        </div>
        <div className="py-5 md:pt-10 px-10 md:px-20">
          <label htmlFor="options">Option {inputExam.option.C}</label>
          <input type={inputExam.type} id="options" placeholder="Reward" />{" "}
        </div>
        <div className="py-5 md:pt-10 px-10 md:px-20">
          <label htmlFor="options">Option {inputExam.option.D}</label>
          <input
            type={inputExam.type}
            id="options"
            placeholder="Affluence"
          />{" "}
        </div>
        <div className="py-5 md:pt-10 px-10 md:px-20">
          <label htmlFor="options">Option {inputExam.option.E}</label>
          <input
            type={inputExam.type}
            id="options"
            placeholder="Influence"
          />{" "}
        </div>
        <button onClick={handleNewQuestion}>Add Another Question</button>
      </form>
      <div className="my-3 flex mx-10 md:mx-20 md:my-[3rem]">
        <a
          href="/demotest"
          className="text-lightColor md:text-[1.2rem] md:hover:bg-hoverColor font-bold  bg-buttonColor px-10 py-2 rounded-lg md:px-20 md:py-[0.8rem] drop-shadow-lg"
        >
          Start Test
        </a>
      </div>
    </div>
  );
};

export default Demotest;
