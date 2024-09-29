import React from "react";
import Header from "./Header/Header";
import Carousel from "./Carousel/Сarousel";
import PopularCourses from "./PopularCourses/PopularCourses";

export default function Main() {
  return (
    <div>
      <Header />
      <Carousel />
      <PopularCourses />
    </div>
  );
}
