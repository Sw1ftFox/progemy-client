import { useEffect, useRef, useState } from "react";

export const useCarousel = (interval: number, totalSlides: number) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [autoPlayInterval, setAutoPlayInterval] = useState<NodeJS.Timeout | null | number>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const previousSlide = () => {
    pauseAutoPlay();
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides
    );
    setAutoPlayInterval(interval);
  };

  const nextSlide = () => {
    pauseAutoPlay();
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    setAutoPlayInterval(interval);
  };

  const goToSlide = (index: number) => {
    pauseAutoPlay();
    setCurrentSlideIndex(index);
    setAutoPlayInterval(interval);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, interval);

    setAutoPlayInterval(intervalRef.current);

    return () => clearInterval(intervalRef.current!);
  }, [])

  const pauseAutoPlay = () => {
    if (autoPlayInterval) {
      clearInterval(intervalRef.current!);
      setAutoPlayInterval(null);
    }
  };

  useEffect(() => {
    if (autoPlayInterval !== null) {
      intervalRef.current = setInterval(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, interval);

      setAutoPlayInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current!);
  }, [currentSlideIndex])

  return { previousSlide, nextSlide, goToSlide, currentSlideIndex };
}