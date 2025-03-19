import React, { useState } from 'react';
import { Stage, Layer, Circle } from 'react-konva';
import { Button, Toolbar, AppBar } from '@mui/material';

const App = () => {
  const [shapes, setShapes] = useState([]);

  const handleStageClick = (e) => {
    const { x, y } = e.target.getStage().getPointerPosition();
    setShapes([...shapes, { type: 'circle', x, y }]);
  };
  return (
    <div className="flex flex-col h-screen">
      {/* Toolbar */}
      <AppBar position="static">
        <Toolbar className="flex justify-between">
          <Button variant="contained" color="primary">
            Draw
          </Button>
          <Button variant="outlined" color="secondary">
            Clear
          </Button>
        </Toolbar>
      </AppBar>

      {/* Canvas */}
      <div className="flex-grow">
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
      </div>
    </div>
  );
};

export default App;
