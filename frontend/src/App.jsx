import React, { useState } from 'react';
import { Stage, Layer, Circle } from 'react-konva';

const App = () => {
  const [shapes, setShapes] = useState([]);

  const handleStageClick = (e) => {
    const { x, y } = e.target.getStage().getPointerPosition();
    setShapes([...shapes, { type: 'circle', x, y }]);
  };
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={handleStageClick}
    >
      <Layer>
        {shapes.map(
          (shape, index) =>
            shape.type === 'circle' && (
              <Circle
                key={index}
                x={shape.x}
                y={shape.y}
                radius={30}
                fill="green"
              />
            )
        )}
      </Layer>
    </Stage>
  );
};

export default App;
