import styled, { css } from 'styled-components';
import { Link as LinkProto } from 'react-router-dom';
import { theme } from '../../../theme/MainTheme';

export const Link = styled(LinkProto)<{ active: boolean, isSpecial: true | undefined }>`
  height: 50px;
  width: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  border: ${props => props.isSpecial ? `3px solid ${ theme.colors.brand.primary300 }` : 'none'};
  border-radius: 50%;
  
  ::after {
    content: '';
    position: absolute;
    display: ${ ({ active }) => active ? 'block' : 'none' };
    width: 10px;
    height: 10px;
    background: ${ theme.colors.brand.primary300 };
    border-radius: 50%;
    top: 55px;
  }
`;

