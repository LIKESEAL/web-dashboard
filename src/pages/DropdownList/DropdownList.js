import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import BasicDropdown from './../../components/Dropdown/BasicDropdown';

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
        <DropdownGroup>
          <BasicDropdown contents={["심지영", "박슬우", "이세연"]} size="large" />
          <BasicDropdown contents={["심지영", "박슬우", "이세연"]} color="gray" />
          <BasicDropdown contents={["심지영", "박슬우", "이세연"]} color="pink" size="small" />
        </DropdownGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default DropdownList;
