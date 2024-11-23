import React from "react";
import { HeaderLoggedOut } from "../../../widgets/headerLoggedOut/index";
import { Carousel } from "../../../widgets/carousel/index";
import { PopularCourses } from "../../../widgets/popularCourses/index";
import { BestAuthors } from "../../../widgets/bestAuthors/index";
import { Catalog } from "../../../widgets/catalog/index";
import { Questions } from "../../../widgets/questions/index";
import { Footer } from "../../../widgets/footer/index";

export const HomePage = () => {
  return (
    <div>
      <HeaderLoggedOut />
      <Carousel />
      <PopularCourses />
      <BestAuthors />
      <Catalog />
      <Questions />
      <Footer />
    </div>
  );
};
