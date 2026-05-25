import React, { useEffect } from 'react';

import slideArr from './slideArr.js';


export default props => {
  const { setSlideDeckLength } = props;

  const slidesMapped = slideArr.map(  
    Comp => <Comp height={props.height} width={props.width} />
  );

  useEffect( 
    () => setSlideDeckLength(slidesMapped.length -1), 
    [ setSlideDeckLength, slidesMapped.length ]
  );
  

  return (
    <div className="slide-wrapper">
      {slidesMapped[props.currentSlide]}
    </div>
  );
};