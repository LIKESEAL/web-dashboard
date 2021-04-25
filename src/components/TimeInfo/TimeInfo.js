import React, {useState, useEffect} from 'react';
import styled, { css } from 'styled-components';

const StyledDateTime = styled.div`
font-size:1rem;
`

// userName : 유저 이름
// userEmail : 유저 이메일
export default function TimeInfo({ date, time, ...rest }) {
    const [dateTimeState, setDateTimeState] = useState(new Date());
    useEffect(()=>{
        dateTimeState.setDate(date);
        dateTimeState.setTime(time);
    }, []);

    return (
        <div>
            <StyledDateTime>{dateTimeState.toDateString()}</StyledDateTime>
            <StyledDateTime>{dateTimeState.toLocaleTimeString()}</StyledDateTime>
        </div>
    );
}

TimeInfo.defaultProps = {
    date: "20210401",
    time: "133000"
};