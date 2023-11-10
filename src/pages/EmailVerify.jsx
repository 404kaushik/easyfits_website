import React, {useState, useRef} from "react";
import { useNavigate } from "react-router-dom";

import image from "../assets/mvp/email.jpeg";

import { url } from "../components/shared/url";
import Token from "../components/shared/GetAccessToken";
import { Navbar } from "../components/Navbar/Navbar";
import { Contact } from "../components/Contact/Contact";

function EmailVerify() {
  const navigation = useNavigate();

  const otpref = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const [otp1, setopt1] = useState();
  const [otp2, setopt2] = useState();
  const [otp3, setopt3] = useState();
  const [otp4, setopt4] = useState();

  const [error, setError] = useState();

  const [accessToken,setAccessToken] = useState(null);

  const getAccessToken = async () => {
    try {
      const token = await Token();
      return token;
    } catch (error) {
      console.error("Error getting access token:", error);
      navigation("/SignUp");
    }
  };

  const fetchAccessToken = async () => {
    const atoken = await getAccessToken();
    setAccessToken(atoken);
  };

  fetchAccessToken();

  const confirmverificationcode = async (emailVerification) =>{

    const urlVerifyEmail = url.auth + `verify-email/${emailVerification}` ;

          fetch(urlVerifyEmail, {
              method: "GET",
              headers:{
                  Authorization: `Bearer ${accessToken}`,
              },
          }).then(res => res.json()).then(verifyRes => {
            if(verifyRes.statusCode === 403){
              setError("Invalid Verification Code. Please enter the 4-digit code sent to your email." );
            }
            else{
              //navigation("");
              console.log("Verification Complete");
            }
  });
}

const resendverificationcode = () =>{

  const urlResendCode = url.auth + "resend-verification-email";

  fetch(urlResendCode,{
    method: "GET",
    headers:{
        Authorization: `Bearer ${accessToken}`,
  },
  }).then(res => res.json()).then(resendRes => {
    if(resendRes.statusCode){
      setError("An error has occured. Please try to resend your verification again." );
    }
    else{
      setError("A verification code has been sent to your email. Please check your email for the verification code.");
    }
});
};


  function validate(otp1, otp2, otp3, otp4){

    if(otp1.length === 0 || !otp1){
      setError("Please enter the verification code");
    }
    else if(otp2.length === 0 || !otp2){
      setError("Please enter the verification code");
    }
    else if(otp3.length === 0 || !otp3){
      setError("Please enter the verification code");
    }
    else if(otp4.length === 0 || !otp4){
      setError("Please enter the verification code");
    }
    else{
      let otp = otp1 + otp2 + otp3 + otp4;
      otp = parseInt(otp, 10);
      
      confirmverificationcode(otp);
    }

  }
  
  function handleSubmit(e) {
    e.preventDefault();
    validate(otp1, otp2, otp3, otp4);
  }
  
  return (
    <>
      <Navbar />
      <div className="containerMvp">
        <div className="divider">
          <div className="otpTitle">
          <h1> Check your email</h1>
            <h2>A verification code has been sent to your email, please verify your account.</h2>
         
        <form method="POST" onSubmit={handleSubmit}>
          <div className="otp-field">
            <input type="text" maxLength="1" min = '0' max = "9" ref = {otpref[0]} onChange={(e) =>{setopt1(e.target.value); if(e.target.value.length === 1){otpref[1].current.focus()}}}/>
            <input type="text" maxLength="1" min = '0' max = "9" ref = {otpref[1]} onChange={(e) =>{setopt2(e.target.value); if(e.target.value.length === 1){otpref[2].current.focus()}}}/>
            <input type="text" maxLength="1" min = '0' max = "9" ref = {otpref[2]} onChange={(e) =>{setopt3(e.target.value); if(e.target.value.length === 1){otpref[3].current.focus()}}}/>
            <input type="text" maxLength="1" min = '0' max = "9" ref = {otpref[3]} onChange={(e) =>{setopt4(e.target.value);}}/>
          </div>

          {error && (<span style={{color: "red", alignSelf: "center", paddingHorizontal: 25, marginTop: "2%"}}> {error|| "Error"} </span> )}

          <div>
            <button type="submit" className="submitSignUp">
              Submit
            </button>
          </div>
          </form>

          <div className="smallText">Did not recieve our email? Click  <a onClick={resendverificationcode}>here</a> to resend an email again.</div>
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
