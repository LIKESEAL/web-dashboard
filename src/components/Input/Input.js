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
    minWidth: '5rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
    minWidth: '5rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
    minWidth: '5rem',
  }
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const StyledRadio = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  ${fullWidthStyle}
`;

function Input({ contents, color, size, outline, fullWidth, ...rest }) {
    const [inputState, setInputState] = useState('');
    
    const handleInputState = (content) => {
        if (radioState !== content) {
            setInputState(content);
        }
        else {
            setInputState('');
        }
    }
  return (
      <>
      {contents.map((v) => {
          return <StyledRadio
          color={v===inputState?color:"gray"}
          size={size}
          outline={outline}
          onClick={()=>handleInputState(v)}
          {...rest}
    >
      {v}
    </StyledRadio>})}
    </>

  );
}

Input.defaultProps = {
  color: 'blue',
  size: 'medium'
};

export default Input;