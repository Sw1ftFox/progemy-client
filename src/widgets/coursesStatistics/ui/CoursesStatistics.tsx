import React from "react";
const styles = require("./CoursesStatistics.module.scss");
import { myCoursesData } from "../../../shared/model/myCoursesData";

export const CoursesStatistics = () => {
  return (
    <div className={styles.statistics}>
      <div className={styles.statistics__title}>Статистика</div>
      <div className={styles.statistics__description}>
        <div className={styles.statistics__description__container}>
          <div className={styles.statistics__description__container__title}>
            Название курса
          </div>
          <div className={styles.statistics__description__container__begin}>
            Начало прохождения
          </div>
          <div className={styles.statistics__description__container__author}>
            Автор курса
          </div>
          <div className={styles.statistics__description__container__lastView}>
            Последний заход
          </div>
          <div className={styles.statistics__description__container__status}>
            Статус
          </div>
        </div>
      </div>

      <div className={styles.statistics__container}>
        {myCoursesData.map((obj, index) => {
          return (
            <div key={index} className={styles.statistics__container__elem}>
              <div className={styles.statistics__container__elem__title}>
                {obj.title}
              </div>
              <div className={styles.statistics__container__elem__begin}>
                {obj.begin}
              </div>
              <div className={styles.statistics__container__elem__author}>
                {obj.author}
              </div>
              <div className={styles.statistics__container__elem__lastView}>
                {obj.lastView}
              </div>
              <div className={styles.statistics__container__elem__status}>
                {obj.status}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
