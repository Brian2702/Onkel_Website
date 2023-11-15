import React, { Component } from "react";
import styles from "./fourthPage.module.css";
import videoFile from "./images/Auf_den_punkt_gebracht_2.mp4"; // Passe den Pfad zu deiner MP4-Datei an

export default class FourthPage extends Component {
  
  render() {
    return (
      <div className="main">
        <video src={videoFile} autoPlay loop muted className={styles.videoDesign}></video>
      </div>
    );
  }
}
