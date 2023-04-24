import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login } from "./pages/index";
import React from "react";
import "./index.css";
import Signup from "./pages/Signup/Signup";
import Homepage from "./pages/Homepage/Homepage";
import Demotest from "./pages/Demotest/Demotest";
import WriteExam from "./pages/WriteExam/WriteExam";
import ExamHistory from "./pages/ExamHistory/ExamHistory";
import ExamPage from "./pages/ExamPage/ExamPage";
import Demo from "./pages/Demo/Demo";
import ExaminerHome from "./pagesExaminer/Homepage/ExaminerHome";
import ExaminerDemo from "./pagesExaminer/ExaminerDemo/ExaminerDemo";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const userDetails = (data) => {
    let fullName = data.student.firstName + " " + data.student.lastName;
    console.log("Hi");
    setName(fullName);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login saveDetails={userDetails} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<Homepage userName={name} />} />
        <Route path="/demo" element={<Demotest />} />
        <Route path="/write-exam" element={<WriteExam />} />
        <Route path="/history" element={<ExamHistory />} />
        <Route path="/exam" element={<ExamPage />} />
        <Route path="/demotest" element={<Demo />} />

        {/* ============== ROUTES FOR EXAMINER ================ */}

        <Route path="/examiner" element={<ExaminerHome />} />
        <Route path="/examinerdemo" element={<ExaminerDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
