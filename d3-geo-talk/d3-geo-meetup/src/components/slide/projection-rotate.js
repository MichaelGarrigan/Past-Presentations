import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react';

import { geoOrthographic, geoPath } from 'd3-geo';
import { feature }from 'topojson-client';

import world from '../../../node_modules/world-atlas/countries-110m.json';

export default props => {
  const globeSize = Math.round(props.height * 0.43);

  const [canvas1, setCanvas1] = useState(null);
  const [canvas2, setCanvas2] = useState(null);
  const [canvas3, setCanvas3] = useState(null);
  const [lambda, setLambda] = useState(0);
  const [phi, setPhi] = useState(0);
  const [gamma, setGamma] = useState(0);

  const canvasRef1 = useCallback(node => {
      setCanvas1(node);
  }, []);
  const canvasRef2 = useCallback(node => {
    setCanvas2(node);
  }, []);
  const canvasRef3 = useCallback(node => {
    setCanvas3(node);
  }, []);


  const rotate = () => {
    setLambda(lambda => lambda + 1);
    setPhi(phi => phi + 1);
    setGamma(gamma => gamma + 1);
  };

  useEffect( () => {
    let timeout = setTimeout(rotate, 100);

    return () => clearTimeout(timeout);
  }, [lambda]);

  useLayoutEffect(() => {
    if (canvas1 && canvas2 && canvas3) {
    
      let radius = globeSize / 2;
      let proj = geoOrthographic()
        .scale(radius -2)
        .translate([radius, radius])
        .clipAngle(90)
        .precision(0);

      [canvas1, canvas2, canvas3].forEach( item => {
        let ctx = item.getContext('2d');

        if (item === canvas1) {
          proj.rotate([lambda, 0, 0]);
        } 
        else if (item === canvas2) {
          proj.rotate([0, phi, 0]);
        } else {
          proj.rotate([0, 0, gamma]);
        }
        
        let path = geoPath(proj, ctx);
        
        // sphere background
        ctx.beginPath();
        ctx.fillStyle = "blue";
        path({type: "Sphere"});
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = "#000";
        ctx.fillStyle = "#b19a5c";
        path(feature(world, world.objects.land));
        ctx.stroke();
        ctx.fill();

      });
      
    }
  }, [canvas1, canvas2, canvas3, lambda, phi, gamma]);
  
  return (
    <div className="slide-grid-full">

      <div 
        className="slide-title"
        style={{fontSize: props.width * 0.07}}
      >.rotate( )</div>

      <div 
        className="projection-rotate-group"
        style={{fontSize: props.width * 0.03}}
      >
        <p>projection.rotate( [ lambda, phi, gamma ] )</p>
        <p>projection.rotate( [ yaw, pitch, roll ] )</p>
        <p>All inputs are in degrees</p>
        <p>(input / 360) * (Math.PI / 180)</p>
      </div>

      <div className="projection-rotate-globes">
        <div className="projection-rotate-globe">
          <p style={{fontSize: props.width * 0.03}}>Lambda</p>
          <canvas 
            className="lambda-globe"
            height={globeSize}
            width={globeSize}
            ref={canvasRef1}
          ></canvas>
        </div>
        <div className="projection-rotate-globe">
          <p style={{fontSize: props.width * 0.03}}>Phi</p>
          <canvas 
            className="phi-globe"
            height={globeSize}
            width={globeSize}
            ref={canvasRef2}
          ></canvas>
        </div>
        <div className="projection-rotate-globe">
          <p style={{fontSize: props.width * 0.03}}>Gamma</p>
          <canvas 
            className="gamma-globe"
            height={globeSize}
            width={globeSize}
            ref={canvasRef3}
          ></canvas>
        </div>
      </div>

    </div>
  );
};