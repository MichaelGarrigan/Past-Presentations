
import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react';
import { geoAlbers, geoPath } from 'd3-geo';
import { select } from 'd3-selection';

import ga from '../../utils/georgia.json';

import Prism from 'prismjs';
import '../../../node_modules/prismjs/themes/prism-okaidia.css';


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
        .angle(-5)
        .fitSize([svgWidth, svgHeight], ga);
       
      let path = geoPath(proj);

      let gaData = ga.features;
      
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

      gaData.forEach( state => {
        defs.append('clipPath')
          .attr('id', `clip-${state.id}`)
          .append('path')
          .datum(state)
          .attr('d', path);
      });

      const statesLayer = svgElem.append('g');

      // a white backround for states because they'll have semi-transparent fills
      statesLayer.selectAll('path.fill')
        .data(gaData)
        .enter()
        .append('path')
          .attr('d', path)
          .attr('class', 'white')
          .attr('fill', 'white');

      // draw fill for each state
      statesLayer.selectAll('path.fill')
        .data(gaData)
        .enter()
        .append('path')
          .attr('d', path)
          .attr('class', 'fill')
          .attr('fill', '#FC7F00')
          .attr('fill-opacity', .2);

      // now draw a wide, blurred stroke, clipped to the inside of the state
      statesLayer.selectAll('path.glow')
        .data(gaData)
        .enter()
        .append('path')
          .attr('d', path)
          .attr('class', 'glow')
          .attr('stroke', '#FC7F00')
          .attr('stroke-width', 20)
          .attr('stroke-linejoin', 'round')
          .attr('stroke-opacity', .75)
          .attr('fill', 'none')
          .attr('clip-path', d => `url(#clip-${d.id})`)
          .attr('filter', 'url(#border-blur)');

          statesLayer.selectAll('path.stroke')
            .data(gaData)
            .enter()
            .append('path')
              .attr('d', path)
              .attr('class', 'stroke')
              .attr('stroke', '#fff')
              .attr('fill', 'none');

        svgElem.append('circle')
          .attr("cx", proj([ -81.491389, 31.149722])[0])
          .attr("cy", proj([ -81.491389, 31.149722])[1])
          .attr("r", "8px")
          .attr("fill", "red")
    
    }
  }, [svg, height, width, svgHeight, svgWidth]);


  return (
    <div className="slide-grid-full">

      <div 
        className="slide-title"
        style={{fontSize: width * 0.07}}
      >Point</div>

      <div className="geo-point-wrapper">
        <div className="geo-point-code">
          <pre 
            style={{fontSize: width * 0.03}}
          > 
            <code className="language-js">
{
`// - Point -
// [ longitude, latitude ]
{
  "type": "Point",
  "coordinates": [ 
    -81.491389 , 31.149722 
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