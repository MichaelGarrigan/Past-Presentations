import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div 
      className="slide-title"
      style={{fontSize: props.width * 0.07}}
    >Shapefiles</div>

    <ul 
      className="slide-full-bullets"
      style={{fontSize: props.width * 0.03}}
    >
      <li>The shapefile format is a digital vector storage format for storing geometric location</li>
      <li>Does not store topological information</li>
      <li>three mandatory files have filename extensions .shp, .shx, and .dbf</li>
      <li>.shp — shape format; the feature geometry itself</li>
      <li>.shx — shape index format; a positional index of the feature geometry to allow seeking forwards and backwards quickly</li>
      <li>.dbf — attribute format; columnar attributes for each shape, in dBase IV format</li>
      
      <li>
        <a 
          className="link-pink"
          href="www.esri.com/library/whitepapers/pdfs/shapefile.pdf">Shapefile Whitepaper</a>
      </li>
      <li>
        <a 
          className="link-pink"
          href="www.esri.com/news/arcuser/0401/topo.html">Shapefile Overview</a>
      </li>
    </ul>

  </div>
);