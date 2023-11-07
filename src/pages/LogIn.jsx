import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";

import googleLogo from "../assets/mvp/logo/google.png";
import { FaApple } from "react-icons/fa";
import image from "../assets/mvp/EasyFitsStart.png";
import { url } from "../components/url";
import { Navbar } from "../components/Navbar/Navbar";
import { Contact } from "../components/Contact/Contact";

function LogIn() {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error_email, setErrorEmail] = useState("");
  const [error_password, setErrorPassword] = useState("");
  const [error, sameUser] = useState("");
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex to check if the email entered is valid
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/; // regex to check if the password entered is valid

  function createAccount(email, password) {
    const urlRegister = url.auth + "register";

    fetch(urlRegister, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then(async (tokens) => {
        console.log(tokens);
        if (tokens.statusCode == 409) {
          sameUser("An account with the same email already exist");
        } else {
          console.log("Account successfully created");

          Cookies.remove("userId");

          Cookies.set("userId", tokens.id);

          const urlLogin = url.auth + "login";

          fetch(urlLogin, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          })
            .then((res) => res.json())
            .then(async (receivedTokens) => {
              console.log(receivedTokens);
              Cookies.remove("refreshToken");

              Cookies.set("refreshToken", receivedTokens.refreshToken, {
                expires: 30,
                secure: true,
                httpOnly: true,
              });
            })
            .then(() => {
              //   navigation("/email-verification");
              console.log("Login successful");
            });
        }
      });
  }

  function validate(email, password) {
    const errors = {};
    if (!email || email.length === 0) {
      setErrorEmail("Please enter your email to sign up");
      errors.email = true;
    } else if (!EMAIL_REGEX.test(email)) {
      setErrorEmail(
        "Email entered is not a valid email. Please enter a valid email"
      );
      errors.email = true;
    } else {
      setErrorEmail(null);
    }

    if (!password || password.length === 0) {
      setErrorPassword("Please enter your password to sign up");
      errors.password = true;
    } else if (password.length < 8) {
      setErrorPassword("Your Password should at least be 8 characters long");
      errors.password = true;
    } else if (!PASSWORD_REGEX.test(password)) {
      setErrorPassword(
        "The password entered is not a valid password. Your password should contain at least 1 lowercase, 1 uppercase letter, 1 number, and 1 special character"
      );
      errors.password = true;
    } else {
      setErrorPassword(null);
    }

    if (Object.keys(errors).length === 0) {
      createAccount(email, password);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    validate(email, password);
  }
  return (
    <>
      <Navbar />
      <div className="containerMvp">
        <div className="divider">
          <div>
            <h1>Log In!</h1>

            <div className="externalSignUp">
              <button className="google">
                <img src={googleLogo} width="25px"></img>Continue with Google
              </button>
              <button className="apple">
                <FaApple size={22} />Continue with Apple
              </button>
            </div>

            <div className="styledSignUp">
              <hr />
              <p> or log in with your email address </p>
            </div>

            <form method="POST" onSubmit={handleSubmit}>
              <div className={error_email ? "error" : ""}>
                <label htmlFor="email" className={error_email ? "error" : ""}>
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  id="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error_email && (
                  <span
                    style={{
                      color: "red",
                      alignSelf: "center",
                      paddingHorizontal: 25,
                      marginTop: "2%",
                    }}
                  >
                    {error_email || "Error"}
                  </span>
                )}
              </div>

              <div className={error_password ? "error" : ""}>
                <label htmlFor="psw" className={error_password ? "error" : ""}>
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  id="psw"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error_password && (
                  <span
                    style={{
                      color: "red",
                      alignSelf: "center",
                      paddingHorizontal: 25,
                      marginTop: "2%",
                    }}
                  >
                    {error_password || "Error"}
                  </span>
                )}
              </div>

              <div className="checkbox">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Remember me</label>
              </div>

             <button type="submit" className="submitSignUp">
                Log in
              </button>
            </form>
            <p className="smallText">Don't have an account?  <Link to="/SignUp">Sign Up</Link></p>
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

export default LogIn;
