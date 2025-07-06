import { useState, useEffect } from 'react';

export const usePrincipleRotation = (totalPrinciples: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % totalPrinciples);
        setIsVisible(true);
      }, 300);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [totalPrinciples]);

  return { currentIndex, isVisible };
};