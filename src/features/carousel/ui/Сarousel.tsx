import React, { useEffect, useState } from "react";
import Arrow from "../../../icons/carousel/Arrow";
import Circle from "../../../icons/carousel/Circle";
const styles = require("./Carousel.module.scss");
import { slidesArray } from "../../../entities/slidesData";
import useCarousel from "../../../services/useCarousel";

export const Сarousel = () => {
  const totalSlides = slidesArray.length;
  const { previousSlide, nextSlide, goToSlide, currentSlideIndex } =
    useCarousel(5000, totalSlides);

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__slider}>
        <Arrow
          className={styles.carousel__slider_ArrowLeft}
          onClick={previousSlide}
        />

        {slidesArray.map((SlideComponent, index) => (
          <SlideComponent key={index} isActive={currentSlideIndex === index} />
        ))}

        <Arrow
          className={styles.carousel__slider_ArrowRight}
          onClick={nextSlide}
        />
      </div>

      <div className={styles.carousel__dots}>
        {[0, 1, 2].map((index) => (
          <Circle
            key={index}
            className={`${styles.carousel__dots_HollowCircle} ${
              currentSlideIndex === index
                ? styles.carousel__dots_FullCircle
                : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
