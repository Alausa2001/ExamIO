import { useState } from "react";

const ExamID = () => {
  const [examID, setExamID] = useState("");
  const [error, setError] = useState(false);

  const examId = {
    type: "text",
    name: "examId",
    id: "examId",
    pholder: "Kindly input your Exam ID",
    hFor: "examId",
    cName: "bg-lightColor px-10 md:px-20 pt-10",
    labelCName: "text-[1.5rem] font-bold",
  };

  return (
    <div className={examId.cName}>
      <label htmlFor={examId.hFor} className={examId.labelCName}>
        Exam ID
      </label>{" "}
      <br />
      <input
        type={examId.type}
        name={examId.name}
        id={examId.id}
        placeholder={examId.pholder}
        required
      />
    </div>
  );
};

export default ExamID;
