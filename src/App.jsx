import { useState } from "react";
import "./App.module.css";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import EmailVerify from "./pages/EmailVerify";
import LogIn from "./pages/LogIn";
import BasicInfo from "./pages/BasicInfo";
// import Changes from "./pages/Changes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/EmailVerify" element={<EmailVerify />}></Route>
        <Route path="/LogIn" element={<LogIn />}></Route>
        <Route path="/BasicInfo" element={<BasicInfo />}></Route>
        {/* <Route path="/Changes" element={<Changes />}></Route> */}

      </Routes>
    </>
  );
}

export default App;
