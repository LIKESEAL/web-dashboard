import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';

const Block = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function SY() {
  return (
    <div>
      <Block>
        <Button>
          스타일 1
        </Button>
      </Block>
    </div>
  );
}

export default SY;
