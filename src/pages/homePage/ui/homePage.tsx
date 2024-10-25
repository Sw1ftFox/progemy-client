import React from "react";
import {Header} from "../../../features/header/ui/Header";
import {Сarousel} from "../../../features/carousel/ui/Сarousel";
import {PopularCourses} from "../../../features/popularCourses/ui/PopularCourses";
import {BestAuthors} from "../../../features/bestAuthors/ui/BestAuthors";
import {Catalog} from "../../../features/catalog/ui/Catalog";
import {Questions} from "../../../features/questions/ui/Questions";
import {Footer} from "../../../features/footer/ui/Footer";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Сarousel />
      <PopularCourses />
      <BestAuthors />
      <Catalog />
      <Questions />
      <Footer />
    </div>
  );
}
