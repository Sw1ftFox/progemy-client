import React, { useEffect, useState } from "react";
import Arrow from "../../../icons/carousel/Arrow";
import Circle from "../../../icons/carousel/Circle";
const styles = require("./Carousel.module.scss");
import { slidesArray } from "../../../entities/slidesData";

export const Сarousel = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [autoPlayInterval, setAutoPlayInterval] =
    useState<NodeJS.Timeout | null>(null);
  const totalSlides = slidesArray.length;

  const pauseAutoPlay = () => {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      setAutoPlayInterval(null);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 7000);

    setAutoPlayInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handlePreviousSlide = () => {
    pauseAutoPlay();
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides
    );
  };

  const handleNextSlide = () => {
    pauseAutoPlay();
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handleGoToSlide = (index: number) => {
    pauseAutoPlay();
    setCurrentSlideIndex(index);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (autoPlayInterval === null) {
        const interval = setInterval(() => {
          setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 7000);
        setAutoPlayInterval(interval);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [currentSlideIndex]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__slider}>
        <Arrow
          className={styles.carousel__slider_ArrowLeft}
          onClick={handlePreviousSlide}
        />

        {slidesArray.map((SlideComponent, index) => (
          <SlideComponent
            key={index}
            isActive={currentSlideIndex === index}
          />
        ))}

        <Arrow
          className={styles.carousel__slider_ArrowRight}
          onClick={handleNextSlide}
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
            onClick={() => handleGoToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
