import React, { useState } from 'react';

import TopControl from './TopControl.js';
import Slide from './Slide.js';
import BottomControl from './BottomControl.js';

import '../styles/Presentation.css';

export default props => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDeckLength, setSlideDeckLength] = useState('');

  const {height, width} = props.dimensions;
  let slideW = width;
  let slideH = Math.round(slideW / 1.333);
    

  while (slideW > width || slideH > height) {
    slideW -= 50;
    slideH = Math.round(slideW / 1.333);
  }


  return (
    <div className="presentation-backdrop">
      <div 
        className="presentation-wrapper"
        style={{height: slideH, width: slideW}}
      >
        <TopControl 
          currentSlide={currentSlide}
          height={Math.round(slideH * 0.1)}
          slideDeckLength={slideDeckLength}
          width={slideW}
        />
        <Slide 
          currentSlide={currentSlide}
          height={Math.round(slideH * 0.8)}
          width={slideW}

          setSlideDeckLength={setSlideDeckLength}
        />
        <BottomControl 
          currentSlide={currentSlide}
          height={Math.round(slideH * 0.1)}
          width={slideW}

          setCurrentSlide={setCurrentSlide}
        />
      </div>
    </div>
  );
};