import React from 'react';


export default props => {
  const fontSize = props.width * 0.05;
  
  return (
    <div className="slide-grid-full">

      <div 
        className="slide-title"
        style={{fontSize: props.width * 0.08}}
      >Basic Flow</div>

      <div 
        className="basicflow-geoJSON basicflow-group"
        style={{fontSize: fontSize}}
      >
        <p>geoJSON</p>
      </div>

      <div 
        className="basicflow-projection basicflow-group"
        style={{fontSize: fontSize}}
      >
        <p>Projection</p>
      </div>

      <div 
        className="basicflow-geoPath basicflow-group"
        style={{fontSize: fontSize}}
      >
        <p>geoPath</p>
      </div>
        
      <div className="basicflow-arrows"></div>
      
    </div>
  );
};