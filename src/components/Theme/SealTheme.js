import { ThemeProvider } from 'styled-components';
const theme={
  palette: {
    blue: '#228be6',
    gray: '#f6f8fa',
    pink: '#f06595'
  }
};

function SealTheme() {

  return (
    <ThemeProvider theme> </ThemeProvider>
    );
}

export default SealTheme;