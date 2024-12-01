import React from "react";
import { Scheme } from "Shared/index";
const styles = require("./StatisticalScheme.module.scss");

export const StatisticalScheme = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        Общая статистика по приобретенным курсам
      </div>
      <Scheme className={styles.container__scheme} />
      <div className={styles.container__description}>
        <div className={styles.container__description__elem}>
          <div className={styles.container__description__elem__color}></div>
          <div className={styles.container__description__elem__title}>
            Разработка
          </div>
        </div>
        <div className={styles.container__description__elem}>
          <div className={styles.container__description__elem__color}></div>
          <div className={styles.container__description__elem__title}>
            Фотошоп
          </div>
        </div>
        <div className={styles.container__description__elem}>
          <div className={styles.container__description__elem__color}></div>
          <div className={styles.container__description__elem__title}>
            Дизайн
          </div>
        </div>
        <div className={styles.container__description__elem}>
          <div className={styles.container__description__elem__color}></div>
          <div className={styles.container__description__elem__title}>
            Тестирование
          </div>
        </div>
      </div>
    </div>
  );
};
