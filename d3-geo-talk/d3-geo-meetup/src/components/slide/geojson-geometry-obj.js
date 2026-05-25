import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div 
      className="slide-title"
      style={{fontSize: props.width * 0.07}}
    >Geometry Object</div>

    <ul 
      className="slide-full-bullets"
      style={{fontSize: props.width * 0.03}}
    >
      <li>Must contain a property 'type' with a value that is one of the seven geometry types</li>
      <li>Types: Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon, GeometryCollection</li>
      <li>Must contain a property 'coordinates' with a value that is an array</li>
      <li >Must Not have properties named 'geometry' or 'properties'</li>
      
    </ul>
    
  </div>
);