import React, { useEffect } from 'react';
import Prism from 'prismjs';

import '../../../node_modules/prismjs/themes/prism-okaidia.css';


export default props => {
  const fontSize = props.width * 0.05;

  // Initialize syntax highting
  useEffect( () => Prism.highlightAll(), []);
  return (
    <div className="slide-grid-full">
      <div 
        className="slide-title"
        style={{fontSize: props.width * 0.08}}
      >Basics</div>
      <div className="basics-geoJSON basics-group">
        <div 
          className="basics-group-title"
          style={{fontSize: fontSize}}
        >geoJSON</div>
        <pre 
          className="basics-code"
          style={{fontSize: props.width * 0.01}}
        > 
          <code className="language-js">
{
`{
  "type":"FeatureCollection",
  "features":[ 
    {
    "type":"Feature",
    "properties":{
      "name":"Afghanistan"
    },
    "geometry":{
      "type":"Polygon",
      "coordinates":[
        [
          [61.210817,35.650072],
          [62.230651,35.270664],
          [62.984662,35.404041],
          [63.193538,35.857166]
        ]
        ]
      },
    "id":"AFG"
    }`.trim()
}
          </code>
        </pre>
      </div>
      <div className="basics-projections basics-group">
        <div 
          className="basics-group-title"
          style={{fontSize: fontSize}}
        >Projection</div>
        <div className="basics-projection-card"></div>
      </div>
      <div className="basics-geoPath basics-group">
        <div 
          className="basics-group-title"
          style={{fontSize: fontSize}}
        >geoPath</div>
        <div className="basics-geopath-card"></div>
      </div>
      
    </div>
  );
};