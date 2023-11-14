import React, { Component } from "react";
import styles from "./FifthPage.module.css";
import MyPicture from "./images/Thomas-Feurstein_SchattenEffekt.png";
import { sendEmail } from "./SendMessage.js";

export default class FifthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      checkboxChecked: false,
      nameError: "",
      emailError: "",
      messageError: "",
      checkboxError: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckboxChange = () => {
    this.setState((prevState) => ({ checkboxChecked: !prevState.checkboxChecked, checkboxError: "" }));
  };

  handleSendMessageClick = () => {
    const { name, email, message, checkboxChecked } = this.state;

    // Überprüfe, ob alle Felder ausgefüllt sind und die Checkbox angeklickt wurde
    let isValid = true;

    if (!name) {
      this.setState({ nameError: "Bitte gib deinen Namen ein." });
      isValid = false;
    } else {
      this.setState({ nameError: "" });
    }

    if (!email) {
      this.setState({ emailError: "Bitte gib deine E-Mail-Adresse ein." });
      isValid = false;
    } else {
      this.setState({ emailError: "" });
    }

    if (!message) {
      this.setState({ messageError: "Bitte gib deine Nachricht ein." });
      isValid = false;
    } else {
      this.setState({ messageError: "" });
    }

    if (!checkboxChecked) {
      this.setState({ checkboxError: "Bitte akzeptiere die Datenschutzbestimmungen." });
      isValid = false;
    } else {
      this.setState({ checkboxError: "" });
    }

    if (isValid) {
      sendEmail(name, email, message);
    } 
  };

  render() {
    const {
      nameError,
      emailError,
      messageError,
      checkboxError,
      name,
      email,
      message,
      checkboxChecked,
    } = this.state;

    return (
      <div id="fifth-page" className={styles.FifthPage}>
        <div className={styles.mainContainer}>
          <div className={styles.aboutMe}>
            <div className={styles.myPicture}>
              <img src={MyPicture} alt="My Picture" />
            </div>
            <div className={styles.myNameAndRole}>
              <p className={styles.MyName}>~THOMAS FEURSTEIN</p>
              <p className={styles.MyRole}> Geschäftsführung </p>
            </div>
          </div>

          <div className={styles.contactMe}>
            <div className={styles.kontakt}>
              <h1>Kontakt</h1>
            </div>

            <div className={styles.nameInput}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="NAME*"
                value={name}
                onChange={this.handleInputChange}
              />
              <div className={styles.errorText}>{nameError}</div>
            </div>
            <div className={styles.emailInput}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="EMAIL*"
                value={email}
                onChange={this.handleInputChange}
              />
              <div className={styles.errorText}>{emailError}</div>
            </div>
            <div className={styles.messageInput}>
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="NACHRICHT*"
                value={message}
                onChange={this.handleInputChange}
              />
              <div className={styles.errorText}>{messageError}</div>
            </div>
            <div className={styles.datenschutzContainer}>
              <div>
                <input
                  type="checkbox"
                  className={styles.checkboxForData}
                  onChange={this.handleCheckboxChange}
                  checked={checkboxChecked}
                />
              </div>
              <div className={styles.textForDataProtection}>
                <p>
                  ICH BIN DAMIT EINVERSTANDEN, DASS MEINE PERSONENBEZOGENEN
                  DATEN ZUR BEARBEITUNG DIESER ANFRAGE VERARBEITET WERDEN
                  DÜRFEN. MEHR INFORMATIONEN IN UNSERER DATENSCHUTZERKLÄRUNG. *
                  PFLICHTFELD.
                </p>
                <div className={styles.errorText}>{checkboxError}</div>
              </div>
            </div>

            <div className={styles.buttonSend}>
              <button type="button" onClick={this.handleSendMessageClick}>
                Nachricht senden
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
