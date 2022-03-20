import styled, { css } from 'styled-components';
import H2Proto from '../../atoms/H2/H2';

export const Div = styled.div`
  width: 300px;
  height: auto;
  padding: 15px;
  padding-right: 20px;
  margin: 20px auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  ${ ({ theme }) => css`
    box-shadow: 0 0 10px ${ theme.colors.button.shadow.dark };
    border: 3px solid ${ theme.colors.primmary.color1 };
  ` };
  & > * {
    margin: 10px 0;
  }
`;

export const H2 = styled(H2Proto)`
  margin: 0;
  ${ ({ theme }) => css`
    color: ${ theme.colors.primmary.color3 };
  ` };
`;

export const Span = styled.span`
  ${ ({ theme }) => css`
    font-size: ${ theme.fontSize.s };
    display: block;
    color: ${ theme.colors.secondary.color2 };
  ` };
`;