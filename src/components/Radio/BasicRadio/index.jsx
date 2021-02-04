import React, {useState} from 'react';
import S from './styled';

function BasicRadio({contents}) {
    const [radioState, setRadioState] = useState('');
    
    const handleRadioState = (content) => {
        setRadioState(content);
    }

  return (
    <div>
        {contents.map((v)=> {
            return (
            <>
            <S.Radio type="radio" checked={v===radioState} onClick={()=>handleRadioState(v)}/>
            <S.Text color={v===radioState?"blue":"red"} onClick={()=>handleRadioState(v)}>{v}</S.Text>
            </>);
        })}
    </div>
  );
}

BasicRadio.defaultProps = {
    contents: []
}

export default BasicRadio;
