import React, { useState } from "react";
import { Course } from "../../../shared/index";
const styles = require("./Catalog.module.scss");
import { coursesData } from "../../../shared/model/coursesData";
import arrowSrc from "../../../assets/icons/catalog/arrow.svg";
import { getCourseCountText } from "../../../shared/ui/helpers";
import { Link } from "react-router-dom";

export const Catalog = () => {
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
        {sortedCourses.map((item, index) => {
          if (index < 6) {
            return <Course key={index} data={item} />;
          }
        })}
      </div>
      <Link className={styles.main__link} to={"/catalog"}>
        Смотреть далее...
      </Link>
    </div>
  );
};
