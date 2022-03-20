import styled, { css } from 'styled-components';

export const Span = styled.span`
  display: block;
  ${ ({ theme }) => css`
    font-size: ${ theme.fontSize.m };
    color: ${ theme.color100 };
    :first-of-type {
      text-transform: capitalize;
      color: ${ theme.color200 };
    }
  ` }
`;

export const Div = styled.div`
    text-align: left;
`;