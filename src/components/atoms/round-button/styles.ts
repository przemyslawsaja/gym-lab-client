import styled from 'styled-components';
import { IButtonColor } from '../button';

const DEFAULT_BUTTON_RADIUS = '40px'
const DEFAULT_BORDER_RADIUS = '50%'

export const RoundButtonWrapper = styled.button<{ radius?: string, borderRadius?: string, backgroundColor?: IButtonColor }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${ props => props.backgroundColor ? props.backgroundColor.main : '#fff' };
  width: ${ props => props.radius ? props.radius : DEFAULT_BUTTON_RADIUS };
  height: ${ props => props.radius ? props.radius : DEFAULT_BUTTON_RADIUS };
  border-radius: ${ props => props.borderRadius ? props.borderRadius : DEFAULT_BORDER_RADIUS };
  border: none;
  transition: 0.2s ease-in-out;
  
  &:hover {
    background: ${ props => props.backgroundColor ? props.backgroundColor.hover : '#dedede' };
  }

  :active, a:focus {
    outline: 0;
    border: none;
    -moz-outline-style: none;
  }
`;
