import React from "react";
import { HeaderLoggedOut } from "Widgets/headerLoggedOut";
import { Carousel } from "Widgets/carousel";
import { PopularCourses } from "Widgets/popularCourses";
import { BestAuthors } from "Widgets/bestAuthors";
import { Catalog } from "Widgets/catalog";
import { Questions } from "Widgets/questions";
import { Footer } from "Widgets/footer";

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
