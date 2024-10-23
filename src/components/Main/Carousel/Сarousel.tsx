import React, { useEffect, useState } from "react";
import ProgCard from "./ProgCard";
import DesignCard from "./DesignCard";
import SecurityCard from "./SecurityCard";
import Arrow from "../../SvgIcons/Main/Carousel/Arrow";
import Circle from "../../SvgIcons/Main/Carousel/Circle";
const styles = require("../../../styles/Main/Carousel/Carousel.module.scss");

export default function Carousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [autoPlayInterval, setAutoPlayInterval] =
    useState<NodeJS.Timeout | null>(null);
  const totalSlides = 3;

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

        {currentSlideIndex === 0 ? (
          <ProgCard isActive={true} />
        ) : (
          <ProgCard isActive={false} />
        )}
        {currentSlideIndex === 1 ? (
          <DesignCard isActive={true} />
        ) : (
          <DesignCard isActive={false} />
        )}
        {currentSlideIndex === 2 ? (
          <SecurityCard isActive={true} />
        ) : (
          <SecurityCard isActive={false} />
        )}

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
}
