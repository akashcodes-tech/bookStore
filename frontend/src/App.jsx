import React from "react";
import Home from "./Homepage/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./Coursepage/Courses";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
