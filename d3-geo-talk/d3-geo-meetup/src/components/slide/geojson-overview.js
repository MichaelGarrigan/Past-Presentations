import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div 
      className="slide-title"
      style={{fontSize: props.width * 0.07}}
    >GeoJSON Overview</div>

    <ul 
      className="slide-full-bullets"
      style={{fontSize: props.width * 0.03}}
    >
      <li>A data structure to encode geography</li>
      <li>Must be valid JSON and contain a single object</li>
      <li>Can accept any number of foreign members</li>
      <li>A coordinate with 6 decimal places has accuracy of 10 centimeters</li>
      <li>Geography that crosses the antimeridian line should be split into two geometry types</li>
      
      <li>
        Spec:
        <a 
          className="geojson-overview-a"
          href="https://geojson.org/"
        > geojson.org </a>
        -or-
        <a 
          className="geojson-overview-a"
          href="https://tools.ietf.org/html/rfc7946#section-6.1"
        > RFC 7946</a>
      </li>
    </ul>

  </div>
);