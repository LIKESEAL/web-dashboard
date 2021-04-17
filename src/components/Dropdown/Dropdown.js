import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      display: inline-block;
      align-items: center;
      text-decoration: none;
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:hover ${DropDownContent} {
        display: block;
      }
    `;
  }}
`;

const sizes = {
  large: {
    height: '3rem',
    minWidth: '150px',
    maxWidth: '200px',
    fontSize: '1.25rem'
  },
  medium: {
    height: '2.25rem',
    minWidth: '140px',
    maxWidth: '190px',
    fontSize: '1rem'
  },
  small: {
    height: '1.75rem',
    minWidth: '130px',
    maxWidth: '180px',
    fontSize: '0.875rem'
  }
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    min-width: ${sizes[size].minWidth};
    max-width: ${sizes[size].maxWidth};
    font-size: ${sizes[size].fontSize};
  `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

const contentsizes = {
  large: {
    marginTop: '10px',
    minWidth: '120px',
    maxWidth: '150px'
  },
  medium: {
    marginTop: '8px',
    minWidth: '110px',
    maxWidth: '140px'
  },
  small: {
    marginTop: '6px',
    minWidth: '100px',
    maxWidth: '130px'
  }
};

const contentsizeStyles = css`
  ${({ size }) => css`
    margin-top: ${contentsizes[size].marginTop};
    min-width: ${contentsizes[size].minWidth};
    max-width: ${contentsizes[size].maxWidth};
  `}
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  cursor: pointer;

  /* 크기 */
  ${contentsizeStyles}

`;

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: center;
  &:hover {
    background-color: #f1f1f1;
  }
`;

function Dropdown({ contents, color, size, ...rest }) {
  const [dropdownState, setDropdownState] = useState("dropdown");  

  const handleDropdownState = (content) => {
    if (!content) return;
    setDropdownState(content);
  }

  return (
    <StyledButton color={color} size={size} {...rest}>{dropdownState}
      <DropDownContent size={size} >
        {contents.map((c) => {
          return (
            <>
              {" "}
              < SubA onClick={() => handleDropdownState(c)}>{c}</SubA>
            </>);
        })}
      </DropDownContent>
    </StyledButton>
  );
}

Dropdown.defaultProps = {
  color: 'blue',
  size: 'medium'
};

export default Dropdown;