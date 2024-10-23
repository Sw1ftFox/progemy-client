import React from "react";
const styles = require("../../../styles/Main/Questions/Question.module.scss");
import btnSrc from "../../../../assets/svg/questions/question/Plus.svg";

export default function Question() {
  return (
    <div className={styles.main}>
      <div className={styles.main__question}>
        <div className={styles.main__question_text}>
          Предоставляются ли сертификаты по окончании курсов?
        </div>
        <img src={btnSrc} className={styles.main__question_btn} alt="" />
      </div>
      <div className={styles.main__answer}>
        Ответ: Да, предоставляются специальные сертификаты с вашими данными из
        профиля.
      </div>
    </div>
  );
}
