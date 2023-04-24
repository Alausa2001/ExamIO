import React from "react";

const Subjects = () => {
  const Subjects = [
    {
      id: 1,
      type: "checkbox",
      subject: "English Language",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 2,
      type: "checkbox",
      subject: "Mathematics",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 3,
      type: "checkbox",
      subject: "Economics",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 4,
      type: "checkbox",
      subject: "Biology",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 5,
      type: "checkbox",
      subject: "Government",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 6,
      type: "checkbox",
      subject: "Physics",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 7,
      type: "checkbox",
      subject: "Chemistry",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 8,
      type: "checkbox",
      subject: "Literature in English",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 9,
      type: "checkbox",
      subject: "Accounting",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 10,
      type: "checkbox",
      subject: "Agricultural Science",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 11,
      type: "checkbox",
      subject: "Geography",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 12,
      type: "checkbox",
      subject: "Hausa",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 13,
      type: "checkbox",
      subject: "History",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 14,
      type: "checkbox",
      subject: "Home Economics",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 15,
      type: "checkbox",
      subject: "Islamic Religious Studies",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 16,
      type: "checkbox",
      subject: "Christian Religious Knowledge",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 17,
      type: "checkbox",
      subject: "Commerce",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 18,
      type: "checkbox",
      subject: "Computer Studies",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
    {
      id: 19,
      type: "checkbox",
      subject: "PHE",
      className:
        "flex items-center text-[0.9rem] md:text-[1.2rem] md:font-medium gap-2 pb-2",
    },
  ];

  return (
    <div className="bg-lightColor px-10 md:px-20">
      <h2 className="py-5 md:pt-10 text-[1rem] md:text-[1.2rem] font-extrabold">
        Please Select your required Subject(s)
      </h2>
      <div className="md:grid md:grid-cols-5 Md:gap-2">
        <select>
          {Subjects.map((subject) => (
            <option>{subject.subject}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Subjects;
