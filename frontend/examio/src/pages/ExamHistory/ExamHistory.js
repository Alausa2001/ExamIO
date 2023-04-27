import React from "react";
import HomeNav from "../../components/HomeNav";

const ExamHistory = () => {
  return (
    <div>
      <HomeNav />
      <div className="bg-lightColor pt-10 h-[150vh]">
        <h3 className="pl-10 md:pl-20 text-lg font-semibold pb-10">
          Student ID:{" "}
          <span className="text-base font-bold">
            6fdabf59-4563-4995-b2fa-2c93f2d0c41d
          </span>
        </h3>

        <table className="block bg-lightColor px-10 md:px-20">
          <thead className="h-[2rem]">
            <tr className="text-left bg-buttonColor text-lightColor">
              <th className="w-[25%] mr-3">Exam ID</th>
              <th className="w-[18%]">Course</th>
              <th className="w-[18%]">Duration</th>
              <th className="w-[18%]">Date</th>
              <th className="w-[18%]">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-left h-[5rem]">
              <td>06f3de30-bb2d-4218-8a3f-b72ad63f0505</td>
              <td>Chemistry</td>
              <td>120 mins</td>
              <td>19 April, 2023</td>
              <td>22:34 WAT</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamHistory;
