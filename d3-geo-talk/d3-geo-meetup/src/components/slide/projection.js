import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div 
      className="slide-title"
      style={{fontSize: props.width * 0.07}}
    >Projections</div>

    <div className="projection-image"></div>

    <div 
      className="projection-group"
      style={{fontSize: props.width * 0.03}}
    >
      <p>d3-geo or d3-geo-projections</p>
      <p>Projections transform spherical polygonal geometry to planar polygonal geometry</p>
      <p>All map projections DISTORT </p>
      <p>Projection Categories: </p>
      <p>Azimuthal, Composite, Conic, Cylindrical</p>
    </div>

  </div>
);