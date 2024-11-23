import React from "react";
const styles = require("./Profile.module.scss");
import { HeaderLoggedIn } from "../../../widgets/headerLoggedIn/index";
import { NavigationSidebar } from "../../../widgets/navigationSidebar/index";
import { MyCourses } from "../../../widgets/myCourses/index";
import { CoursesStatistics } from "../../../widgets/coursesStatistics";
import { Footer } from "../../../widgets/footer";
import { StatisticalScheme } from "../../../widgets/statisticalScheme";

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
