
import React, { useEffect } from 'react';

import Prism from 'prismjs';
import '../../../node_modules/prismjs/themes/prism-okaidia.css';


export default ({height, width}) => {
  
  // Initialize syntax highting
  useEffect( () => Prism.highlightAll(), []);


  return (
    <div className="slide-grid-full">

      <div 
        className="slide-title"
        style={{fontSize: width * 0.07}}
      >Multi Polygon</div>

      <div className="geo-mls-wrapper">
        <div className="geo-mls-code">
          <pre 
            style={{fontSize: width * 0.03}}
          > 
            <code className="language-js">
{
`{ // [  [ Polygon ] , [ Polygon ] , [ Polygon ] , ... ]
  "type": "MultiPolygon",
  "coordinates": [ 
    [ [ 61.210817 , 35.650072 ], [ 62.230651 , 35.270664 ], 
      [ 62.984662 , 35.404041 ], [ 61.210817 , 35.650072 ] ],
    [ [ 21.210817 , 07.650072 ], [ 22.230651 , 25.270664 ], 
      [ 12.984662 , 25.404041 ], [ 21.210817 , 07.650072 ] ]
  ]
}`.trim()
}
            </code>
          </pre>
        </div>
      </div>
      
    </div>
  );
};