import styled, { css } from 'styled-components'
import CheckIcon from '../../../assets/icons/check-solid.svg'
import { theme } from '../../../theme/main-theme';

export const StyledRadioButton = styled.div`
  width: 2.5em;
  height: 2.5em;
  border: 2px solid ${ ({ theme }) => theme.colors.secondary.color2 };
  border-radius: 50%;

 &::after {
   content: "";
   background-image: url(${ CheckIcon });
   background-size: cover;
   width: 100%;
   height: 100%;
   display: block;
   margin: auto;
   transform: scale(0);
   border-radius: 50%;
   transition: transform 0.25s; 
 }
`
export const RadioWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  font-size: ${ theme.fontSizes.m };
  gap: 10px;
  cursor: pointer;
`
export const RadioInput = styled.input`
  display: none;
  
  &:checked + ${ StyledRadioButton }::after {
    transform: scale(0.7);
  }
  &:checked + ${ StyledRadioButton }{
    ${ ({ theme }) => css`
    border: 2px solid ${ theme.colors.primmary.color1 };
    webkit-box-shadow: 0px 0px 5px 0px ${ theme.colors.primmary.color1 };
    -moz-box-shadow: 0px 0px 5px 0px ${ theme.colors.primmary.color1 };
    box-shadow: 0px 0px 5px 0px ${ theme.colors.primmary.color1 },
                inset 0px 0px 5px 0px ${ theme.colors.primmary.color1 };
  ` }
  }
`
export const Label = styled.p`
  color: ${ ({ theme }) => theme.colors.secondary.color2 }
`
export const LabelDetails = styled.span`
  margin-left: 5px;
  color: ${ ({ theme }) => theme.colors.secondary.color3 };
`
