import React, { useEffect, useState } from 'react';
import gsap from "gsap";
import styles from './Loader.module.css';

export const Loader = () => {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [loadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            // Simulating loading progress
            setLoadingProgress(prevProgress => {
                const newProgress = prevProgress + 1;
                if (newProgress >= 100) {
                    clearInterval(interval); // Stop the interval when the progress reaches 100%
                    animateOutLoadingBar();
                    return 100;
                    
                }
                return newProgress;
            });
        }, 25); // Adjust the interval duration as needed

        return () => {
            clearInterval(interval); // Clean up the interval on unmount
        };
    }, []);

    const animateOutLoadingBar = () => {
        const loadingBar = document.querySelector(`.${styles.loading__bar}`)
        gsap.to(loadingBar, {
          duration: 5,
          rotate: "90deg",
          x: '1000%',
          onComplete: () => {
            removeLoaderFromDOM();
          },
        });

        const hidingLoadingExp = document.querySelector(`.${styles.loading__text}`)
        gsap.to(hidingLoadingExp, {
            duration: 1,
            opacity: 0,
            onComplete: () => {
                removeLoaderFromDOM();
            }, 
        });

        const hidingLoadingCount = document.querySelector(`.${styles.loading__counter}`)
        gsap.to(hidingLoadingCount, {
            duration: 1,
            opacity: 0,
            onComplete: () => {
                removeLoaderFromDOM();
            },
        });

        const hidingLoadingBox = document.querySelector(`.${styles.loading__box}`)
        gsap.to(hidingLoadingBox, {
            duration: 1,
            opacity: 0,
            onComplete: () => {
                removeLoaderFromDOM();
            },
        });

        const hidingLoadingScreen = document.querySelector(`.${styles.loading}`)
        gsap.to(hidingLoadingScreen, {
            duration: 3,
            opacity: 0,
            onComplete: () => {
                removeLoaderFromDOM();
            },
        });
    };

    const removeLoaderFromDOM = () => {
        setLoadingComplete(true);
        // Delay the removal for the duration of the animation
        setTimeout(() => {
          const loadingScreen = document.querySelector(`.${styles.loading}`);
          if (loadingScreen) {
            loadingScreen.remove();
          }
        }, 1000); // Adjust the time to match the animation duration
    };

    return (
        <div className={styles.loading}>
            <div className={styles.loading__box}>
                <div className={styles.loading__text}>
                    <div className={styles.loading__border}></div>
                    L
                    <div className={styles.loading__dot}></div>
                    ADING EXPERIENCE
                </div>
                <div className={styles.loading__bar}>
                    <div
                        className={styles.loading__barInner}
                        style={{ width: `${loadingProgress}%` }}
                    ></div>
                </div>
                <div className={styles.loading__counter}>
                    <span>0%</span>
                    <div className={styles.loading__number}>{loadingProgress}%</div>
                </div>
            </div>
        </div>
    );
};


