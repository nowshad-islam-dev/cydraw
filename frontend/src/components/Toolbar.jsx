import React from 'react';
import { Button, Toolbar, AppBar } from '@mui/material';
import useStore from '../store';

const ToolbarComponent = () => {
  const setTool = useStore((state) => state.setTool);
  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setTool('circle')}
        >
          Circle
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setTool('rect')}
        >
          Rectangle
        </Button>
        <Button variant="text" color="inherit" onClick={() => setTool('line')}>
          Line
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default ToolbarComponent;
