import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react';

import { geoOrthographic, geoPath } from 'd3-geo';
import { feature }from 'topojson-client';

import world from '../../../node_modules/world-atlas/land-50m.json';

import '../../styles/Slides.css';
// console.log('world: ', world)

export default props => {
  const { width, height } = props;

  const [canvas, setCanvas] = useState(null);
  const [lambda, setLambda] = useState(0);

  const canvasRef = useCallback(node => {
      setCanvas(node);
  }, []);

  const rotate = () => {
    setLambda(lambda - 0.5);
  };

  useEffect( () => {
    let timeout = setTimeout(rotate, 200);

    return () => clearTimeout(timeout);
  }, [lambda]);

  useLayoutEffect(() => {
    if (canvas) {
      let proj = geoOrthographic()
        .rotate([lambda, 0, 0])
        .fitExtent(
          [[5,5], [width - 5, height - 5]], 
          feature(world, world.objects.land)
        );
      let ctx = canvas.getContext('2d');
      let path = geoPath(proj, ctx);

      // clear the canvas
      ctx.clearRect(0, 0, width, height);

      // background
      ctx.beginPath();
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);
      ctx.stroke();

      // sphere background
      ctx.beginPath();
      ctx.strokeStyle = "#0000ff";
      ctx.fillStyle = "#0000ff";
      path({type: "Sphere"});
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur    = 20;
      ctx.shadowColor   = "rgba(145, 200, 245, 0.8)";
      ctx.stroke();
      ctx.fill();

      ctx.beginPath();
      ctx.strokeStyle = "#000";
      ctx.fillStyle = "#b19a5c";
      path(feature(world, world.objects.land));
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur    = 10;
      ctx.shadowColor   = "#333";
      ctx.stroke();
      ctx.fill();

      
    }
  }, [canvas, lambda,  height, width]);


  return (
    <canvas 
      width={width + 1}
      height={height}
      ref={canvasRef}
    >
    </canvas>
  );

};