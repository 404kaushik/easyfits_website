import React from 'react';

import styles from "./Team.module.css";

export const Team = () => {
    return <section className={styles.team} id="team">
        <div className={styles.row}>
            <h1 className={styles.teamh}><span className={styles.our}>Our</span> team</h1>
        </div>
        <div className={styles.row}>
            {/* COLUMN 1 */}
            <div className={styles.column}>
                <div className={styles.card}>
                    <div className={styles.img_container}>
                        <img src="src/assets/team/safiya.jpeg" className={styles.imgContainer} alt="Safiya CEO" />
                    </div>
                    <h3>Safiya Khaki</h3>
                    <p>Founder</p>
                    <ul className={styles.icons}>
                        <li className={styles.icon}>                            
                            <a href="#">
                                <img src="src/assets/team/twitter.png" alt="Twitter Icon" />
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a href="#">
                                <img src="src/assets/team/instagram.png" alt="Instagram Icon" />
                            </a>                            
                        </li>
                        <li className={styles.icon}>                            
                            <a href="https://www.linkedin.com/in/safiya-khaki/">
                            <img src="src/assets/team/linkedin.png" alt="LinkedIn Icon" href="https://www.linkedin.com/in/kaushik-tumu-b6103a153/"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* COLUMN 2 */}
            <div className={styles.column}>
                <div className={styles.card}>
                    <div className={styles.img_container}>
                        <img src="src/assets/team/joseph.png" className={styles.imgContainer} alt="Joseph COO" />
                    </div>
                    <h3>Joseph</h3>
                    <p>Founder</p>
                    <ul className={styles.icons}>
                        <li className={styles.icon}>                            
                            <a href="#">
                                <img src="src/assets/team/twitter.png" alt="Twitter Icon" />
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a href="https://www.linkedin.com/in/kaushik-tumu-b6103a153/">
                                <img src="src/assets/team/instagram.png" alt="Instagram Icon" />
                            </a>                            
                        </li>
                        <li className={styles.icon}>                            
                            <a href="#">
                            <img src="src/assets/team/linkedin.png" alt="LinkedIn Icon" href="https://www.linkedin.com/in/kaushik-tumu-b6103a153/"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* COLUMN 3 */}
            <div className={styles.column}>
                <div className={styles.card}>
                    <div className={styles.img_container}>
                        <img src="src/assets/team/user.png" className={styles.imgContainer} alt="User COO" />
                    </div>
                    <h3>User</h3>
                    <p>Founder</p>
                    <ul className={styles.icons}>
                        <li className={styles.icon}>                            
                            <a href="#">
                                <img src="src/assets/team/twitter.png" alt="Twitter Icon" />
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a href="https://www.linkedin.com/in/kaushik-tumu-b6103a153/">
                                <img src="src/assets/team/instagram.png" alt="Instagram Icon" />
                            </a>                            
                        </li>
                        <li className={styles.icon}>                            
                            <a href="#">
                            <img src="src/assets/team/linkedin.png" alt="LinkedIn Icon" href="https://www.linkedin.com/in/kaushik-tumu-b6103a153/"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
};
