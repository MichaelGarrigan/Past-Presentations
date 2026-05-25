
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
      >Multi Line String</div>

      <div className="geo-mls-wrapper">
        <div className="geo-mls-code">
          <pre 
            style={{fontSize: width * 0.03}}
          > 
            <code className="language-js">
{
`{ // [  [ LineString ] , [ LineString ] , ... ]
  "type": "MultiLineString",
  "coordinates": [ 
    [ [ 61.210817 , 35.650072 ], 
      [ 62.230651 , 35.270664 ] ],
    [ [ 21.493937 , 32.009322 ], 
      [ 82.454651 , 15.432264 ] ]
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