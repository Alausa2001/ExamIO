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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/demo" element={<Demotest />} />
        <Route path="/write-exam" element={<WriteExam />} />
        <Route path="/history" element={<ExamHistory />} />
        <Route path="/exam" element={<ExamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
