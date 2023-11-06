import React from "react";
import styles from "../App.module.css";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";
import { Hero } from "../components/Hero/Hero";
import { Loader } from "../components/Loader/Loader";
import { Navbar } from "../components/Navbar/Navbar";
import { Team } from "../components/Team/Team";

function LandingPage() {
    return (
      <div className={styles.App}>
        <Loader />
        <Navbar />
        <Hero />
        <About/>
        <Team />
        <Contact /> 
      </div>
    )
  }
  
  export default LandingPage;