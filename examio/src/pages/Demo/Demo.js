import React, { useState } from "react";
import HomeNav from "../../components/HomeNav";
// import ExamTimer from "../../components/ExamTimer";
import Timing from "../../components/Timing";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
import { useEffect } from "react";

const Demo = () => {
  const studentExam =
    "http://api.examio.feranmi.tech/api/student/take-exam?examId=30f38456-250f-4143-8dce-26b66da5c88c";

  const [exams, setExams] = useState([]);

  useEffect(() => {
    const getExam = () => {
      fetch(studentExam, {
        method: "GET",
        headers: {
          Authorization: "6a57ac37-21cc-46f8-9297-da754fe3972c",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response);
          console.log(response.questions);
          setExams(response.questions);
        });
    };
    getExam();
  }, []);

  return (
    <div>
      <HomeNav />
      <Timing />
      <div className="bg-lightColor pb-[5rem]">
        <h3 className="px-10 md:px-20 font-bold pb-5">Subject: Chemistry</h3>
        <p className="mx-auto text-center rounded-lg text-sm font-semibold mb-10 px-3 py-1 bg-examiopurple border w-[30%] text-lightColor">
          Questions
        </p>
        {exams.map((question) => (
          <div className="px-10 md:px-20 text-center">
            <h4 className="text-base">
              {" "}
              <span className="mr-3 rounded-full bg-buttonColor px-1 text-lightColor text-sm font-extrabold">
                1
              </span>
              {question.question}
            </h4>
            <div className="py-3 flex items-center gap-1 ml-10 font-bold pb-[2.5rem] justify-center">
              <span>(A)</span>
              <input type="radio" />
              <label>{question.options[0].text}</label>

              <span className="ml-2">(B)</span>
              <input type="radio" />
              <label>{question.options[1].text}</label>

              <span className="ml-2">(C)</span>
              <input type="radio" />
              <label>{question.options[2].text}</label>
            </div>
          </div>
        ))}
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

export default Demo;
