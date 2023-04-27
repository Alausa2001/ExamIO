import React from "react";

const ExamTimer = ({ timerHours, timerMinutes, timerSeconds }) => {
  return (
    <>
      <section className="bg-lightColor p-10 md:px-20 md:py-10">
        <section>
          <div className="flex items-center gap-3">
            <section className="flex items-baseline gap-1 font-bold">
              <p className="text-buttonColor">{timerHours}</p>
              <small>Hours</small>
            </section>
            <span>:</span>
            <section className="flex items-baseline gap-1 font-bold">
              <p className="text-buttonColor">{timerMinutes}</p>
              <small>Minutes</small>
            </section>
            <span>:</span>
            <section className="flex items-baseline gap-1 font-bold">
              <p className="text-buttonColor">{timerSeconds}</p>
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
