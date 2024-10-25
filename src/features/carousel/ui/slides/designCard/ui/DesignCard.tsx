import React from "react";
const styles = require("./Design.module.scss");
const imageSrc = require("../../../../../../assets/icons/carousel/designCard/Picture.png");
import cornerSrc from "../../../../../../assets/icons/carousel/designCard/Corner.svg";

interface SlideProps {
  isActive: boolean;
}

export const DesignCard = ({ isActive }: SlideProps) => {
  return (
    <div className={`${styles.slide} ${isActive ? styles.slide__active : ""}`}>
      <div className={styles.slide__top}>
        <img src={cornerSrc} className={styles.slide__top_firstCorner} alt="" />
        <img
          src={cornerSrc}
          className={styles.slide__top_secondCorner}
          alt=""
        />
      </div>

      <div className={styles.slide__main}>
        <div className={styles.slide__main_text}>
          <div className={styles.slide__main_text_title}>
            Создавай визуальные шедевры!
          </div>
          <div className={styles.slide__main_text_signature}>
            Овладей навыками цифрового дизайна и научись воплощать идеи в яркие
            визуальные проекты. От основ работы в Photoshop и Illustrator до
            полного понимания UX/UI
          </div>
        </div>

        <img
          className={styles.slide__main_image}
          src={imageSrc}
          alt="design image"
        />
      </div>

      <div className={styles.slide__bottom}>
        <img
          src={cornerSrc}
          className={styles.slide__bottom_thirdCorner}
          alt=""
        />
        <img
          src={cornerSrc}
          className={styles.slide__bottom_fourthCorner}
          alt=""
        />
      </div>
    </div>
  );
}
