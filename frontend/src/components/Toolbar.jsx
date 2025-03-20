import React from 'react';
import { Button, Toolbar, AppBar } from '@mui/material';

const ToolbarComponent = ({ onToolSelect }) => {
  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between">
        <Button
          variant="contained"
          color="primary"
          onClick={() => onToolSelect('circle')}
        >
          Circle
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => onToolSelect('rect')}
        >
          Rectangle
        </Button>
        <Button
          variant="text"
          color="inherit"
          onClick={() => onToolSelect('line')}
        >
          Line
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default ToolbarComponent;
