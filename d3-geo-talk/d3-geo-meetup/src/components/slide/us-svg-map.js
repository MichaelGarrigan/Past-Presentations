
import React, { useState, useCallback, useLayoutEffect } from 'react';

import { geoAlbers, geoPath } from 'd3-geo';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { select } from 'd3-selection';
import { feature } from 'topojson-client';

import us from '../../../node_modules/us-atlas/states-10m.json';


export default ({ height, width }) => {
  const [svg, setSvg] = useState(null);

  const svgRef = useCallback(node => {
    setSvg(node);
  }, []);
  

  // remove Alaska, Hawaii, Virgin Islands, Guam and Puerto Rico
  us.objects.states.geometries = us.objects.states.geometries.filter(d => d.id !== "02" && d.id !== "15" && d.id !== "78" && d.id !== "72" && d.id !== "68" && d.id !== "66" && d.id !== "60" && d.id !== "69");


  useLayoutEffect( () => {
    if (svg) {
      
      let proj = geoAlbers()
        .fitSize([width * 0.9, height * 0.9], feature(us, us.objects.states))
        .translate([width / 2, height / 2])
       
      let path = geoPath(proj);
      
      const svgElem = select(svg);

      // clear children from svg
      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }

      const defs = select(svg).append('defs');
  
      const noiseFilter = defs.append('filter').attr("id", 'noise').attr('filterUnits', 'userSpaceOnUse');

      noiseFilter.append("feTurbulence")
        .attr('height', height * 2)
        .attr('width', width)
        .attr('result', 'waves')
        .attr('type', 'turbulence')
        .attr('baseFrequency', `0.8 0.8`)
        .attr('numOctaves', 1)
        .attr('seed', 53);
      
      noiseFilter.append('feDisplacementMap')
        .attr('in','SourceGraphic')
        .attr('in2','waves')
        .attr('height', height * 2)
        .attr('scale', 50)
        .attr('xChannelSelector', 'R')
        .attr('yChannelSelector', 'B')
        .attr('result','ripples');
  
      noiseFilter.append('feGaussianBlur')
        .attr('in', 'ripples')
        .attr('color-interpolation-filters', 'sRGB') 
        .attr('stdDeviation', 2);
      
      // create/append the filter
      const filter = defs.append('filter')
        .attr('id', 'border-blur');

      // the glow filter 
      filter.append('feGaussianBlur')
        .attr('in', 'SourceGraphic')
        .attr('stdDeviation', 5)
        .attr('result', 'shadow');

      feature(us, us.objects.states).features.forEach( state => {
        defs.append('clipPath')
          .attr('id', `clip-${state.id}`)
          .append('path')
          .datum(state)
          .attr('d', path);
      });

      // water is a solid rectangle underneath everything
      const waterLayer = svgElem.append('g');
      waterLayer.append('rect')
        .attr('width', width)
        .attr('height', height)
        .style('fill', "#e4fdfd");

      waterLayer.selectAll('path')
        .data(feature(us, us.objects.states).features)
        .enter()
        .append('path')
          .attr('d', path)
          .attr('stroke-linejoin', 'round')
          .attr('fill', 'none')
          .attr('stroke', "#13bddb")
          .attr('opacity',.75)
          .attr('stroke-width', 10)
          .attr('filter', 'url(#noise)')
          .attr('transform', 'translate(-17,-17)');
      

      const statesLayer = svgElem.append('g');

      // a white backround for states because they'll have semi-transparent fills
      statesLayer.selectAll('path.fill')
        .data(feature(us, us.objects.states).features)
        .enter()
        .append('path')
          .attr('d', path)
          .attr('class', 'white')
          .attr('fill', 'white');

      // draw fill for each state
      statesLayer.selectAll('path.fill')
        .data(feature(us, us.objects.states).features)
        .enter()
        .append('path')
          .attr('d', path)
          .attr('class', 'fill')
          .attr('fill', d => schemeCategory10[d.id % 10])
          .attr('fill-opacity', .2);

      // now draw a wide, blurred stroke, clipped to the inside of the state
      statesLayer.selectAll('path.glow')
        .data(feature(us, us.objects.states).features)
        .enter()
        .append('path')
          .attr('d', path)
          .attr('class', 'glow')
          .attr('stroke', d => schemeCategory10[d.id % 10])
          .attr('stroke-width', 20)
          .attr('stroke-linejoin', 'round')
          .attr('stroke-opacity', .75)
          .attr('fill', 'none')
          .attr('clip-path', d => `url(#clip-${d.id})`)
          .attr('filter', 'url(#border-blur)');

          statesLayer.selectAll('path.stroke')
            .data(feature(us, us.objects.states).features)
            .enter()
            .append('path')
              .attr('d', path)
              .attr('class', 'stroke')
              .attr('stroke', '#fff')
              .attr('fill', 'none');
    }
  }, [svg, height, width]);

  return (
    <svg
      height={height}
      width={width}
      ref={svgRef}
    />
  );
};