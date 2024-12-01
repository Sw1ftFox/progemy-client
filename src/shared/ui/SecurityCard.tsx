import React, { useEffect, useState } from "react";
import { Corner } from "../index";
import { Ellipse } from "../index";
const styles = require("./Security.module.scss");
const imageSrc = require("AssetsIcons/carousel/infosecurityCard/Picture.png");

interface SlideProps {
  isActive: boolean;
}

export const SecurityCard = ({ isActive }: SlideProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(isActive);
  }, [isActive]);

  return (
    <div className={`${styles.slide} ${isVisible ? styles.slide__active : ""}`}>
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
};
