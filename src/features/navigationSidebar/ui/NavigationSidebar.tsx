import React from "react";
import MyCourses from "../../../icons/navigationSidebar/Courses";
import Statistics from "../../../icons/navigationSidebar/Statistics";
import Achievements from "../../../icons/navigationSidebar/Achievements";
import Settings from "../../../icons/navigationSidebar/Settings";
import Logout from "../../../icons/navigationSidebar/Logout";
const styles = require("./NavigationSidebar.module.scss");

export const NavigationSidebar = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__container}>
        <div className={styles.menu__container__item}>
          <MyCourses className={styles.menu__container__item__myCourses} />
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
