import React from 'react';
import { Providers } from './Providers';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';

const Panel: React.FC = () => {
  return (
    <Providers>
      <MuiAppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            API Explorer
          </Typography>
        </Toolbar>
      </MuiAppBar>
    </Providers>
  );
};

export default Panel;
