import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 0rem 1rem 1rem;
`;
//   padding: 0rem 1rem 1rem;

const InputGroup = styled.div`
  margin-top: 1rem;
`;

function InputList() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595'
        }
      }}
    >
      <AppBlock>
        hi~~
      </AppBlock>
    </ThemeProvider>
  );
}

export default InputList;
