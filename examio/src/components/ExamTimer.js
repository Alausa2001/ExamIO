import { useState, useEffect, useRef } from "react";

const formatTime = (time) => {
  let hours = Math.floor(time / 60);
  let minutes = Math.floor(time - hours * 60);
  let seconds = Math.floor(time - minutes * 60);

  if (hours <= 10) {
    hours = "0" + hours;
  }
  if (minutes <= 10) {
    minutes = "0" + minutes;
  }
  if (hours <= 10) {
    seconds = "0" + seconds;
  }
};

const ExamTimer = ({ seconds }) => {
  const [countDown, setCountDown] = useState(seconds);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countDown <= 0) {
      clearInterval(timerId.current);
      alert("Time is Up!!! Please select the submit button");
    }
  }, [countDown]);

  return (
    <>
      <section className="bg-lightColor p-10 md:px-20 md:py-10">
        <section>
          <div className="flex items-center gap-3">
            <section className="flex items-baseline gap-1 font-bold">
              <p className="text-buttonColor">{countDown}</p>
              <small>Hours</small>
            </section>
            <span>:</span>
            <section className="flex items-baseline gap-1 font-bold">
              <p className="text-buttonColor">{}</p>
              <small>Minutes</small>
            </section>
            <span>:</span>
            <section className="flex items-baseline gap-1 font-bold">
              <p className="text-buttonColor">{}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </>
  );
};

ExamTimer.defaultProps = {
  timerHours: 1,
  timerMinutes: 0,
  timerSeconds: 0,
};

export default ExamTimer;
