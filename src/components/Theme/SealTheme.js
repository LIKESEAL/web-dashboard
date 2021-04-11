import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme={
  palette: {
    blue: '#228be6',
    gray: '#f6f8fa',
    pink: '#f06595',
    green: '#2ea44f',
  }
};

function SealTheme() {
  return (
    <ThemeProvider theme = {theme} /> 
    );
}

export default SealTheme;