import React from 'react';
import { Stage, Layer, Circle, Rect, Line } from 'react-konva';

const Canvas = ({ shapes, tool, onCanvasClick }) => {
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight - 64}
      onClick={onCanvasClick}
    >
      <Layer>
        {shapes.map((shape, index) => {
          if (shape.type === 'circle') {
            return (
              <Circle
                key={index}
                x={shape.x}
                y={shape.y}
                radius={30}
                fill="blue"
              />
            );
          } else if (shape.type === 'rect') {
            return (
              <Rect
                key={index}
                x={shape.x}
                y={shape.y}
                width={100}
                height={50}
                fill="green"
              />
            );
          } else if (shape.type === 'line') {
            return (
              <Line
                key={index}
                points={[shape.x, shape.y, shape.endX, shape.endY]}
                stroke="black"
              />
            );
          }
          return null;
        })}
      </Layer>
    </Stage>
  );
};

export default Canvas;
