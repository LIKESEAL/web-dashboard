import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './../../components/Button';

const Block = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function ButtonList() {
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
      <Block>
        <Button>BUTTON</Button>
        <Button>BUTTON</Button>
        <Button color="gray">BUTTON</Button>
        <Button color="pink">BUTTON</Button>
      </Block>
    </ThemeProvider>
  );
}

export default ButtonList;
