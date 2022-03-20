import styled from 'styled-components'
import { theme } from '../../../theme/MainTheme';
import { ButtonSize, IButtonColor } from './Button';

const { shadows } = theme;

const DEFAULT_BORDER_RADIUS = '10px';

export const ButtonWrapper = styled.button<{size?: ButtonSize, backgroundColor: IButtonColor, roundCorners: boolean}>`
  font-weight: bold;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items:center;
  justify-content: center;
  border: none;
  padding: 10px 15px;
  border-radius: ${ props => props.roundCorners ? '20px' : DEFAULT_BORDER_RADIUS};
  background: ${ props => props.backgroundColor.main };
  box-shadow: ${ shadows.base };
  transition: 0.2s ease-in-out;
  color: #fff;
  font-size: 1.5rem;
  width: 100%;
  
  :hover {
    background: ${ props => props.backgroundColor.hover };
  };
`