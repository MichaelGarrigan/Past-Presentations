import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div 
      className="slide-title"
      style={{fontSize: props.width * 0.07}}
    >Paths</div>

    <div className="path-image"></div>

    <div 
      className="path-input-geo"
      style={{fontSize: props.width * 0.03}}
    >
      <p>geometry</p>
      <p>object</p>
    </div>
    <div 
      className="path-input-feature"
      style={{fontSize: props.width * 0.03}}
    >
      <p>feature</p>
      <p>object</p>
    </div>
    
    <div 
      className="path-output-svg"
      style={{fontSize: props.width * 0.03}}
    >
      <p>svg path</p>
      <p>data string</p>
    </div>
    <div 
      className="path-output-canvas"
      style={{fontSize: props.width * 0.03}}
    >
      <p>renders path</p>
      <p>to canvas</p>
    </div>

  </div>
);