import React from 'react';

// components
import ToolbarComponent from './components/Toolbar';
import Canvas from './components/Canvas';
import useStore from './store';

const App = () => {
  const tool = useStore((state) => state.tool);
  const addShape = useStore((state) => state.addShape);

  const handleCanvasClick = (e) => {
    const { x, y } = e.target.getStage().getPointerPosition();
    if (tool === 'circle') {
      addShape({ type: 'circle', x, y });
    } else if (tool === 'rect') {
      addShape({ type: 'rect', x, y });
    } else if (tool === 'line') {
      const endX = x + 100;
      const endY = y;
      addShape({ type: 'line', x, y, endX, endY });
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <ToolbarComponent />
      <div className="flex-grow">
        <Canvas onCanvasClick={handleCanvasClick} />
      </div>
    </div>
  );
};

export default App;
