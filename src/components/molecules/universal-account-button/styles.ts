import styled, { css } from 'styled-components';

const linkSize = {
  width: '330px',
}

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: ${linkSize.width};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 5px;
  text-decoration: none;    
  background: none;
  border: none;
  ${({ theme }) => css`
    color: ${theme.colors.secondary.color1};
    font-size: ${theme.fontSize.s};
    border-bottom: 1px solid ${theme.colors.secondary.color2};
  `}
`;