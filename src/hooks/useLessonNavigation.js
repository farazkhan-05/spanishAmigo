import { useState } from 'react';

/**
 * Manages the state of a linear lesson.
 * @param {Object} lesson - The full lesson object containing slides.
 * @param {Function} onComplete - Callback to run when lesson finishes.
 */
export const useLessonNavigation = (lesson, onComplete) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Guard clause in case data isn't loaded yet
  if (!lesson || !lesson.slides) {
    return {
      currentSlide: null,
      progress: 0,
      nextSlide: () => {},
    };
  }

  const currentSlide = lesson.slides[currentSlideIndex];
  const totalSlides = lesson.slides.length;
  
  // Calculate progress (0 to 100)
  const progress = ((currentSlideIndex + 1) / totalSlides) * 100;

  const nextSlide = () => {
    const isLastSlide = currentSlideIndex === totalSlides - 1;

    if (isLastSlide) {
      if (onComplete) onComplete();
    } else {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  return {
    currentSlideIndex,
    currentSlide,
    totalSlides,
    progress,
    nextSlide,
    prevSlide,
    isFirstSlide: currentSlideIndex === 0,
    isLastSlide: currentSlideIndex === totalSlides - 1
  };
};