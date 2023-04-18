import React from "react";
import HomeNav from "../../components/HomeNav";

const WriteExam = () => {
  const Subjects = [
    {
      id: 1,
      type: "checkbox",
      subject: "English Language",
      checked: true,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 2,
      type: "checkbox",
      subject: "Mathematics",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 3,
      type: "checkbox",
      subject: "Economics",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 4,
      type: "checkbox",
      subject: "Biology",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 5,
      type: "checkbox",
      subject: "Government",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 6,
      type: "checkbox",
      subject: "Physics",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 7,
      type: "checkbox",
      subject: "Chemistry",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 8,
      type: "checkbox",
      subject: "Literature in English",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 9,
      type: "checkbox",
      subject: "Accounting",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 10,
      type: "checkbox",
      subject: "Agricultural Science",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 11,
      type: "checkbox",
      subject: "Geography",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 12,
      type: "checkbox",
      subject: "Hausa",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 13,
      type: "checkbox",
      subject: "History",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 14,
      type: "checkbox",
      subject: "Home Economics",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 15,
      type: "checkbox",
      subject: "Islamic Religious Studies",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 16,
      type: "checkbox",
      subject: "Christian Religious Knowledge",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 17,
      type: "checkbox",
      subject: "Commerce",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 18,
      type: "checkbox",
      subject: "Computer Studies",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
    {
      id: 19,
      type: "checkbox",
      subject: "PHE",
      checked: false,
      className: "flex items-center text-sm md:text-md font-bold",
    },
  ];

  return (
    <div>
      <HomeNav />
      <div className="bg-lightColor px-10 md:px-20">
        <h2 className="py-5">Please Select your required Subject(s)</h2>
        {Subjects.map((subject) => (
          <div className={subject.className}>
            <input type={subject.type} checked={subject.checked} />
            <h3>{subject.subject}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WriteExam;
