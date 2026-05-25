import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div 
      className="slide-title"
      style={{fontSize: props.width * 0.07}}
    >Projection Methods</div>

    <div 
      className="projection-meth-group projection-meth-group-left"
      style={{fontSize: props.width * 0.03}}
    >
      <p>invert</p>
      <p>stream</p>
      <p>preclip, postclip</p>
      <p>clipAngle</p>
      <p>clipExtent</p>
      <p>scale</p>
      <p>translate</p>
    </div>
      

    <div 
      className="projection-meth-group projection-meth-group-right"
      style={{fontSize: props.width * 0.03}}
    >
      <p>center</p>
      <p>angle</p>
      <p>rotate</p>
      <p>percision</p>
      <p>fitExtent</p>
      <p>fitSize</p>
      <p>fitWidth, fitHeight</p>
    </div>

  </div>
);