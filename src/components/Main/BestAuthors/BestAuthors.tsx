import React from "react";
import Author from "./Author";
const styles = require("../../../styles/Main/BestAuthors/BestAuthors.module.scss");

export default function BestAuthors() {
  return (
    <div className={styles.main}>
      <div className={styles.main__title}>Лучшие авторы</div>
      <div className={styles.main__declaration}>
        Наши курсы созданы опытными профессионалами из индустрии, которые не
        только глубоко знают своё дело, но и умеют объяснять сложные вещи
        просто. Каждый автор — это практик с реальным опытом разработки и
        обучения.
      </div>
      <svg
        className={styles.main__line}
        width="1590"
        height="1"
        viewBox="0 0 1590 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="0.5" x2="1590" y2="0.5" stroke="url(#paint0_linear_16_372)" />
        <defs>
          <linearGradient
            id="paint0_linear_16_372"
            x1="2.22121e-06"
            y1="1.5"
            x2="1590"
            y2="1.50331"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0.04" />
            <stop offset="0.484182" stop-color="white" stop-opacity="0.2" />
            <stop offset="1" stop-color="white" stop-opacity="0.04" />
          </linearGradient>
        </defs>
      </svg>
      <div className={styles.main__authors}>
        <Author />
        <Author />
        <Author />
        <Author />
      </div>
    </div>
  );
}
