import React from "react";
import Course from "../PopularCourses/Course";
const styles = require("../../../styles/Main/Catalog/Catalog.module.scss");

export default function Catalog() {
  return (
    <div className={styles.main}>
      <div className={styles.main__sort}>
        <div className={styles.main__sort_title}>Посмотреть полный каталог</div>
        <div className={styles.main__sort_container}>
          <button className={styles.main__sort_container_button}>
            По популярности
            <svg
              className={styles.main__sort_container_button_arrow}
              width="27"
              height="13"
              viewBox="0 0 27 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L13.5 12L26 1"
                stroke="#CFD3DA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <ul
            className={styles.main__sort_container_options}
            style={{ display: "none" }}
          >
            <li className={styles.main__sort_container_options_item}>
              По рейтингу
            </li>
            <li className={styles.main__sort_container_options_item}>
              По цене
            </li>
            <li className={styles.main__sort_container_options_item}>
              По дате
            </li>
          </ul>
        </div>
        <div className={styles.main__sort_searchCourses}>Найдено 724 курса</div>
      </div>
      <div className={styles.main__courses}>
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
      </div>
    </div>
  );
}
