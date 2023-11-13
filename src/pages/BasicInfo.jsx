import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Contact } from "../components/Contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "../components/Mvp/Carousel";

function BasicInfo() {
  return (
    <>
      <Navbar />
      <div className="containerMvp">
          <div className="divider">
            <div>
              <h1>Clone Me!</h1>
              <form method="POST">
                <div className="measurementDivider">
                  <div>
                    <div className="inputInfo">
                      <label htmlFor="name">I'd call my avatar:</label>
                      <input placeholder="Name" id="name" required />
                    </div>
                    <div className="inputInfo">
                      <label htmlFor="gender">Gender</label>
                      <input id="gender" required />
                    </div>

                    <div className="inputInfo">
                      <label htmlFor="height">I'm this tall</label>
                      <div className="dropdownBlock">
                        <input type="number" id="height" required />
                        <div className="dropdown">
                          <select>
                            <option>ft</option>
                            <option>cm</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="inputInfo">
                      <label htmlFor="weight">I'm this small</label>
                      <div className="dropdownBlock">
                        <input type="number" id="weight" required />
                        <div className="dropdown">
                          <select>
                            <option>cm</option>
                            <option>in</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="inputInfo">
                      <label htmlFor="waist">Waist</label>
                      <div className="dropdownBlock">
                        <input type="number" id="waist" required />
                        <div className="dropdown">
                          <select>
                            <option>cm</option>
                            <option>in</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="inputInfo">
                      <label htmlFor="bust">Bust</label>
                      <div className="dropdownBlock">
                        <input type="number" id="bust" required />
                        <div className="dropdown">
                          <select>
                            <option>cm</option>
                            <option>in</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="inputInfo">
                      <label htmlFor="hip">Hips</label>
                      <div className="dropdownBlock">
                        <input type="number" id="hip" required />
                        <div className="dropdown">
                          <select>
                            <option>cm</option>
                            <option>in</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="right">
              <div>
                <h3>Which body shape could most resembles your body shape? </h3>
              </div>
              <div>
                <Carousel />
              </div>
            </div>
            <div></div>
          </div>
          <div className="spaceDiv">
            <button className="submitAvatar">Generate My Avatar!</button>
          </div>
      </div>
      <Contact />
    </>
  );
}

export default BasicInfo;
