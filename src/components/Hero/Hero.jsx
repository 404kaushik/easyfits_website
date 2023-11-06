import React from "react";

import styles from "./Hero.module.css";
//import { getImageUrl } from "../../utils";
import image from "/src/assets/hero/EasyFits_2.png";


export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>EasyFits</h1>
            <p className={styles.description}>Your first ever personalized virtual fitting room.</p>
            <a href="mailto:tbob5789@mail.com" className={styles.contactBtn}>Get In Touch!</a>
        </div>
        <img src={image} alt="Hero" className={styles.heroImg} />
        <div className={StyleSheet.topBlur} />
        <div className={StyleSheet.bottomBlur} />
    </section>;
}