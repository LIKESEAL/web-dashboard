import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Card from './../../components/Card';

const AppBlock = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
  text-align: center;
`;
//   padding: 0rem 1rem 1rem;

const CardGroup = styled.div`
  margin-top: 1rem;
`;

function CardList() {
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
        <CardGroup>
          <Card color="gray" size="large" />
          <Card color="pink" />
        </CardGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default CardList;
