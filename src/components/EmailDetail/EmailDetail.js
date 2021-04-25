import React from 'react';
import styled, { css } from 'styled-components';

const StyledEmailTitle = styled.div`
font-weight: bold;
font-size: 1.5rem;
margin-bottom: 1rem;
`
const StyledEmailContent = styled.a`
font-size: 1rem;
`


// emailTitle : 이메일 제목
// emailContent : 이메일 내용
export default function EmailDetail({ emailTitle, emailContent, ...rest }) {
    return (
        <div>
            <StyledEmailTitle>{emailTitle}</StyledEmailTitle>
            <StyledEmailContent>{emailContent}</StyledEmailContent>
        </div>
    );
}

EmailDetail.defaultProps = {
    emailTitle: "이메일 제목",
    emailContent: "이메일 내용"
};