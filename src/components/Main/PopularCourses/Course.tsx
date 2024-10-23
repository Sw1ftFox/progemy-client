import React from "react";
const styles = require("../../../styles/Main/PopularCourses/Course.module.scss");
import { ItemData } from "../../../data";
import CourseIcon from "../../SvgIcons/Main/PopularCourses/CourseIcon";
import ratingStarSrc from "../../../../assets/svg/course/star.svg";
import lineSrc from "../../../../assets/svg/course/Line.svg";

const backgroundImages: { [key: string]: string } = {
  programming: require("/assets/svg/course/programming.png"),
  design: require("/assets/svg/course/design.png"),
  security: require("/assets/svg/course/security.png"),
};

interface CourseProps {
  data: ItemData;
}

export default function Course({ data }: CourseProps) {
  const background =
    backgroundImages[data.area] ||
    require("/assets/svg/course/programming.png");

  return (
    <div
      className={styles.course}
      style={{ backgroundImage: `url(${background})` }}
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
