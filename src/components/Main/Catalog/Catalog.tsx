import React, { useState } from "react";
import Course from "../PopularCourses/Course";
const styles = require("../../../styles/Main/Catalog/Catalog.module.scss");
import { coursesData } from "../../../data";
import arrowSrc from "../../../../assets/svg/catalog/arrow.svg";

const getCourseCountText = (count: number) => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return "курс";
  } else if (
    lastDigit >= 2 &&
    lastDigit <= 4 &&
    (lastTwoDigits < 12 || lastTwoDigits > 14)
  ) {
    return "курса";
  } else {
    return "курсов";
  }
};

export default function Catalog() {
  const [sortType, setSortType] = useState("popularity");
  const [sortedCourses, setSortedCourses] = useState(coursesData);
  const [isActive, setIsActive] = useState(false);

  const handleSortChange = (newSortType: string) => {
    setSortType(newSortType);

    let sorted = [...coursesData];
    if (newSortType === "rating") {
      sorted.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
    } else if (newSortType === "price") {
      sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (newSortType === "time") {
      sorted.sort((a, b) => parseFloat(a.time) - parseFloat(b.time));
    }

    setSortedCourses(sorted);
  };

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.main}>
      <div className={styles.main__sort}>
        <div className={styles.main__sort_title}>Посмотреть полный каталог</div>
        <div className={styles.main__sort_container}>
          <button
            className={`${styles.main__sort_container_button} ${
              isActive ? styles.main__sort_container_button_active : ""
            }`}
            onClick={() => {
              toggleActive();
            }}
          >
            Сортировать по
            <img
              src={arrowSrc}
              className={`${styles.main__sort_container_button_arrow} ${
                isActive ? styles.main__sort_container_button_arrow_active : ""
              }`}
              alt=""
            />
          </button>
          <ul
            className={`${styles.main__sort_container_options} ${
              isActive ? styles.main__sort_container_options_active : ""
            }`}
          >
            <li
              className={styles.main__sort_container_options_item}
              onClick={() => handleSortChange("popularity")}
            >
              По популярности
            </li>
            <li
              className={styles.main__sort_container_options_item}
              onClick={() => handleSortChange("rating")}
            >
              По рейтингу
            </li>
            <li
              className={styles.main__sort_container_options_item}
              onClick={() => handleSortChange("price")}
            >
              По цене
            </li>
            <li
              className={styles.main__sort_container_options_item}
              onClick={() => handleSortChange("time")}
            >
              По времени
            </li>
          </ul>
        </div>
        <div className={styles.main__sort_searchCourses}>
          Найдено {coursesData.length} {getCourseCountText(coursesData.length)}
        </div>
      </div>
      <div className={styles.main__courses}>
        {sortedCourses.map((item, index) => (
          <Course key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
