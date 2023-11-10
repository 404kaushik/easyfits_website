import React,{useEffect} from 'react';

import styles from "./About.module.css";

export const About = () => {
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const logo = document.querySelector(`.${styles.aboutImage}`);
        if (logo) {
            const logoPosition = logo.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;

            if (logoPosition < screenPosition) {
                logo.classList.add(styles.slideIn);
            } else {
                logo.classList.remove(styles.slideIn); // Remove the class if the logo is not in the viewport
            }
        }
    };
    
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Us</h2>
            <div className={styles.content}>
                <img src= "src/assets/about/EasyFits_3.png" alt="EasyFits Logo" className={styles.aboutImage}  />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src="src/assets/about/cursorIcon.png" alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Our Story</h3>
                            <p>Lorem ipsum dolor sit amet consectetur ?</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="src/assets/about/serverIcon.png" alt="Server Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Our Mission</h3>
                            <p>Lorem ipsum dolor sit amet consectetur !</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="src/assets/about/uiIcon.png" alt="UI Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Our Values</h3>
                            <p>Lorem ipsum dolor sit amet consectetur .</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}