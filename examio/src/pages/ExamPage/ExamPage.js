import React from "react";
import HomeNav from "../../components/HomeNav";
import ExamTimer from "../../components/ExamTimer";
import { useState, useEffect } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";

const ExamPage = () => {
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countTownTime = new Date("April 25, 2023 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countTownTime - now;

      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));

      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        alert("Time is Up!!! Please click on the submit button");
        clearInterval(interval.current);
      } else {
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div>
      <HomeNav />
      <ExamTimer
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
      <div className="bg-lightColor pb-[5rem]">
        <h3 className="px-10 md:px-20 font-bold pb-5">
          Subject: English Language
        </h3>
        <p className="mx-auto text-center rounded-lg text-sm font-semibold mb-10 px-3 py-1 bg-examiopurple border w-[30%] text-lightColor">
          Questions 1 to 5
        </p>
        <div className="px-10 md:px-20 text-center">
          <h4 className="text-base">
            {" "}
            <span className="mr-3 rounded-full bg-buttonColor px-1 text-lightColor text-sm font-extrabold">
              1
            </span>
            In this question, choose the option that best completes the gap,
            Bolaji runs _____ as fast as I
          </h4>
          <div className="py-3 flex items-center gap-1 ml-10 font-bold pb-[2.5rem] justify-center">
            <span>(A)</span>
            <input type="radio" />
            <label>indeed</label>

            <span className="ml-2">(B)</span>
            <input type="radio" />
            <label>pretty</label>

            <span className="ml-2">(C)</span>
            <input type="radio" />
            <label>much</label>

            <span className="ml-2">(D)</span>
            <input type="radio" />
            <label>just</label>
          </div>
        </div>

        <div className="px-10 md:px-20 text-center">
          <h4 className="text-base">
            {" "}
            <span className="mr-3 rounded-full bg-buttonColor px-1 text-lightColor text-sm font-extrabold">
              2
            </span>
            In this question, choose the option that best completes the gap,
            Bolaji runs _____ as fast as I
          </h4>
          <div className="py-3 flex items-center gap-1 ml-10 font-bold pb-[2.5rem] justify-center">
            <span>(A)</span>
            <input type="radio" />
            <label>indeed</label>

            <span className="ml-2">(B)</span>
            <input type="radio" />
            <label>pretty</label>

            <span className="ml-2">(C)</span>
            <input type="radio" />
            <label>much</label>

            <span className="ml-2">(D)</span>
            <input type="radio" />
            <label>just</label>
          </div>
        </div>

        <div className="px-10 md:px-20 text-center">
          <h4 className="text-base">
            {" "}
            <span className="mr-3 rounded-full bg-buttonColor px-1 text-lightColor text-sm font-extrabold">
              3
            </span>
            In this question, choose the option that best completes the gap,
            Bolaji runs _____ as fast as I
          </h4>
          <div className="py-3 flex items-center gap-1 ml-10 font-bold pb-[2.5rem] justify-center">
            <span>(A)</span>
            <input type="radio" />
            <label>indeed</label>

            <span className="ml-2">(B)</span>
            <input type="radio" />
            <label>pretty</label>

            <span className="ml-2">(C)</span>
            <input type="radio" />
            <label>much</label>

            <span className="ml-2">(D)</span>
            <input type="radio" />
            <label>just</label>
          </div>
        </div>

        <div className="px-10 md:px-20 text-center">
          <h4 className="text-base">
            {" "}
            <span className="mr-3 rounded-full bg-buttonColor px-1 text-lightColor text-sm font-extrabold">
              4
            </span>
            In this question, choose the option that best completes the gap,
            Bolaji runs _____ as fast as I
          </h4>
          <div className="py-3 flex items-center gap-1 ml-10 font-bold pb-[2.5rem] justify-center">
            <span>(A)</span>
            <input type="radio" />
            <label>indeed</label>

            <span className="ml-2">(B)</span>
            <input type="radio" />
            <label>pretty</label>

            <span className="ml-2">(C)</span>
            <input type="radio" />
            <label>much</label>

            <span className="ml-2">(D)</span>
            <input type="radio" />
            <label>just</label>
          </div>
        </div>

        <div className="px-10 md:px-20 text-center">
          <h4 className="text-base">
            {" "}
            <span className="mr-3 rounded-full bg-buttonColor px-1 text-lightColor text-sm font-extrabold">
              5
            </span>
            In this question, choose the option that best completes the gap,
            Bolaji runs _____ as fast as I
          </h4>
          <div className="py-3 flex items-center gap-1 ml-10 font-bold pb-[2.5rem] justify-center">
            <span>(A)</span>
            <input type="radio" />
            <label>indeed</label>

            <span className="ml-2">(B)</span>
            <input type="radio" />
            <label>pretty</label>

            <span className="ml-2">(C)</span>
            <input type="radio" />
            <label>much</label>

            <span className="ml-2">(D)</span>
            <input type="radio" />
            <label>just</label>
          </div>
        </div>
      </div>

      <div className="flex flex-row px-10 md:px-20 py-5 justify-between text-lightColor">
        <div className="flex items-center gap-1 cursor-pointer md:hover:bg-buttonColor md:hover:px-5">
          <AiFillCaretLeft />
          Previous
        </div>
        <div className="flex items-center gap-1 cursor-pointer md:hover:bg-buttonColor md:hover:px-5">
          <BsFillSendFill />
          Submit
        </div>
        <div className="flex items-center gap-1 cursor-pointer md:hover:bg-buttonColor md:hover:px-5">
          <AiFillCaretRight />
          Next
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
