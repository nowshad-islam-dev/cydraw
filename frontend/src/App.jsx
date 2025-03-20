import React, { useState } from 'react';

// components
import ToolbarComponent from './components/Toolbar';
import Canvas from './components/Canvas';

const App = () => {
  const [shapes, setShapes] = useState([]);
  const [tool, setTool] = useState('circle');

  const handleCanvasClick = (e) => {
    const { x, y } = e.target.getStage().getPointerPosition();
    if (tool === 'circle') {
      setShapes([...shapes, { type: 'circle', x, y }]);
    } else if (tool === 'rect') {
      setShapes([...shapes, { type: 'rect', x, y }]);
    } else if (tool === 'line') {
      const endX = x + 100;
      const endY = y;
      setShapes([...shapes, { type: 'line', x, y, endX, endY }]);
    }
  };
  return (
    <div className="flex flex-col h-screen">
      <ToolbarComponent onToolSelect={setTool} />
      <div className="flex-grow">
        <Canvas shapes={shapes} tool={tool} onCanvasClick={handleCanvasClick} />
      </div>
    </div>
  );
};

export default App;
