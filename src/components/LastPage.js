import React, { Component } from "react";
import styles from "./LastPage.module.css";
import contactPicture from "./images/KontaktInfo_transparent.png";

export default class LastPage extends Component {
  render() {
    return (
      <div className={styles.lastPage}>
        <div className={styles.kontaktInfo}>
          <img src={contactPicture} alt="Kontaktinfo"></img>
        </div>
      </div>
    );
  }
}
