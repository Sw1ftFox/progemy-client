import React from "react";
import Course from "./Course";
const styles = require("../../../styles/Main/PopularCourses/PopularCourses.module.scss");

// interface ItemData {
//   color: string;
//   title: string;
//   description: string;
// }

// const data: ItemData[] = [
//   {
//     color: "red",
//     title: "Заголовок 1",
//     description: "Описание 1",
//   },
//   {
//     color: "green",
//     title: "Заголовок 2",
//     description: "Описание 2",
//   },
//   {
//     color: "blue",
//     title: "Заголовок 3",
//     description: "Описание 3",
//   },
//   {
//     color: "yellow",
//     title: "Заголовок 4",
//     description: "Описание 4",
//   },
// ];

export default function PopularCourses() {
  return (
    <div className={styles.main}>
      <div className={styles.main__title}>Популярные курсы</div>
      <div className={styles.main__courses}>
        <Course />
        <Course />
        <Course />
        <Course />
      </div>
    </div>
  );
}
// <div>
{
  /* {data.map((item, index) => (
        <Course
          key={index}
          color={item.color}
          title={item.title}
          description={item.description}
        />
      ))} */
}
// </div>
