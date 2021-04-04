import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Radio from '../../components/Radio'

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const RadioGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function RadioList() {

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
      <>
        <AppBlock>
          <RadioGroup>
            <Radio contents={["seulwoo", "hi"]} color="blue"/>
          </RadioGroup>
          <RadioGroup>
            <Radio contents={["ji", "se", "seul"]} color="pink"/>
          </RadioGroup>
          <RadioGroup>
            <Radio contents={["one","two","three","four","five","six"]} size="large" color="blue" outline/>
          </RadioGroup>
          <RadioGroup>
            <Radio contents={["one","two","three","four"]} size="large" color="pink" size="large"/>
          </RadioGroup>
        </AppBlock>
      </>
    </ThemeProvider>
  );
}

export default RadioList;