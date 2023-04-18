import React from "react";

const Timers = () => {
  const timer = {
    hours: 2,
    minutes: 60,
    seconds: 60,
  };

  return (
    <div>
      <h2 className="text-[1.2rem] pl-10 md:pl-0 pt-5 md:pt-10 font-extrabold md:ml-20 md:text-[1.4rem] md:uppercase">
        Time Required
      </h2>
      <div className="text-[1rem] md:text-[1.2rem] ml-10 md:ml-20 py-3">
        <span className="pr-3 font-extrabold underline">
          {timer.hours} <span className="font-medium">Hours</span>
        </span>
        <span className="pr-3 font-extrabold underline">
          {timer.minutes} <span className="font-medium">Minutes</span>
        </span>
        <span className="pr-3 font-extrabold underline">
          {timer.seconds} <span className="font-medium">Seconds</span>
        </span>
      </div>
    </div>
  );
};

export default Timers;
