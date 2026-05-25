import React from 'react';


export default props => (
  <div className="slide-grid-full">

    <div 
      className="slide-title"
      style={{fontSize: props.width * 0.07}}
    >Converting Data</div>

    <div 
      className="converting-wrapper"
      style={{fontSize: props.width * 0.035}}
    >
      <div className="converting-column">
        <p className="converting-title">Tool</p>
        <p>yarn add shapefile</p>
        <p>yarn add topojson-server</p>
        <p>yarn add topojson-client</p>
        <p>yarn add topojson-simplify</p>
      </div>

      <div className="converting-column">
        <p className="converting-title">Effect</p>
        <p>Shapefile => GeoJSON</p>
        <p>GeoJSON => TopoJSON</p>
        <p>TopoJSON => GeoJSON</p>
        <p>file => smaller file</p>
      </div>

    </div>

  </div>
);