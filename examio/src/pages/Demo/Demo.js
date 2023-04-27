import React, { useState } from "react";
import HomeNav from "../../components/HomeNav";
// import ExamTimer from "../../components/ExamTimer";
import Timing from "../../components/Timing";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
import { useEffect } from "react";
import Modal3 from "../../components/Modal3";

const Demo = (props) => {
  let [page, setPage] = useState(0);
  let [questionNums, setQuestionNums] = useState([1, 2, 3, 4, 5]);
  let [userAnswers, setUserAnswers] = useState([]);
  // const [correctAnswers, setCorrectAnswers] = useState([]);
  let [totalScore, setTotalScore] = useState(0);
  let [totalQuestions, setTotalQuestions] = useState(0);

  const totalAnswers =
    "http://api.examio.feranmi.tech/api/student/end-exam?examId=3f6ed250-a258-48ba-b7b4-32ba231d7475";

  const [showModal3, setShowModal3] = useState(false);
  function toggleModal() {
    fetch(totalAnswers, {
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
        let score = 0;
        let answers = userAnswers;
        for (let i = 0; i < response.answers.length; i++) {
          if (answers[i] === response.answers[i]) {
            score++;
          }
        }
        console.log(response);
        setTotalScore(score);
        setTotalQuestions(response.answers.length);
      });
    setShowModal3(!showModal3);
  }

  const handlePageIncrease = () => {
    if (page === 2) {
      setPage(2);
    } else {
      setPage(page + 1);
      const newNums = questionNums.map((num) => {
        return num + 5;
      });
      // setUserAnswers([]);
      console.log(userAnswers);
      setQuestionNums(newNums);
      setSelectedRadio(null);
    }
  };

  const handlePageDecrease = () => {
    if (page === 0) {
      setPage(0);
    } else {
      setPage(page - 1);
      const newNums = questionNums.map((num) => {
        return num - 5;
      });
      // setUserAnswers([]);
      console.log(userAnswers);
      setQuestionNums(newNums);
    }
  };

  const studentExam = `http://api.examio.feranmi.tech/api/student/take-exam?examId=3f6ed250-a258-48ba-b7b4-32ba231d7475&page=${page}`;

  const [exams, setExams] = useState([]);
  const [course, setCourse] = useState("");

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
          setCourse(response.questions[0].course);
          // setCorrectAnswers(response.answers);
        });
    };
    getExam();
  }, [studentExam]);

  const [selectedRadio, setSelectedRadio] = useState(null);

  function handleRadioChange(e) {
    setSelectedRadio(e.target.value);
  }

  function updateUserAnswers(answer, index) {
    let arr = userAnswers;
    arr[index - 1] = answer;
    setUserAnswers(arr);
    console.log(index);
  }

  return (
    <div>
      <HomeNav userName={props.userName} />
      <div>
        <Timing />
      </div>
      <div className="bg-lightColor pb-[5rem]">
        <h3 className="px-10 md:px-20 font-bold text-center text-lg md:text-xl pb-5">
          Subject: {course}
        </h3>
        <p className="mx-auto text-center rounded-lg text-sm font-semibold mb-10 px-3 py-1 bg-examiopurple border w-[30%] text-lightColor">
          Questions
        </p>
        {exams.map((question) => (
          <div className="px-10 md:px-20 text-center">
            <h4 className="text-base">
              {" "}
              <span className="mr-3 rounded-full bg-buttonColor px-1 text-lightColor text-sm font-extrabold">
                {questionNums[exams.indexOf(question)]}
              </span>
              {question.question}
            </h4>
            <div className="py-3 flex items-center gap-1 ml-10 font-bold pb-[2.5rem] justify-center">
              <span>(A)</span>
              <input
                type="radio"
                name={question.no}
                value={0}
                checked={selectedRadio === 0}
                onChange={(e) => {
                  updateUserAnswers(e.target.value, question.no);
                  handleRadioChange();
                }}
                // onLoad={(e) => {
                //   // console.log(e.target);
                //   if (userAnswers[question.no - 1] === 0) {
                //     e.target.checked = true;
                //   } else {
                //     e.target.checked = false;
                //   }
                // }}
              />
              <label>{question.options[0].text}</label>

              <span className="ml-2">(B)</span>
              <input
                type="radio"
                name={question.no}
                value={1}
                checked={selectedRadio === 1}
                onChange={(e) => {
                  updateUserAnswers(e.target.value, question.no);
                  handleRadioChange();
                }}
              />
              <label>{question.options[1].text}</label>

              <span className="ml-2">(C)</span>
              <input
                type="radio"
                name={question.no}
                value={2}
                checked={selectedRadio === 2}
                onChange={(e) => {
                  updateUserAnswers(e.target.value, question.no);
                  handleRadioChange();
                }}
              />
              <label>{question.options[2].text}</label>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row px-10 md:px-20 py-5 justify-between text-lightColor">
        <div
          className="flex items-center gap-1 cursor-pointer md:hover:bg-buttonColor md:hover:px-5"
          onClick={handlePageDecrease}
          style={{ visibility: page === 0 ? "hidden" : "visible" }}
        >
          <AiFillCaretLeft />
          Previous
        </div>
        <div
          className="flex items-center gap-1 cursor-pointer md:hover:bg-buttonColor md:hover:px-5"
          onClick={() => {
            toggleModal();
          }}
        >
          <BsFillSendFill />
          Submit
        </div>
        <div
          className="flex items-center gap-1 cursor-pointer md:hover:bg-buttonColor md:hover:px-5"
          onClick={handlePageIncrease}
          style={{ visibility: page === 2 ? "hidden" : "visible" }}
        >
          <AiFillCaretRight />
          Next
        </div>
      </div>
      <Modal3
        start={showModal3}
        onStart={toggleModal}
        score={totalScore}
        questions={totalQuestions}
      />
    </div>
  );
};

export default Demo;
