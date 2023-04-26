import React, { useState, useEffect } from "react";

function Countdown() {
  const [count, setCount] = useState(5430); // total number of seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const hours = Math.floor(count / 3600);
  const minutes = Math.floor((count % 3600) / 60);
  const seconds = count % 60;

  return (
    <div className="bg-lightColor pl-20 pt-5">
      <h1 className="font-bold text-xl">
        Countdown:
        <span className="text-examiopurple font-extrabold pl-3 text-xl tracking-widest">
          {hours}:{minutes < 10 ? "0" : ""}
          {minutes}:{seconds < 10 ? "0" : ""}
          {seconds}{" "}
        </span>
      </h1>
    </div>
  );
}

export default Countdown;
