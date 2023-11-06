import { useState } from "react";
import "./App.module.css";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import EmailVerify from "./pages/EmailVerify";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/EmailVerify" element={<EmailVerify />}></Route>
      </Routes>
    </>
  );
}

export default App;
