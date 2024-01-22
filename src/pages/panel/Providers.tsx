import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@root/src/shared/theme';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </React.StrictMode>
  );
};
