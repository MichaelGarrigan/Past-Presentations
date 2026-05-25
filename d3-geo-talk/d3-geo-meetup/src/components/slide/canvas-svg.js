import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div 
      className="slide-title"
      style={{fontSize: props.width * 0.07}}
    >Canvas vs SVG</div>

    <div 
      className="canvasSVG-canvas-group canvasSVG-group"
      style={{fontSize: props.width * 0.03}}
    >
      <h3 
        className="canvasSVG-canvas-title"
        style={{fontSize: props.width * 0.04}}
      >&#60;canvas&gt;</h3>
      <p>Raster</p>
      <p>Collection of Pixels</p>
      <p>Stateless</p>
      <p>More Performant</p>
    </div>

    <div 
      className="canvasSVG-svg-group canvasSVG-group"
      style={{fontSize: props.width * 0.03}}
    >
      <h3 
        className="canvasSVG-svg-title"
        style={{fontSize: props.width * 0.04}}
      >&#60;svg&gt;</h3>
      <p>Vector</p>
      <p>Collection of Elements</p>
      <p>Statefull</p>
      <p>Less Performant</p>
    </div>
    
  </div>
);