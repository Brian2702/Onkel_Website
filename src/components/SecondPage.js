import React, { Component } from "react";
import styles from "./SecondPage.module.css";
import PictureOne from "./images/AdobeStock_264597255.jpeg";
import PictureTwo from "./images/AdobeStock_241429777.jpeg";
import PictureThree from "./images/fotolia_211647114.jpg";

export default class SecondPage extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const title = document.querySelector(`.${styles.titlePageTwo} h1`);
    const pictures = document.querySelector(`.${styles.pictures}`);

    const titlePosition = title.getBoundingClientRect().top;
    const picturesPosition = pictures.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    if (titlePosition < windowHeight) {
      title.style.opacity = 1;
      title.style.visibility = "visible";
      title.classList.add(styles.AnimationTitle);
    }

    if (picturesPosition < windowHeight) {
      pictures.style.opacity = 1;
      pictures.style.visibility = "visible";
      pictures.classList.add(styles.AnimationPictures);
    }
  };

  render() {
    return (
      <div id="second-page" className={styles.secondPage}>
        <div className={`${styles.titlePageTwo}`}>
          <h1>Zuhause leben</h1>
        </div>
        <div className={`${styles.pictures}`}>
          <div className={styles.pictureContainer}>
            <img src={PictureOne} alt="PictureOne-Fürsorge" />
            <div className={styles.imageText}>Fürsorge</div>
            <div className={styles.imageBackgroundText}>
              Dies ist ein Text mit einem coolen Hintergrund. Dies ist ein Text
              mit einem coolen Hintergrund Dies ist ein Text mit einem coolen
              Hintergrund Dies ist ein Text mit einem coolen Hintergrund Dies
              ist ein Text mit einem coolen Hintergrund Dies ist ein Text mit
              einem coolen Hintergrund Dies ist ein Text mit einem coolen
            </div>
          </div>
          <div className={styles.pictureContainer}>
            <img src={PictureTwo} alt="PictureTwo-Betreuung" />
            <div className={styles.imageText}>Betreuung</div>
            <div className={styles.imageBackgroundText}>
              Dies ist ein Text mit einem coolen Hintergrund. Dies ist ein Text
              mit einem coolen Hintergrund Dies ist ein Text mit einem coolen
              Hintergrund Dies ist ein Text mit einem coolen Hintergrund Dies
              ist ein Text mit einem coolen Hintergrund Dies ist ein Text mit
              einem coolen Hintergrund Dies ist ein Text mit einem coolen
            </div>
          </div>
          <div className={styles.pictureContainer}>
            <img src={PictureThree}  alt="PictureThree-Wohlbefinden" />
            <div className={styles.imageText}>Wohlbefinden</div>
            <div className={styles.imageBackgroundText}>
              Dies ist ein Text mit einem coolen Hintergrund. Dies ist ein Text
              mit einem coolen Hintergrund Dies ist ein Text mit einem coolen
              Hintergrund Dies ist ein Text mit einem coolen Hintergrund Dies
              ist ein Text mit einem coolen Hintergrund Dies ist ein Text mit
              einem coolen Hintergrund Dies ist ein Text mit einem coolen
            </div>
          </div>
        </div>
      </div>
    );
  }
}
