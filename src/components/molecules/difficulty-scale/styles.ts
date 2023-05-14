import { theme } from '../../../theme/main-theme';
import styled, { css } from 'styled-components'

const DefaultCircleRadius = 15;
const primmary1 = theme.colors.primmary.color1;
const primmary2 = theme.colors.primmary.color2;
const secondary = theme.colors.button.primmary.color1;


export const ScaleWrapper = styled.div`
  display: flex;
  gap: 5px;
`
export const LevelCircle = styled.div<{ filled?: boolean }>`
  width: ${ DefaultCircleRadius }px;
  height: ${ DefaultCircleRadius }px;
  border-radius: ${ DefaultCircleRadius / 2 }px;

  ${ ({ theme, filled }) => css`
  background:  ${ filled ? primmary1 : secondary };
    background: -moz-linear-gradient(135deg, 
      ${ filled ? primmary1 : null } 0%, 
      ${ filled ? primmary2 : null } 100%);
    background: -webkit-linear-gradient(135deg, 
      ${ { filled } ? primmary1 : null } 0%, 
      ${ filled ? primmary2 : null } 100%);
    background: linear-gradient(135deg, 
      ${ filled ? primmary1 : null } 0%, 
      ${ filled ? primmary2 : null } 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr = ${ filled ? primmary1 : null },
      endColorstr = ${ filled ? primmary2 : null },
      GradientType = 1
      );
      border: ${ filled ? 'none' : `2px solid ${ primmary1 }` };
      -webkit-box-shadow: 0px 0px 5px 0px ${ theme.colors.button.shadow.glow };
      -moz-box-shadow: 0px 0px 5px 0px ${ theme.colors.button.shadow.glow };
      box-shadow: 0px 0px 15px 0px ${ theme.colors.button.shadow.glow };
  ` }
`
