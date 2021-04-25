import React from 'react';
import styled from 'styled-components';
import {SealTheme} from "../../components";
import UserInfo from "../../components/UserInfo";
import EmailDetail from "../../components/EmailDetail";

const AppBlock = styled.div`
  width: 1024px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;


export default function Detail({userName, userEmail, emailTitle, emailContent}) {

    return (
        <SealTheme>
            <UserInfo userName={userName} userEmail={userEmail}/>
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
    회신 부탁드립니다 ^^`
}
