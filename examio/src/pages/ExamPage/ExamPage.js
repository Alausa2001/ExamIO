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
    const countTownTime = new Date("April 20, 2023 ").getTime();

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
      <div className="bg-lightColor">
        <h3 className="px-10 md:px-20 font-bold pb-5">
          Subject: English Language
        </h3>
        <p className="text-center">Questions 1 to 5</p>
        <div>
          <h4>
            In this question, choose the option that best completes the gap,
            Bolaji runs _____ as fast as I
          </h4>
          <span>(A)</span> <input type="radio" />
          <label>indeed</label>
          <span>(B)</span>
          <input type="radio" />
          <label>pretty</label>
          <span>(C)</span>
          <input type="radio" />
          <label>much</label>
          <span>(D)</span>
          <input type="radio" />
          <label>just</label>
        </div>
      </div>
      <div className="bg-lightColor">
        <h3>Subject: English Language</h3>
        <p>Questions 1 to 5</p>
        <div>
          <h4>
            In this question, choose the option that best completes the gap,
            Bolaji runs _____ as fast as I
          </h4>
          <span>(A)</span> <input type="radio" />
          <label>indeed</label>
          <span>(B)</span>
          <input type="radio" />
          <label>pretty</label>
          <span>(C)</span>
          <input type="radio" />
          <label>much</label>
          <span>(D)</span>
          <input type="radio" />
          <label>just</label>
        </div>
      </div>
      <div className="bg-lightColor">
        <h3>Subject: English Language</h3>
        <p>Questions 1 to 5</p>
        <div>
          <h4>
            In this question, choose the option that best completes the gap,
            Bolaji runs _____ as fast as I
          </h4>
          <span>(A)</span> <input type="radio" />
          <label>indeed</label>
          <span>(B)</span>
          <input type="radio" />
          <label>pretty</label>
          <span>(C)</span>
          <input type="radio" />
          <label>much</label>
          <span>(D)</span>
          <input type="radio" />
          <label>just</label>
        </div>
      </div>
      <div className="bg-lightColor">
        <h3>Subject: English Language</h3>
        <p>Questions 1 to 5</p>
        <div>
          <h4>
            In this question, choose the option that best completes the gap,
            Bolaji runs _____ as fast as I
          </h4>
          <span>(A)</span> <input type="radio" />
          <label>indeed</label>
          <span>(B)</span>
          <input type="radio" />
          <label>pretty</label>
          <span>(C)</span>
          <input type="radio" />
          <label>much</label>
          <span>(D)</span>
          <input type="radio" />
          <label>just</label>
        </div>
      </div>
      <div className="bg-lightColor">
        <h3>Subject: English Language</h3>
        <p>Questions 1 to 5</p>
        <div>
          <h4>
            In this question, choose the option that best completes the gap,
            Bolaji runs _____ as fast as I
          </h4>
          <span>(A)</span> <input type="radio" />
          <label>indeed</label>
          <span>(B)</span>
          <input type="radio" />
          <label>pretty</label>
          <span>(C)</span>
          <input type="radio" />
          <label>much</label>
          <span>(D)</span>
          <input type="radio" />
          <label>just</label>
        </div>
      </div>
      <div>
        <div>
          <AiFillCaretLeft />
          Previous
        </div>
        <div>
          <BsFillSendFill />
          Submit
        </div>
        <div>
          <AiFillCaretRight />
          Next
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
