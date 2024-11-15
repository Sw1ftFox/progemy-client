import React from "react";
import { HeaderLoggedOut } from "../../../features/headerLoggedOut/index";
import { Carousel } from "../../../features/carousel/index";
import { PopularCourses } from "../../../features/popularCourses/index";
import { BestAuthors } from "../../../features/bestAuthors/index";
import { Catalog } from "../../../features/catalog/index";
import { Questions } from "../../../features/questions/index";
import { Footer } from "../../../features/footer/index";

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
