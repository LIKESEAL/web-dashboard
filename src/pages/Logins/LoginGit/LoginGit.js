import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Card from './../../../components/Card';
import Input from './../../../components/Input';
import Button from './../../../components/Button';
import { SealTheme } from './../../../components'

const AppBlock = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 0rem 1rem 1rem;
  text-align: center;
`;

const Group = styled.div`
  margin-top: 1rem;
`;

function LoginGit() {

  return (
    <SealTheme>
      <AppBlock>
        <div>LoginGit Page</div>
        <Card color="gray" size="small">
          <Group>
            <Input
              contentTitle={"Username or email address"}
              contentHolder={"아이디를 입력해주세요"}
              size={"small"}
            />
          </Group>

          <Group>
            <Input
              contentTitle={"Password"}
              contentHolder={"비밀번호를 입력해주세요"}
              size={"small"}
              filtering />
          </Group>
          <Group>
          <Button size="medium" color="green" fullWidth>
            sign in
          </Button>
          </Group>
        </Card>
      </AppBlock>
    </SealTheme>
  );
}

export default LoginGit;