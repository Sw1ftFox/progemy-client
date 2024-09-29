import React from "react";
const styles = require("../../../styles/Main/Carousel/Design.module.scss");
const imageSrc = require("../../../../assets/svg/carousel/designCard/Picture.png");

export default function DesignCard() {
  return (
    <div className={styles.slide}>
      <div className={styles.slide__top}>
        <svg
          className={styles.slide__top_firstCorner}
          width="122"
          height="121"
          viewBox="0 0 122 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 1.5H120"
            stroke="#BB8E8E"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M2 3.5L1.99999 119.5"
            stroke="#BB8E8E"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
        <svg
          className={styles.slide__top_secondCorner}
          width="122"
          height="121"
          viewBox="0 0 122 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 1.5H120"
            stroke="#BB8E8E"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M2 3.5L1.99999 119.5"
            stroke="#BB8E8E"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
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
        <svg
          className={styles.slide__bottom_thirdCorner}
          width="122"
          height="121"
          viewBox="0 0 122 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 1.5H120"
            stroke="#BB8E8E"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M2 3.5L1.99999 119.5"
            stroke="#BB8E8E"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
        <svg
          className={styles.slide__bottom_fourthCorner}
          width="122"
          height="121"
          viewBox="0 0 122 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 1.5H120"
            stroke="#BB8E8E"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M2 3.5L1.99999 119.5"
            stroke="#BB8E8E"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
