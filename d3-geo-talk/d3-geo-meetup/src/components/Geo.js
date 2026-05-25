
import React, {useState} from 'react';
import geoData from './geoData.js';

import * as geo from 'd3-geo';
import * as sel from 'd3-selection';
console.log(Object.keys(geo))
console.log(Object.keys(sel))
console.log(sel.select())


export default props => {
  const height = Math.round(props.dimensions.width * 0.5);
  const width = Math.round(props.dimensions.width * 0.9);

  const [lambda, setLambda] = useState(0);

  const rotate = () => {
    setLambda(lambda - 5);
  };

  // setTimeout(rotate, 500)

  const proj = geo.geoMercator()
    .rotate([lambda, 0, 0])
    .fitExtent([[0,0], [width, height]], geoData);;
  const proj1 = geo.geoOrthographic()
    .rotate([lambda, 0, 0])
    .fitExtent([[0,0], [width, height]], geoData);

  const p = geo.geoPath().projection(proj);
  const p1 = geo.geoPath().projection(proj1);
  
  return (
    <div>
      <svg
        className="geo-svg"
        height={height}
        width={width}
      >
        <path
          ref={node => sel.select(node).datum(geoData).attr('d', p) }
        />
      </svg>
      <svg
        className="geo-svg1"
        height={Math.round(props.dimensions.width * 0.5)}
        width={Math.round(props.dimensions.width * 0.9)}
      >
        {
          geoData.features.map( item => (
            <path
              ref={
                node => (
                  sel.select(node)
                    .datum(item)
                    .attr('d', p1) 
                    .on('mouseenter', () => sel.select(node).style('fill', 'orange'))
                    .on('mouseleave', () => sel.select(node).style('fill', 'black'))
                )}
            />
          ))
        }
        
      </svg>

    </div>
  )
}