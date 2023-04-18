import React from "react";
import HomeNav from "../../components/HomeNav";
import ExamTimer from "../../components/ExamTimer";
import { useState, useEffect } from "react";

const ExamPage = () => {
  const [timerHours, setTimerHours] = useState(1);
  const [timerMinutes, setTimerMinutes] = useState(60);
  const [timerSeconds, setTimerSeconds] = useState(60);

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
        clearInterval(interval.current);
        // alert("Time is Up!!!");
        // return;
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
      <ExamTimer seconds={30} />
      <div></div>
    </div>
  );
};

export default ExamPage;
