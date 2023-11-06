import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./Navbar.module.css"
import {getImageUrl} from "../../utils"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    
    return(
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">EasyFits</a>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={
                        menuOpen
                        ? getImageUrl("nav/closeIcon.png")
                        : getImageUrl("nav/menuIcon.png")
                    }
                    alt="Menu Icon"
                    onClick={()=>{setMenuOpen(!menuOpen)}}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#about" className={styles.about}>About</a>
                    </li>
                    <li>
                        <a href="#team" className={styles.team}>Team</a>
                    </li>
                    <li>
                        <a href="#blog" className={styles.blog}>Blog</a>
                    </li>
                    <li>
                        { <a onClick={()=>navigate('/SignUp')}className={styles.Joinbtn}>Join the waitlist!</a> }
                    </li>
                </ul>
            </div>
        </nav>
    ) 
    
}