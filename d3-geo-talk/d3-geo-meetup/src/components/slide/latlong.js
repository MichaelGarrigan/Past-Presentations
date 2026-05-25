import React, { useState, useCallback, useLayoutEffect } from 'react';

import { geoGraticule, geoOrthographic, geoPath } from 'd3-geo';

import '../../styles/Slides.css';


export default ({ width, height }) => {
  const canvasWidth = width * 0.6;
  const canvasHeight = height * 0.9;
  const fontSize = Math.round(canvasWidth * 0.05);
  const padding = Math.round(canvasWidth * 0.02);
  const borderRadius = Math.round(canvasWidth * 0.01);

  const [canvas, setCanvas] = useState(null);
  const [globe, setGlobe] = useState('');

  const handleGlobe = str => {
    // this button is already clicked
    if (str === globe) { 
      setGlobe('');
    } else {
      setGlobe(str);
    }
  };

  const canvasRef = useCallback(node => {
      setCanvas(node);
  }, []);

  useLayoutEffect(() => {
    if (canvas) {
      let graticule = geoGraticule();
      
      let proj = geoOrthographic()
        .fitSize([canvasWidth, canvasHeight], graticule())
        .translate([canvasWidth / 2, height / 2])
        .rotate([0, -20, 0]);

      let data = graticule();

      if (globe === "lat") { // show latitude
        data.coordinates = data.coordinates.filter( (line, idx) => idx === 4 || idx > 36);
      }
      if (globe === "long") { // show longitude
        data.coordinates = data.coordinates.filter( (line, idx) => idx < 37 && idx !== 4);
      }
      
      let ctx = canvas.getContext('2d');
      let path = geoPath(proj, ctx);

      ctx.clearRect(0, 0, canvasWidth, height);

      // shadow
      ctx.beginPath();
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur    = 20;
      ctx.shadowColor   = "magenta";
      ctx.fill();
      
      // sphere
      ctx.beginPath();
      ctx.strokeStyle = "#fff";
      path({type: "Sphere"});
      ctx.stroke();

      // gratitude
      ctx.beginPath();
      ctx.strokeStyle = "white";
      path(data);
      ctx.stroke();
    
    }
  }, [canvas, globe, canvasHeight, canvasWidth, height]);


  return (
    <div className="latlong-wrapper">
      <canvas 
        width={canvasWidth}
        height={height}
        ref={canvasRef}
      />
      <div 
        className="latlong-info-wrapper"
        style={{fontSize: fontSize}}
      >
        <div className="latlong-button-group">
          <button 
            className={globe === "long" ? "latlong-button-active" : "latlong-button"}
            onClick={() => handleGlobe("long")}
            style={{fontSize: fontSize, padding: padding, borderRadius: borderRadius}}
          >Longitude</button>
          <button 
            className={globe === "lat" ? "latlong-button-active" : "latlong-button"}
            onClick={() => handleGlobe("lat")}
            style={{fontSize: fontSize, padding: padding, borderRadius: borderRadius}}
          >Latitude</button>
        </div>

        {
          globe === "long"
            ? (
              <div 
                className="latlong-info"
                style={{fontSize: fontSize}}
              >
                <p>Longitude</p>
                <p>Runs pole to pole</p>
                <p>Specifies east-west position</p>
                <p>aka -- Meridians</p>
              </div>
            ) : globe === "lat"
                  ? (
                    <div 
                      className="latlong-info"
                      style={{fontSize: fontSize}}
                    >
                      <p>Latitude</p>
                      <p>Runs parallel to the equator</p>
                      <p>Specifies north-south position</p>
                      <p>aka -- Parallels</p>
                    </div>
                  ) 
                  : (<div className="latlong-info"></div>)
        }

      </div>
    </div>
  );

};