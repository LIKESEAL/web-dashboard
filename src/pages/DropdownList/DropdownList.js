import React from 'react';
import styled from 'styled-components';
import { 
  Dropdown,
  SealTheme 
} from './../../components';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 0rem 1rem 1rem;
`;
//   padding: 0rem 1rem 1rem;

const DropdownGroup = styled.div`
  margin-top: 1rem;
`;

function DropdownList() {
  return (
    <SealTheme>
      <AppBlock>
        <DropdownGroup>
          <Dropdown contents={["심지영", "박슬우", "이세연"]} size="large" />
          <Dropdown contents={["심지영", "박슬우", "이세연"]} color="gray" />
          <Dropdown contents={["심지영", "박슬우", "이세연"]} color="pink" size="small" />
        </DropdownGroup>
      </AppBlock>
      </SealTheme>
  );
}

export default DropdownList;
