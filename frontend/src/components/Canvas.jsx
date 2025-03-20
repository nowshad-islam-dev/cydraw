import React from 'react';
import { Stage, Layer, Circle, Rect, Line } from 'react-konva';
import useStore from '../store';

const Canvas = ({ onCanvasClick }) => {
  const shapes = useStore((state) => state.shapes);
  const tool = useStore((state) => state.tool);
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
