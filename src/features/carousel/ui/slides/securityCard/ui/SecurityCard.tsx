import React from "react";
import Corner from "../../../../../../icons/carousel/Corner";
import Ellipse from "../../../../../../icons/carousel/Ellipse";
const styles = require("./Security.module.scss");
const imageSrc = require("../../../../../../assets/icons/carousel/infosecurityCard/Picture.png");

interface SlideProps {
  isActive: boolean;
}

export const SecurityCard = ({ isActive }: SlideProps) => {
  return (
    <div className={`${styles.slide} ${isActive ? styles.slide__active : ""}`}>
      <div className={styles.slide__top}>
        <Corner className={styles.slide__top_firstCorner} />

        <Ellipse className={styles.slide__top_firstEllipse} />

        <Ellipse className={styles.slide__top_secondEllipse} />

        <Corner className={styles.slide__top_secondCorner} />
      </div>

      <div className={styles.slide__main}>
        <div className={styles.slide__main_title}>
          Защищай данные в цифровом мире!
        </div>

        <img
          className={styles.slide__main_image}
          src={imageSrc}
          alt="security image"
        />

        <div className={styles.slide__main_signature}>
          Узнай, как эффективно противостоять кибератакам и защищать информацию
          от угроз. Обучись методам шифрования, анализу уязвимостей и
          кибербезопасности на всех уровнях.
        </div>
      </div>

      <div className={styles.slide__bottom}>
        <Corner className={styles.slide__bottom_thirdCorner} />

        <Ellipse className={styles.slide__bottom_thirdEllipse} />

        <Ellipse className={styles.slide__bottom_fourthEllipse} />

        <Corner className={styles.slide__bottom_fourthCorner} />
      </div>
    </div>
  );
}
