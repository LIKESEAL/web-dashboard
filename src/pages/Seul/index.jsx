import React from 'react';
import BasicRadio from '../../components/Radio/BasicRadio';
import TempRadio from '../../components/Radio/TempRadio';

function Seul() {
  return (
    <div>
      슬우
      <div>
      <TempRadio text={"대충 만든 라디오버튼"}/>
      </div>
      <div>
        <BasicRadio contents={["1번", "2번", "3번", "4번", "5번"]}/>
      </div>
    </div>
  );
}

export default Seul;
