import React from "react";
const styles = require("../../../styles/Main/Questions/Question.module.scss");

export default function Question() {
  return (
    <div className={styles.main}>
      <div className={styles.main__question}>
        <div className={styles.main__question_text}>
          Предоставляются ли сертификаты по окончании курсов?
        </div>
        <svg
          className={styles.main__question_btn}
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 2L13.5 25"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M2 13.5L25 13.5"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className={styles.main__answer}>
        Ответ: Да, предоставляются специальные сертификаты с вашими данными из
        профиля.
      </div>
    </div>
  );
}
