import React from "react";
import { Courses } from "Shared/index";
import { Statistics } from "Shared/index";
import { Achievements } from "Shared/index";
import { Settings } from "Shared/index";
import { Logout } from "Shared/index";
const styles = require("./NavigationSidebar.module.scss");

export const NavigationSidebar = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__container}>
        <div className={styles.menu__container__item}>
          <Courses className={styles.menu__container__item__myCourses} />
        </div>
        <div className={styles.menu__container__item}>
          <Statistics className={styles.menu__container__item__statistics} />
        </div>
        <div className={styles.menu__container__item}>
          <Achievements
            className={styles.menu__container__item__achievements}
          />
        </div>
        <div className={styles.menu__container__item}>
          <Settings className={styles.menu__container__item__settings} />
        </div>
        <div className={styles.menu__container__item}>
          <Logout className={styles.menu__container__item__logout} />
        </div>
      </div>
    </div>
  );
};
