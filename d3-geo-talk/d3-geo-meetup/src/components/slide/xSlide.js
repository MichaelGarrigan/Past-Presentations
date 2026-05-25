
import React, { useCallback, useLayoutEffect, useState } from 'react';


export default props => {
  const [node, setNode] = useState(null);

  const ref = useCallback(node => {
      setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const ctx = node.getContext('2d');
      ctx.beginPath();
      ctx.fillStyle = "#080808";
      ctx.fillRect(0, 0, props.width, props.height);
      ctx.fill();

      ctx.beginPath();
      ctx.strokeStyle = "maroon"
      ctx.lineWidth = 2;
      ctx.moveTo(0, 0);
      ctx.lineTo(props.width, props.height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(props.width, 0);
      ctx.lineTo(0, props.height);
      ctx.stroke();
    }
  }, [node, props.height, props.width]);

  return (
    <canvas
      ref={ref}
      height={props.height}
      width={props.width}
    ></canvas>
  );
};