import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  ${({ theme, color }) => {
        const selected = theme.palette[color];
        return css`
      background: ${selected};
      border: 1px solid #eaecef;
      display: block;
      align-items: center;
      text-decoration: none;
    `;
    }}
`;

const sizes = {
    large: {
        height: '500px',
        width: '50%',
        fontSize: '1.25rem'
    },
    medium: {
        height: '400px',
        width: '40%',
        fontSize: '1rem'
    },
    small: {
        height: '300px',
        width: '30%',
        fontSize: '0.875rem'
    }
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    width: ${sizes[size].width};
    font-size: ${sizes[size].fontSize};
  `}
`;
const CardBlock = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 6px;
  padding: 20px;
  text-align: center;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  & + & {
    
  }
`;

function Card({ contents, color, size, ...rest }) {
    return (
        <CardBlock color={color} size={size} {...rest}>
        </CardBlock>
    );
}

Card.defaultProps = {
    color: 'blue',
    size: 'medium'
};

export default Card;