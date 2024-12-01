import React from "react";
import { Course } from "Shared/index";
const styles = require("./PopularCourses.module.scss");
import { popularCoursesData } from "SharedModel/coursesData";

export const PopularCourses = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__title}>Популярные курсы</div>
      <div className={styles.main__courses}>
        {popularCoursesData.map((item, index) => (
          <Course key={index} data={item} />
        ))}
      </div>
    </div>
  );
};
