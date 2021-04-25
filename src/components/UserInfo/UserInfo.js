import React from 'react';
import styled, { css } from 'styled-components';

const StyledUserName = styled.a`
font-weight: bold;
`

const StyledUserEmail = styled.div`
font-size:1rem;
color: gray;
`

// userName : 유저 이름
// userEmail : 유저 이메일
export default function UserInfo({ userName, userEmail, ...rest }) {
    return (
        <div>
            <StyledUserName>{userName}</StyledUserName>
            <StyledUserEmail>{userEmail}</StyledUserEmail>
        </div>
    );
}

UserInfo.defaultProps = {
    userName: "Seulwoo Park",
    userEmail: "swpark@naver.com"
};