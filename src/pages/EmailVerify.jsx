import React from "react";
import image from "../assets/mvp/email.jpeg";

import { url } from "../components/url";
import { Navbar } from "../components/Navbar/Navbar";
import { Contact } from "../components/Contact/Contact";

function EmailVerify() {
  return (
    <>
      <Navbar />
      <div className="containerMvp">
        <div className="divider">
          <div className="otpTitle">
          <h1> Check your email</h1>
            <h2>A verification code has been sent to your email, please verify your account.</h2>
         
        

          <div className="otp-field">
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
          </div>
          <div className="smallText">Did not recieve our email? Click  <a href="">here</a> to resend an email again.</div>
          </div>
          <div>
            <img src={image} width={500}></img>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default EmailVerify;
