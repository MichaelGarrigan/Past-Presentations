import React from 'react';


export default ({height, width}) => {
  const fontSize = width * 0.05;
  const imgHeight = height * 0.15;
  const imgWidth = imgHeight * 1.833;
  
  return (
  <div className="slide-grid-full">

    <div 
      className="slide-title"
      style={{fontSize: width * 0.07}}
    >Data Sources</div>

    <div 
      className="data-src-wrapper"
      style={{fontSize: fontSize}}
    >
      <div className="data-src-row">
        <p>US Census Bureau</p>
        <a 
          href="https://www.census.gov/programs-surveys/geography.html"
          className="data-src-a"
        >
          <div 
            className="data-src-img-census"
            style={{height: imgHeight, width: imgWidth}}
          ></div>
        </a>
      </div>

      <div className="data-src-row">
        <p>Natural Earth</p>
        <a 
          href="https://www.naturalearthdata.com"
          className="data-src-a"
        >
          <div 
            className="data-src-img-natural"
            style={{height: imgHeight, width: imgWidth}}
          ></div>
        </a>
      </div>

      <div className="data-src-row">
        <p>World Atlas</p>
        <a 
          href="https://github.com/topojson/world-atlas"
          className="data-src-a"
        >
          <div 
            className="data-src-img-world"
            style={{height: imgHeight, width: imgWidth}}
          ></div>
        </a>
      </div>

      <div className="data-src-row">
        <p>US Atlas</p>
        <a 
          href="https://github.com/topojson/us-atlas"
          className="data-src-a"
        >
          <div 
            className="data-src-img-us"
            style={{height: imgHeight, width: imgWidth}}
          ></div>
        </a>
      </div>
      
    </div>
    
  </div>
  );
};