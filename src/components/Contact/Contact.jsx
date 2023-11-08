import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src="src/assets/contact/emailIcon.png" alt="Email Icon" />
                <a href="mailto:tbob5789@gmail.com">tbob5789@gmail</a>
            </li>
            <li className={styles.link}>
                <img src="src/assets/contact/linkedinIcon.png" alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/in/kaushik-tumu-b6103a153/">linkedin.com/kaushiknag</a>
            </li>
            <li className={styles.link}>
                <img src="src/assets/contact/githubIcon.png" alt="Github Icon" />
                <a href="https://www.github.com/404kaushik">github.com/404kaushik</a>
            </li>
        </ul>
    </footer>
};