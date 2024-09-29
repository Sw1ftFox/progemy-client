import React from "react";
const styles = require("../../../styles/Main/Carousel/Security.module.scss");
const imageSrc = require("../../../../assets/svg/carousel/infosecurityCard/Picture.png");

export default function SecurityCard() {
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
            stroke="#7CFFD8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M2 3.5L1.99999 119.5"
            stroke="#7CFFD8"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <svg
          className={styles.slide__top_firstEllipse}
          width="81"
          height="81"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="40.5"
            cy="40.5"
            r="36"
            fill="#7CFFD8"
            fill-opacity="0.3"
            stroke="#7CFFD8"
            stroke-width="9"
          />
        </svg>

        <svg
          className={styles.slide__top_secondEllipse}
          width="81"
          height="81"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="40.5"
            cy="40.5"
            r="36"
            fill="#7CFFD8"
            fill-opacity="0.3"
            stroke="#7CFFD8"
            stroke-width="9"
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
            stroke="#7CFFD8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M2 3.5L1.99999 119.5"
            stroke="#7CFFD8"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
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
            stroke="#7CFFD8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M2 3.5L1.99999 119.5"
            stroke="#7CFFD8"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <svg
          className={styles.slide__bottom_thirdEllipse}
          width="81"
          height="81"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="40.5"
            cy="40.5"
            r="36"
            fill="#7CFFD8"
            fill-opacity="0.3"
            stroke="#7CFFD8"
            stroke-width="9"
          />
        </svg>

        <svg
          className={styles.slide__bottom_fourthEllipse}
          width="81"
          height="81"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="40.5"
            cy="40.5"
            r="36"
            fill="#7CFFD8"
            fill-opacity="0.3"
            stroke="#7CFFD8"
            stroke-width="9"
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
            stroke="#7CFFD8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M2 3.5L1.99999 119.5"
            stroke="#7CFFD8"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
