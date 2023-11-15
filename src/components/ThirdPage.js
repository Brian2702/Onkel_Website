import React, { Component } from "react";
import styles from "./ThirdPage.module.css";
import firstPicture from "./images/Fotolia_46783803_M.jpg";
import secondPicture from "./images/Fotolia_56616092_M.jpg";
import thirdPicture from "./images/fotolia_68418141.jpg"

export default class ThirdPage extends Component {
  render() {
    return (
      <div id="third-page" className={styles.thirdPage}>
        <div className={styles.firstContainer}>
          <h1>Unsere Mission</h1>
          <div className={styles.subContainer}>
            <p>
              Ihre Lebensqualität bedeutet für uns nicht nur dass Sie gut
              versorgt sind, sondern auch dass wir mit Wärme, Mitgefühl und
              Menschlichkeit zur Seite stehen. Allem voran ermöglichen wir
              Ihnen, unter Ausschöpfung sämtlicher Ressourcen, ein würdevolles
              Leben in gewohnter Umgebung
            </p>
            <img src={firstPicture} alt="Unsere MIssion-Picture"></img>
          </div>
        </div>

        <div className={styles.SecondContainer}>
          <h1>individuelle Betreuungskraft</h1>
          <div className={styles.secondSubContainer}>
            <img
              src={secondPicture}
              alt="individuelle Betreuungskraft-Picture"
            ></img>
            <p>
              Ihre Lebensqualität bedeutet für uns nicht nur dass Sie gut
              versorgt sind, sondern auch dass wir mit Wärme, Mitgefühl und
              Menschlichkeit zur Seite stehen. Allem voran ermöglichen wir
              Ihnen, unter Ausschöpfung sämtlicher Ressourcen, ein würdevolles
              Leben in gewohnter Umgebung
            </p>
          </div>
        </div>

        <div className={styles.thirdContainer}>
          <h1>Interne Qualitätssicherung</h1>
          <div className={styles.subContainer}>
            <p>
              Ihre Lebensqualität bedeutet für uns nicht nur dass Sie gut
              versorgt sind, sondern auch dass wir mit Wärme, Mitgefühl und
              Menschlichkeit zur Seite stehen. Allem voran ermöglichen wir
              Ihnen, unter Ausschöpfung sämtlicher Ressourcen, ein würdevolles
              Leben in gewohnter Umgebung
            </p>
            <img src={thirdPicture} alt="Qualitätssicherung-Picture"></img>
          </div>
        </div>
      </div>
    );
  }
}
