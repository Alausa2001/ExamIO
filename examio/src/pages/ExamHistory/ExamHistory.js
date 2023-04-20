import React from "react";
import HomeNav from "../../components/HomeNav";

const ExamHistory = () => {
  return (
    <div>
      <HomeNav />
      <div className="bg-lightColor pt-10">
        <h3 className="pl-10 md:pl-20 text-lg font-semibold">
          Student ID:{" "}
          <span className="text-base font-bold">
            6fdabf59-4563-4995-b2fa-2c93f2d0c41d
          </span>
        </h3>
        <table className="inline-block ml-10 md:ml-20 py-3 mt-5 bg-buttonColor text-lightColor">
          <thead className="font-extrabold">
            <td className="inline-block px-5 md:px-10">Exam ID</td>
            <td className="inline-block px-5 md:px-10">Course/Subject</td>
            <td className="inline-block px-5 md:px-10">Duration</td>
            <td className="inline-block px-5 md:px-10">Date</td>
            <td className="inline-block px-5 md:px-10">Time</td>
          </thead>
          <tbody>
            <td>06f3de30-bb2d-4218-8a3f-b72ad63f0505</td>
            <td>Chemistry</td>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamHistory;
