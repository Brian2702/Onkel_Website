import React, { Component } from "react";
import styles from "./FirstPage.module.css";
import LogoPicture from "./images/Pflegeaktiv24-Logo.png";


export default class FirstPage extends Component {
  render() {
    return (
      <div className={`${styles.main} ${styles.AnimationMain}`}>
        <div className="first-page">
          <div className={`${styles.backgroundImagePageOne} ${styles.AnimationBackgroundPageOne}`}>
            <div className={`${styles.AnimationLogoPageOne} ${styles.logoContainer}`}>
              <div>
                <img
                  src={LogoPicture}
                  alt="Hände"
                  className={styles.logo}
                ></img>
              </div>
            </div>
            <div className={`${styles.AnimationTextButton} ${styles.textButtonContainer}`}>
              <div className={styles.hauptueberschrift}>
                <h1>
                  Ihre Lebensqualität ist uns{" "}
                  <div className="highlight-container">
                    <span>wichtig</span>
                  </div>
                 
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
