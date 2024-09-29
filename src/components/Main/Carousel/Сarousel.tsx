import React from "react";
import ProgCard from "./ProgCard";
import DesignCard from "./DesignCard";
import SecurityCard from "./SecurityCard";
const styles = require("../../../styles/Main/Carousel/Carousel.module.scss");

export default function Сarousel() {
  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__slider}>
        <svg
          className={styles.carousel__slider_ArrowLeft}
          width="71"
          height="244"
          viewBox="0 0 71 244"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M69 242L2 122"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M69 2L2 122"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* <ProgCard /> */}
        <DesignCard />
        {/* <SecurityCard /> */}

        <svg
          className={styles.carousel__slider_ArrowRight}
          width="71"
          height="244"
          viewBox="0 0 71 244"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M69 242L2 122"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M69 2L2 122"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className={styles.carousel__dots}>
        <svg
          className={`${styles.carousel__dots_HollowCircle} ${styles.carousel__dots_FullCircle}`}
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="15.5"
            cy="15.5"
            r="14"
            stroke="#7CFFD8"
            strokeWidth="3"
          />
        </svg>
        <svg
          className={styles.carousel__dots_HollowCircle}
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="15.5"
            cy="15.5"
            r="14"
            stroke="#7CFFD8"
            strokeWidth="3"
          />
        </svg>
        <svg
          className={styles.carousel__dots_HollowCircle}
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="15.5"
            cy="15.5"
            r="14"
            stroke="#7CFFD8"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  );
}
