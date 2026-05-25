import React from 'react';

import Presentation from './components/Presentation.js';

import useElementSize from './utils/useElementSize.js';

import './styles/App.css';


export default () => {
  const [sizeRef, dimensions] = useElementSize();

  return (
    <div className="App" ref={sizeRef}>
      <Presentation 
        dimensions={dimensions}
      />
    </div>
  );
};