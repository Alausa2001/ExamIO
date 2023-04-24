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
    <div>
      <h1>
        Countdown: {hours}:{minutes < 10 ? "0" : ""}
        {minutes}:{seconds < 10 ? "0" : ""}
        {seconds}
      </h1>
    </div>
  );
}

export default Countdown;
