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
import { useState, createContext } from "react";

const userContext = createContext();

function App() {
  const [name, setName] = useState("");

  const userDetails = (data) => {
    let fullName = data.student.firstName + " " + data.student.lastName;
    setName(fullName);
  };

  return (
    <userContext.Provider value={name}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login saveDetails={userDetails} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/homepage" element={<Homepage userName={name} />} />
          <Route path="/demo" element={<Demotest userName={name} />} />
          <Route path="/write-exam" element={<WriteExam userName={name} />} />
          <Route path="/history" element={<ExamHistory userName={name} />} />
          <Route path="/exam" element={<ExamPage userName={name} />} />
          <Route path="/demotest" element={<Demo userName={name} />} />

          {/* ============== ROUTES FOR EXAMINER ================ */}

          <Route path="/examiner" element={<ExaminerHome />} />
          <Route path="/examinerdemo" element={<ExaminerDemo />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
