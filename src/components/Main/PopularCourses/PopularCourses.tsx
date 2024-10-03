import React from "react";
import Course from "./Course";
const styles = require("../../../styles/Main/PopularCourses/PopularCourses.module.scss");
import { popularCoursesData } from "../../../data";

export default function PopularCourses() {
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
}
