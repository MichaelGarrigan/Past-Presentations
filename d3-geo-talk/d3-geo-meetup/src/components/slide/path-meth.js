import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div 
      className="slide-title"
      style={{fontSize: props.width * 0.07}}  
    >Path Methods</div>

    <div 
      className="projection-meth-group projection-meth-group-left"
      style={{fontSize: props.width * 0.03}}
    >
      <p>area</p>
      <p>bounds</p>
      <p>centroid</p>
      <p>measure</p>
    </div>
      

    <div 
      className="projection-meth-group projection-meth-group-right"
      style={{fontSize: props.width * 0.03}}
    >
      <p>projection</p>
      <p>context</p>
      <p>pointRadius</p>
    </div>

  </div>
);