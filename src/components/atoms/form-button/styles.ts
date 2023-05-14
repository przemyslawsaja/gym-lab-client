import styled, { css } from 'styled-components';
import { theme } from '../../../theme/main-theme';

const secondary1 = theme.colors.button.secondary.color1;
const secondary2 = theme.colors.button.secondary.color2;

export const ButtonWrapper = styled.button<{ radius?: number, secondary?: boolean, play?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  
  justify-content: center;
  cursor: pointer;
  
  :active, a:focus {
    outline: 0;
    border: none;
    -moz-outline-style: none;
  }


  ${ ({ theme, secondary }) => css`
    color:  ${ secondary ? '#000' : secondary1 };
    font-weight: 600;
    font-size: ${ theme.fontSizes.m };
    height: 60px;
    width: 200px;
    border-radius:  15px;
    background: ${ secondary ? secondary1 : 'transparent' };
    background: -moz-linear-gradient(135deg, 
      ${ secondary ? secondary1 : 'transparent' } 0%, 
      ${ secondary ? secondary2 : 'transparent' } 100%);
    background: -webkit-linear-gradient(135deg, 
      ${ { secondary } ? secondary1 : 'transparent' } 0%, 
      ${ secondary ? secondary2 : 'transparent' } 100%);
    background: linear-gradient(135deg, 
      ${ secondary ? secondary1 : 'transparent' } 0%, 
      ${ secondary ? secondary2 : 'transparent' } 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr = ${ secondary ? secondary1 : 'transparent' },
      endColorstr = ${ secondary ? secondary2 : 'transparent' },
      GradientType = 1
      );
    -webkit-box-shadow: 10px 10px 18px -6px ${ theme.colors.button.shadow.dark },
                        -5px -5px 11px -6px ${ theme.colors.button.shadow.light };
    -moz-box-shadow: 10px 10px 18px -6px ${ theme.colors.button.shadow.dark }, 
                    -5px -5px 11px -6px ${ theme.colors.button.shadow.light };
    box-shadow: 5px 5px 11px -6px ${ theme.colors.button.shadow.dark }, 
                -5px -5px 11px -6px ${ theme.colors.button.shadow.light };  
    border: 2px solid ${ secondary1 };
  ` }
`;
