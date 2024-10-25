import React from "react";
const styles = require("./Course.module.scss");
import { ItemData } from "../../../entities/data";
import CourseIcon from "../../../icons/popularCourses/CourseIcon";
import ratingStarSrc from "../../../assets/icons/course/star.svg";
import lineSrc from "../../../assets/icons/course/Line.svg";

// const backgroundImages: { [key: string]: string } = {
//   programming: require("/assets/img/course/programming.png"),
//   design: require("/assets/img/course/design.png"),
//   security: require("/assets/img/course/security.png"),
// };

interface CourseProps {
  data: ItemData;
}

export const Course = ({ data }: CourseProps) => {
  // const background =
  //   backgroundImages[data.area] ||
  //   require("/assets/img/course/programming.png");

  return (
    <div
      className={styles.course}
      // style={{ backgroundImage: `url(${background})` }}
    >
      <CourseIcon className={styles.course__icon} />

      <div className={styles.course__characteristics}>
        <div className={styles.course__characteristics_price}>
          {data.price} руб.
        </div>
        <div className={styles.course__characteristics_rating}>
          <div className={styles.course__characteristics_rating_estimation}>
            {data.rating}
          </div>
          <img
            src={ratingStarSrc}
            className={styles.course__characteristics_rating_star}
            alt=""
          />
        </div>
        <div className={styles.course__characteristics_time}>
          {data.time} ч.
        </div>
      </div>

      <img src={lineSrc} className={styles.course__line} alt="" />

      <div className={styles.course__text}>
        <div className={styles.course__text_title}>{data.title}</div>
        <div className={styles.course__text_declaration}>
          {data.description}
        </div>
      </div>
    </div>
  );
}
