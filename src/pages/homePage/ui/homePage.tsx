import React from "react";
import { Header } from "../../../features/header/index";
import { Carousel } from "../../../features/carousel/index";
import { PopularCourses } from "../../../features/popularCourses/index";
import { BestAuthors } from "../../../features/bestAuthors/index";
import { Catalog } from "../../../features/catalog/index";
import { Questions } from "../../../features/questions/index";
import { Footer } from "../../../features/footer/index";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <PopularCourses />
      <BestAuthors />
      <Catalog />
      <Questions />
      <Footer />
    </div>
  );
};
