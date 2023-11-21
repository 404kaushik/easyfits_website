import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { url } from "../components/shared/url";
import Token from "../components/shared/GetAccessToken";
import { Carousel } from "../components/Mvp/Carousel";
import { Navbar } from "../components/Navbar/Navbar";
import { Contact } from "../components/Contact/Contact";

function BasicInfo() {  
  const navigation = useNavigate();

  const [name, setName] = useState();
  const [gender, setGender] = useState("male");
  let [height, setHeight] = useState();
  const [heightUnit, setHeightUnit] = useState("ft");
  let [weight, setWeight] = useState();
  const [weightUnit, setWeightUnit] = useState("kg");
  let [waist, setWaist] = useState();
  const [waistUnit, setWaistUnit] = useState("cm");
  let [cupSize, setCupSize] = useState(null);
  const [cupSizeUnit, setCupSizeUnit] = useState("cm");
  let [hip, setHip] = useState();
  const [hipUnit, setHipUnit] = useState("cm");
  const [shape, setShape] = useState("hourglass");
  const [error, setError] = useState();

  const [accessToken,setAccessToken] = useState(null);

  const getAccessToken = async () => {
    try {
      const token = await Token();
      return token;
    } catch (error) {
      console.error("Error getting access token:", error);
      navigation("/LogIn");
    }
  };

  const fetchAccessToken = async () => {
    const atoken = await getAccessToken();
    setAccessToken(atoken);
  };

  fetchAccessToken();

  function measurement(){

    const urlMeasurement = url.avatars + "me";

    fetch(urlMeasurement,{
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        height: height,
        waist:waist,
        hips: hip,
        weight: weight,
        shape: shape,
        name: name,
        cupSize: cupSize,

      }),
    }).then(res => res.json()).then(measurementInfo =>{
        console.log(measurementInfo);
    })


  }

  const decideShape = (index) =>{
    switch (index) {
      case 0: setShape("hourglass"); break;
      case 1: setShape("inverted-triangle"); break;
      case 2: setShape("rectangle"); break
      case 3: setShape("circle"); break;
      case 4: setShape("triangle"); break;
    }
  }

  function conversions(){
     if (heightUnit == "ft"){
      height = height * 30.48;
     }
     
     if (weightUnit == "lbs"){
      weight = weight / 2.2046;
     }

     if(hipUnit == "in"){
      hip = hip * 2.54;
     }

     if(cupSizeUnit == "in" && cupSize != null){
      cupSize = cupSize * 2.54;
     }

     if (waistUnit == "in"){
      waist = waist * 2.54;
     }

     measurement();

  }

  function validate(){
    const errors = {};

    if(!name || name.length === 0){
        setError("Please enter a name for your avatar");
        errors.name = true;
    }
    else if(!height || height.length === 0){
        setError("Please enter your height for your avatar");
        errors.height = true;
    }
    else if(!weight || weight.length === 0){
      setError("Please enter your weight for your avatar");
      errors.weight = true;
    }
    else if(!waist || waist.length === 0){
      setError("Please enter the measurement of your waist for your avatar");
      errors.waist = true;
    }
    else if(!hip || hip.length === 0){
      setError("Please enter the measurement of your waist for your avatar");
      errors.hip = true;
    }

    if (Object.keys(errors).length === 0) {
      height = parseFloat(height);
      weight = parseFloat(weight);
      waist = parseFloat(waist);
      hip = parseFloat(hip);
      if (cupSize != null)
      cupSize = parseFloat(cupSize)

      conversions();
    }
  }


  function handleSubmit (event) {
    event.preventDefault();
    validate()
  };


  return (
    <>
      <Navbar />
      <div className="containerMvp">
        <div className="divider">
          <div>
            <h1>Clone Me!</h1>
            
            <form method="POST" onSubmit={handleSubmit}>
              
              <div className="measurementDivider">
                <div>
                   <div className="inputInfo">
                      <label htmlFor="name">I'd call my avatar:</label>
                      <input placeholder="Name" id="name" required onChange={(e) => setName(e.target.value)}/>
                      {error && (<span style={{color: "red", alignSelf: "center", paddingHorizontal: 25, marginTop: "2%",}}>{error || "Error"}</span>)}
                    </div>

                    <div className="inputInfo">
                      <label htmlFor="gender">Gender</label>
                        <div className="dropdown">
                      <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                      </select>
                      </div>
                    </div>

                    <div className="inputInfo">
                      <label htmlFor="height">I'm this tall</label>
                      <div className="dropdownBlock">
                        <input type="number" id="height" required onChange={(e) => setHeight(e.target.value)}/>

                        <div className="dropdown">
                          <select required value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
                            <option value="ft">ft</option>
                            <option value="cm">cm</option>
                          </select>
                        </div>

                      </div>
                    </div>

                    <div className="inputInfo">
                      <label htmlFor="weight">I'm this small</label>
                      <div className="dropdownBlock">
                        <input type="number" id="weight" required onChange={(e) => setWeight(e.target.value)}/>

                        <div className="dropdown">
                          <select required value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
                            <option value="kg">kg</option>
                            <option value="lbs">lbs</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="inputInfo">
                      <label htmlFor="waist">Waist</label>
                      <div className="dropdownBlock">
                        <input type="number" id="waist" required onChange={(e) => setWaist(e.target.value)}/>

                        <div className="dropdown">
                          <select required value={waistUnit} onChange={(e) => setWaistUnit(e.target.value)}>
                            <option value="cm">cm</option>
                            <option value="in">in</option>
                          </select>
                        </div>
                      </div>
                    </div>

                  <div className="inputInfo">
                    <label htmlFor="bust">Chest (Not Applicable)</label>
                    <div className="dropdownBlock">
                      <input type="number" id="bust" onChange={(e) => setCupSize(e.target.value)}/>

                      <div className="dropdown">
                        <select value={cupSizeUnit} onChange={(e) => setCupSizeUnit(e.target.value)}>
                          <option value="cm">cm</option>
                          <option value="in">in</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="inputInfo">
                    <label htmlFor="hip">Hips</label>
                    <div className="dropdownBlock">
                      <input type="number" id="hip" required onChange={(e) => setHip(e.target.value)}/>

                      <div className="dropdown">
                        <select required value={hipUnit} onChange={(e) => setHipUnit(e.target.value)}>
                          <option value="cm">cm</option>
                          <option value="in">in</option>
                        </select>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="right">
                  <div>
                    <h3>
                      Which body shape could most resembles your body shape?{" "}
                    </h3>
                  </div>
                  <div>
                    <Carousel onShapeChange={decideShape}/>
                  </div>
                  <button type="submit" className="submitAvatar">Generate My Avatar!</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default BasicInfo;