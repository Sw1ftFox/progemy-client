import React from "react";
import Header from "./Header/Header";
import Carousel from "./Carousel/Сarousel";
import PopularCourses from "./PopularCourses/PopularCourses";
import BestAuthors from "./BestAuthors/BestAuthors";
import Catalog from "./Catalog/Catalog";
import Questions from "./Questions/Questions";
import Footer from "./Footer/Footer";

export default function Main() {
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
}
