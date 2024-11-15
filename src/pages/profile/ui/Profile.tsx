import React from "react";
const styles = require("./Profile.module.scss");
import { HeaderLoggedIn } from "../../../features/headerLoggedIn/index";
import { NavigationSidebar } from "../../../features/navigationSidebar/index";
import { MyCourses } from "../../../features/myCourses/index";
import { CoursesStatistics } from "../../../features/coursesStatistics";
import { Footer } from "../../../features/footer";
import { StatisticalScheme } from "../../../features/statisticalScheme";

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <HeaderLoggedIn />
      <div className={styles.profile__navAndCourses}>
        <NavigationSidebar />
        {/* <MyCourses /> */}
        <CoursesStatistics />
        <StatisticalScheme />
      </div>
      <Footer />
    </div>
  );
};
