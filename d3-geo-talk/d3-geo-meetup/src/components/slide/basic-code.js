import React, { useEffect } from 'react';
import Prism from 'prismjs';

import '../../../node_modules/prismjs/themes/prism-okaidia.css';


export default props => {
  // Initialize syntax highting
  useEffect( () => Prism.highlightAll(), []);

  return (
    <div className="slide-grid-full">
      <div 
        className="slide-title"
        style={{fontSize: props.width * 0.08}}
      >Basic Code</div>
        
        <pre 
          className="basiccode-code"
          style={{fontSize: props.width * 0.02}}
        > 
          <code className="language-js">
{
`import { geoOrthographic, geoPath } from 'd3-geo';
import { select } from 'd3-selection';
import geoData from '../../utils/geoData.js';

const proj = geoOrthographic()
  .rotate([lambda, 0, 0])
  .fitExtent([[50,50], [width - 50, height - 50]], geoData);
  
const path = geoPath().projection(proj);

// ...later in the react return jsx
geoData.features.map( (item, idx) => (
  <path
    key={idx}
    ref={
      node => select(node).datum(item).attr('d', path) 
    }
  />
))`.trim()
}
          </code>
        </pre>
      
    </div>
  );
};