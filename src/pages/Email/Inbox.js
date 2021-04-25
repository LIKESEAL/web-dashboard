import React from 'react';
import styled from 'styled-components';
import { 
  Button,
  Card,
  SealTheme 
} from './../../components';


const AppBlock = styled.div`
  width: 1024px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;


function Inbox() {
  
  return (
    <SealTheme>
      <AppBlock>
      <Card color="gray" size="large" />
      </AppBlock>
    </SealTheme>
  );
}

export default Inbox;

