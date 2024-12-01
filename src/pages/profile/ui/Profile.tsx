import React from "react";
const styles = require("./Profile.module.scss");
import { HeaderLoggedIn } from "Widgets/headerLoggedIn";
import { NavigationSidebar } from "Widgets/navigationSidebar";
import { MyCourses } from "Widgets/myCourses";
import { CoursesStatistics } from "Widgets/coursesStatistics";
import { Footer } from "Widgets/footer";
import { StatisticalScheme } from "Widgets/statisticalScheme";

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
