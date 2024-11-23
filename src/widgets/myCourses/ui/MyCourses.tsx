import React from "react";
const styles = require("./MyCourses.module.scss");
import { coursesData } from "../../../shared/model/coursesData";
import { Course } from "../../../shared";

export const MyCourses = () => {
  return (
    <div className={styles.courses}>
      <div className={styles.courses__title}>Мои курсы</div>
      <div className={styles.courses__container}>
        {coursesData.map((obj) => {
          return <Course data={obj} />;
        })}
      </div>
    </div>
  );
};
