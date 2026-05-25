import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div 
      className="slide-title"
      style={{fontSize: props.width * 0.07}}
    >TopoJSON</div>

    <ul 
      className="slide-full-bullets"
      style={{fontSize: props.width * 0.03}}
    >
      <li>TopoJSON is an extension of GeoJSON that encodes topology</li>
      <li>TopoJSON files are stitched together from shared line segments called arcs</li>
      <li>Can reduce a GeoJSON file by 80% before simplification</li>
      <li>TopoJSON cannot be used directly, it must be converted to GeoJSON</li>
      <li>TopoJSON files are stitched together from shared line segments called arcs</li>
      
      <li>
        <a 
          className="link-pink"
          href="https://github.com/topojson/topojson-specification">TopoJSON Spec</a>
      </li>
    </ul>

  </div>
);