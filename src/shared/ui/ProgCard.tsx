import React, { useEffect, useState } from "react";
const styles = require("./ProgCard.module.scss");
const imageSrc = require("AssetsIcons/carousel/programmingCard/Picture.png");
import cornerSrc from "AssetsIcons/carousel/programmingCard/Corner.svg";
import lineSrc from "AssetsIcons/carousel/programmingCard/Line.svg";
import cPlusSrc from "AssetsIcons/carousel/programmingCard/C++.svg";
import goSrc from "AssetsIcons/carousel/programmingCard/Go.svg";
import jsSrc from "AssetsIcons/carousel/programmingCard/JS.svg";
import pythonSrc from "AssetsIcons/carousel/programmingCard/Python.svg";

interface SlideProps {
  isActive: boolean;
}

export const ProgCard = ({ isActive }: SlideProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(isActive);
  }, [isActive]);

  return (
    <div className={`${styles.slide} ${isVisible ? styles.slide__active : ""}`}>
      <div className={styles.slide__top}>
        <img src={cornerSrc} className={styles.slide__top_firstCorner} alt="" />

        <img src={lineSrc} className={styles.slide__top_Line} alt="" />

        <img
          src={cornerSrc}
          className={styles.slide__top_secondCorner}
          alt=""
        />
      </div>

      <div className={styles.slide__main}>
        <img
          className={styles.slide__main_image}
          src={imageSrc}
          alt="programming image"
        />
        <div className={styles.slide__main_title}>
          Программируй будущее уже сегодня!
        </div>
        <div className={styles.slide__main_lang}>
          <img
            src={cPlusSrc}
            className={styles.slide__main_lang_cplus}
            alt=""
          />

          <img src={jsSrc} className={styles.slide__main_lang_js} alt="" />

          <img src={goSrc} className={styles.slide__main_lang_go} alt="" />

          <img
            src={pythonSrc}
            className={styles.slide__main_lang_python}
            alt=""
          />
        </div>
      </div>

      <div className={styles.slide__bottom}>
        <img
          src={cornerSrc}
          className={styles.slide__bottom_thirdCorner}
          alt=""
        />

        <div className={styles.slide__bottom_signature}>
          Изучай востребованные языки программирования и создавай приложения,
          которые изменят мир. От основ до продвинутых техник — всё, что нужно
          для уверенной работы в IT
        </div>
        <img
          src={cornerSrc}
          className={styles.slide__bottom_fourthCorner}
          alt=""
        />
      </div>
    </div>
  );
};
