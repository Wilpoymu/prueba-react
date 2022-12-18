import React from "react";
import { useState } from "react";
import "./Slider.css";

function Slider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = React.Children.toArray(children);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="slider">
      {items[currentIndex]}
      <div className="buttons">
        <button onClick={goToPrev}>Anterior</button>
        <button onClick={goToNext}>Siguiente</button>
      </div>
    </div>
  );
}

export { Slider };
