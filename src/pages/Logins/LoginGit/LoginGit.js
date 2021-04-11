import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Card from './../../../components/Card';
import Input from './../../../components/Input';
import Button from './../../../components/Button';

const AppBlock = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 0rem 1rem 1rem;
  text-align: center;
`;

const InputGroup = styled.div`
  margin-top: 1rem;
`;

function LoginGit() {

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#f6f8fa',
          pink: '#f06595'
        }
      }}
    >
      <AppBlock>
        <div>LoginGit Page</div>
        <Card color="gray" size="small">
          <InputGroup>
            <Input
              contentTitle={"Username or email address"}
              contentHolder={"아이디를 입력해주세요"}
            />
          </InputGroup>

          <InputGroup>
            <Input
              contentTitle={"Password"}
              contentHolder={"비밀번호를 입력해주세요"}
              size={"small"}
              filtering />
          </InputGroup>
          <Button size="large" color="pink" outline fullWidth>
            BUTTON
          </Button>
        </Card>
      </AppBlock>
    </ThemeProvider>
  );
}

export default LoginGit;