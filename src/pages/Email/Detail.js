import React from 'react';
import styled from 'styled-components';
import {SealTheme} from "../../components";
import UserInfo from "../../components/UserInfo";
import EmailDetail from "../../components/EmailDetail";
import TimeInfo from "../../components/TimeInfo";

const AppBlock = styled.div`
display: flex;
flex-direction: row;
`

const FlexBlock = styled.div`
flex: ${props => props.flex}
`


export default function Detail({userName, userEmail, emailTitle, emailContent, date, time}) {

    return (
        <SealTheme>
            <AppBlock>
            <FlexBlock flex={8}>
            <UserInfo userName={userName} userEmail={userEmail}/>
            </FlexBlock>
            <FlexBlock flex={2}>
            <TimeInfo date={date} time={time}/>
            </FlexBlock>
            </AppBlock>
            <hr/>
            <EmailDetail emailTitle={emailTitle} emailContent={emailContent}/>
        </SealTheme>
    );
}

Detail.defaultProps = {
    userName: "Seulwoo Park",
    userEmail: "swpark@naver.com",
    emailTitle: "안녕하세요 잘 부탁드립니다 ~ ^^",
    emailContent: `내용입니다\n
    이메일 입니다\n
    \n
    회신 부탁드립니다 ^^`,
    date: "20210401",
    time: "143000"
}
