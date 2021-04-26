import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${props =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
}}
`;

const sizes = {
    large: {
        height: '3rem',
        fontSize: '1.25rem',
        width: '25rem',
    },
    medium: {
        height: '2rem',
        fontSize: '1rem',
        width: '15rem',
    },
    small: {
        height: '1.5rem',
        fontSize: '0.875rem',
        width: 'fillOpacity'
    }
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const StyledInput = styled.input`
  /* 공통 스타일 */
  padding: 5px 12px;
  vertical-align: middle;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  outline: none;
  width: -webkit-fill-available;
  
  /* 크기 */
  ${sizeStyles}
  `;

const StyledInputTitle = styled.div`
display: block;
margin-bottom: 5px;
text-align: left;
font-weight : 400;
vertical-align: middle;
font-size: 14px;

/* 크기 */
line-height: 1.5;
`

// contentTitle : 필드 제목
// contentHolder : 기본 값
// size : large, medium ( default ), small
// width : 너비
// filtering : 비밀번호 암호화 true / false ( default )
// handler : 입력 값 핸들러
function Input({ contentTitle, contentHolder, size, width, filtering, handler, ...rest }) {
    const [inputState, setInputState] = useState('');

    return (
        <div>
            {contentTitle && <StyledInputTitle size={size}>{contentTitle}</StyledInputTitle>}
        <StyledInput
            type={"text"}
            placeholder={contentHolder}
            size={size}
            width={width}
            filtering={filtering}
            value={filtering ? "*".repeat(inputState.length) : inputState}
            onChange={e => setInputState(e.target.value)}
        />
        </div>
    );
}

Input.defaultProps = {
    size: 'medium',
    filtering: false,
};

export default Input;