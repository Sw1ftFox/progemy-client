import React from "react";
import Question from "./Question";
const styles = require("../../../styles/Main/Questions/Questions.module.scss");

export default function Questions() {
  return (
    <div className={styles.main}>
      <div className={styles.main__title}>Часто задаваемые вопросы</div>
      <div className={styles.main__questions}>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </div>
  );
}
