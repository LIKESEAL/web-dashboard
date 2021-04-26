import React from 'react';
import styled from 'styled-components';
import {
  Card,
  Input,
  SealTheme
} from '../../components';

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
const InnerGroup = styled.div`
  display: flex;
  border: 1px solid #dee2e6;
  border-radius: 6px;
`;
const InnerLabel = styled.div`
  margin: 0rem 1rem 1rem;
  text-align: center;
`;
const InnerInput = styled.div`
  background: lightgray;
  width : -webkit-fill-available;
`;
const Textarea = styled.textarea`
  width : -webkit-fill-available;
  height: 100px;
  padding: 0.5rem;
  resize: none;
`;

function NewEmailList() {

  return (
    <SealTheme>
      <AppBlock>
        <div>New Email Page</div>
        <Card color="white" size="large">
          <Group>
            <a href="main">Inbox</a>
            <a href="main">Cancel</a>
            <a href="main">Send</a>
          </Group>
          <Group>
            <InnerGroup>
              <InnerLabel>To:</InnerLabel>
              <InnerInput>
                <Input contentHolder={"Enter email(s)..."} />
              </InnerInput>
            </InnerGroup>
          </Group>
          <Group>
            <InnerGroup>
              <InnerLabel>CC: </InnerLabel>
              <InnerInput>
                <Input contentHolder={"Enter email(s)..."} />
              </InnerInput>
            </InnerGroup>
          </Group>
          <Group>
            <InnerGroup>
              <InnerLabel>Subject: </InnerLabel>
              <InnerInput>
                <Input contentHolder={"Enter topic..."} />
              </InnerInput>
            </InnerGroup>
          </Group>
          <Group>
            <Textarea>
              <textarea> </textarea>
            </Textarea>
          </Group>
        </Card>
      </AppBlock>
    </SealTheme>
  );
}

export default NewEmailList;