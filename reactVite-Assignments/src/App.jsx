import React, { useEffect, useState } from 'react';
import './App.css'


function Box({ size, delay }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timerAppear = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    const timerDisappear = setTimeout(() => {
      setIsVisible(false);
    }, delay + 4000);

    return () => {
      clearTimeout(timerAppear);
      clearTimeout(timerDisappear);
    };
  }, [delay]);

  return isVisible && <div className={`box ${size}`}></div>;
}

export default Box;

