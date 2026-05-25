
import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react';
import { geoAlbers, geoPath } from 'd3-geo';
import { select } from 'd3-selection';

import nyri from '../../utils/ny-ri.json';

import Prism from 'prismjs';
import '../../../node_modules/prismjs/themes/prism-okaidia.css';

let nyToRi = { 
  "type": "LineString",
  "coordinates": [ 
    [-73.944, 40.661], 
    [ -71.31 , 41.49 ] 
  ]
};

export default ({height, width}) => {
  const svgWidth = width * 0.4;
  const svgHeight = height * 0.85;

  // Initialize syntax highting
  useEffect( () => Prism.highlightAll(), []);

  const [svg, setSvg] = useState(null);

  const svgRef = useCallback(node => {
    setSvg(node);
  }, []);


  useLayoutEffect( () => {
    if (svg) {
      
      let proj = geoAlbers()
        .fitExtent([ [-(svgWidth*0.4),-(svgHeight*0.3)], [svgWidth, svgHeight] ], nyri);
       
      let path = geoPath(proj);

      let nyriData = nyri.features;
      
      const svgElem = select(svg);

      // clear children from svg
      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }

      const defs = select(svg).append('defs');
      
      // create/append the filter
      const filter = defs.append('filter')
        .attr('id', 'border-blur');

      // the glow filter 
      filter.append('feGaussianBlur')
        .attr('in', 'SourceGraphic')
        .attr('stdDeviation', 5)
        .attr('result', 'shadow');

        nyriData.forEach( state => {
        defs.append('clipPath')
          .attr('id', `clip-${state.id}`)
          .append('path')
          .datum(state)
          .attr('d', path);
      });

      const statesLayer = svgElem.append('g');

      // a white backround for states because they'll have semi-transparent fills
      statesLayer.selectAll('path.fill')
        .data(nyriData)
        .enter()
        .append('path')
          .attr('d', path)
          .attr('class', 'white')
          .attr('fill', 'white');

      // draw fill for each state
      statesLayer.selectAll('path.fill')
        .data(nyriData)
        .enter()
        .append('path')
          .attr('d', path)
          .attr('class', 'fill')
          .attr('fill', '#7F7F7F')
          .attr('fill-opacity', .2);

      // now draw a wide, blurred stroke, clipped to the inside of the state
      statesLayer.selectAll('path.glow')
        .data(nyriData)
        .enter()
        .append('path')
          .attr('d', path)
          .attr('class', 'glow')
          .attr('stroke', '#7F7F7F')
          .attr('stroke-width', 20)
          .attr('stroke-linejoin', 'round')
          .attr('stroke-opacity', .75)
          .attr('fill', 'none')
          .attr('clip-path', d => `url(#clip-${d.id})`)
          .attr('filter', 'url(#border-blur)');

          statesLayer.selectAll('path.stroke')
            .data(nyriData)
            .enter()
            .append('path')
              .attr('d', path)
              .attr('class', 'stroke')
              .attr('stroke', '#fff')
              .attr('fill', 'none');


          svgElem.append('path')
            .attr("d", () => path(nyToRi))
            .attr("stroke", "red")
            .attr("stroke-width", 4)
        
        
    
    }
  }, [svg, height, width, svgHeight, svgWidth]);


  return (
    <div className="slide-grid-full">

      <div 
        className="slide-title"
        style={{fontSize: width * 0.07}}
      >Line String</div>

      <div className="geo-point-wrapper">
        <div className="geo-point-code">
          <pre 
            style={{fontSize: width * 0.03}}
          > 
            <code className="language-js">
{
`{ // must contain 2 or more points 
  "type": "LineString",
  "coordinates": [ 
    [ 61.210817 , 35.650072 ], 
    [ 62.230651 , 35.270664 ] 
  ]
}`.trim()
}
            </code>
          </pre>
        </div>

        <div className="geo-point-state">
          <svg
            className="geo-point-svg"
            height={svgHeight}
            width={svgWidth}
            ref={svgRef}
          />
        </div>
      </div>
      
    </div>
  );
};