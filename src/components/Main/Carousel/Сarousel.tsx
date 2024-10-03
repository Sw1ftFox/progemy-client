import React, { useEffect, useState } from "react";
import ProgCard from "./ProgCard";
import DesignCard from "./DesignCard";
import SecurityCard from "./SecurityCard";
const styles = require("../../../styles/Main/Carousel/Carousel.module.scss");

export default function Сarousel() {
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
        <svg
          className={styles.carousel__slider_ArrowLeft}
          onClick={handlePreviousSlide}
          width="71"
          height="244"
          viewBox="0 0 71 244"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M69 242L2 122"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M69 2L2 122"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

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

        <svg
          className={styles.carousel__slider_ArrowRight}
          onClick={handleNextSlide}
          width="71"
          height="244"
          viewBox="0 0 71 244"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M69 242L2 122"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M69 2L2 122"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className={styles.carousel__dots}>
        {[0, 1, 2].map((index) => (
          <svg
            key={index}
            className={`${styles.carousel__dots_HollowCircle} ${
              currentSlideIndex === index
                ? styles.carousel__dots_FullCircle
                : ""
            }`}
            onClick={() => handleGoToSlide(index)}
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="15.5"
              cy="15.5"
              r="14"
              stroke="#7CFFD8"
              strokeWidth="3"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}
