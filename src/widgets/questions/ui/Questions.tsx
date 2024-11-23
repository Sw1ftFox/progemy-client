import React from "react";
import { Question } from "../index";
const styles = require("./Questions.module.scss");

export const Questions = () => {
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
};
