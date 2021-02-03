import React, {useState} from 'react';
import S from './styled';

function TempRadio({text}) {
    const [radioState, setRadioState] = useState(false);
    
    const handleRadioState = () => {
        setRadioState(!radioState);
    }
  return (
    <div>
      <S.Radio type="radio" checked={radioState} onClick={handleRadioState}/>
      <S.Text color={radioState?"blue":"black"} onClick={handleRadioState}>{text}</S.Text>
    </div>
  );
}


export default TempRadio;
