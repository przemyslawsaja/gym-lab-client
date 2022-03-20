import styled, { css } from 'styled-components';
import { theme } from '../../../../theme/MainTheme';

const { fontSizes, colors } = theme;

export const Wrapper = styled.div<{prefix?: string}>`
  position: relative;
  width: 100%;
  height: 5rem;
  
  &:before {
    position: absolute;
    right: 10px;
    top: 12px;
    font-size: 1.5rem;
    color: #d0d0d0;
    content: '${props => props.prefix}';
    display: ${props => props.prefix ? 'block' : 'none'};
  }
`;

export const StyledInput = styled.input<{prefix?: string}>`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px ${colors.brand.background300} inset !important;
    -webkit-text-fill-color: #fff;
  }
  
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  border-radius: 10px;
  font-family: inherit;
  color: white;
  outline: none;
  padding: 1.25rem;
  padding-right: ${props => props.prefix ? '3rem' : '1.25rem'};
  background: none;
  cursor: ${props => props.disabled && 'not-allowed'} ;
  
  &:hover {
    border-color: ${colors.brand.primary100};
  }
  
  &:focus {
    border-color: ${colors.brand.primary200};
  }
`;

export const Label = styled.label<{hasValue?: boolean}>`
  font-size: ${ fontSizes.m };
  background: ${ colors.brand.background300 };
  position: absolute;
  transform: translateY(-50%);
  padding: 0 0.5rem;
  color: white;
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  z-index: ${ props => props.hasValue ? 1 : -1 };
  top: ${ props => props.hasValue ? 0 : '50%' };
  font-size: ${ props => props.hasValue && '1.3rem' };
  left: ${ props => props.hasValue ? '0.8rem' : '1rem' };

  ${ StyledInput }:focus ~ & {
    z-index: 1;
    top: 0;
    font-size: 1.3rem;
    left: 0.8rem;
  }
`;