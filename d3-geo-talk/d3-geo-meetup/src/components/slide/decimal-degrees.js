import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div 
      className="slide-title"
      style={{fontSize: props.width * 0.07}}
    >Decimal Degrees</div>

    <div 
      className="decimal-deg-wrapper"
      style={{fontSize: props.width * 0.03}}
    >
      <div className="decimal-column">
        <p className="decimal-title">Decimal Places</p>
        <p className="decimal-place">0</p>
        <p className="decimal-place">1</p>
        <p className="decimal-place">2</p>
        <p className="decimal-place">3</p>
        <p className="decimal-place">4</p>
        <p className="decimal-place">5</p>
        <p className="decimal-place">6</p>
        <p className="decimal-place">7</p>
        <p className="decimal-place">8</p>
      </div>

      <div className="decimal-column">
        <p className="decimal-title">Degrees</p>
        <p className="decimal-degrees">1.0</p>
        <p className="decimal-degrees">0.1</p>
        <p className="decimal-degrees">0.01</p>
        <p className="decimal-degrees">0.001</p>
        <p className="decimal-degrees">0.0001</p>
        <p className="decimal-degrees">0.00001</p>
        <p className="decimal-degrees">0.000001</p>
        <p className="decimal-degrees">0.0000001</p>
        <p className="decimal-degrees">0.00000001</p>
      </div>

      <div className="decimal-column">
        <p className="decimal-title">Approx. Distance</p>
        <p className="decimal-distance">62 miles</p>
        <p className="decimal-distance">6.2 miles</p>
        <p className="decimal-distance">0.62 miles</p>
        <p className="decimal-distance">328 feet</p>
        <p className="decimal-distance">33 feet</p>
        <p className="decimal-distance">3 feet</p>
        <p className="decimal-distance">4 inches</p>
        <p className="decimal-distance">1/2 inch</p>
        <p className="decimal-distance">Paper Clip Wire</p>
      </div>
    </div>

  </div>
);