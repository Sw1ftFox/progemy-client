import React from "react";
const styles = require("./Course.module.scss");
import { CoursesData } from "../index";
import { CourseIcon } from "../index";
import ratingStarSrc from "AssetsIcons/course/star.svg";
import lineSrc from "AssetsIcons/course/Line.svg";

const colorSvg: { [key: string]: string } = {
  programming: require("AssetsIcons/course/bgcourse3.svg"),
  design: require("AssetsIcons/course/bgcourse2.svg"),
  security: require("AssetsIcons/course/bgcourse4.svg"),
};

interface CourseProps {
  data: CoursesData;
}

export const Course = ({ data }: CourseProps) => {
  const color =
    colorSvg[data.area] ||
    require("../../assets/icons/course/bgcourse1.svg");

  return (
    <div
      className={styles.course}
      style={{
        backgroundImage: `url(${color})`,
      }}
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
};
