import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme={
  palette: {
    blue: '#228be6',
    gray: '#DEDEDE',
    lightgray: '#F5F5F5',
    darkgray: '#141518',
    pink: '#f06595',
    green: '#2ea44f',
    white: '#ffffff'
  }
};
function SealTheme({children}) {
  return (
    <ThemeProvider theme = {theme}>
      {children}
    </ThemeProvider>
    );
}

export default SealTheme;