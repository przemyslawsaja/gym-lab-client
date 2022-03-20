import styled, { css } from 'styled-components';
import { theme } from '../../../theme/MainTheme';

export const Container = styled.div<{ visibility: boolean }>`
  position: absolute;
  height: 100%;
  width: 100%;
  min-height: 300px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  top: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 0 30px;
  align-items: center;
  transition: .4s ease-out;
  flex-direction: column;
  ${ ({ theme, visibility }) => css`
  transform: ${ visibility ? 'translateY(-100%)' : 'none' };
  box-shadow: inset 5px 5px 20px 0px ${ theme.colors.input.lightShadow }, 
  inset -3px -3px 10px 0px ${ theme.colors.input.darkShadow };
    background: linear-gradient(to top, 
      ${ theme.colors.background.gradient.color1 } 0%, 
      ${ theme.colors.background.gradient.color2 } 100%);
  ` };
`;

export const TimerContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${ ({ theme }) => css`
  box-shadow: inset 5px 5px 20px 0px ${ theme.colors.input.darkShadow }, 
  inset -3px -3px 10px 0px ${ theme.colors.input.lightShadow };
      background: ${ theme.colors.background.gradient.color1 };
  ` };
`;

export const TimeContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${ ({ theme }) => css`
    background: linear-gradient(0deg, 
      ${ theme.colors.background.gradient.color1 } 0%, 
      ${ theme.colors.background.gradient.color2 } 100%);
    box-shadow: inset 5px 5px 20px 0px ${ theme.colors.input.lightShadow }, 
      inset -3px -3px 10px 0px ${ theme.colors.input.darkShadow };
  ` };
`;

export const Time = styled.span`
  ${ ({ theme }) => css`
      font-size: 5rem;
  ` };
`;

export const Breaker = styled.div`
  width: 100px;
  height: 10px;
  border-radius: 15px;
  ${ ({ theme }) => css`
  background:
    ${ theme.colors.background.gradient.color1 };
    box-shadow: inset -3px -3px 1px 0px ${ theme.colors.input.lightShadow };
` };
`;

export const Setter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  color: ${ ({ theme }) => theme.colors.secondary.color2 };
  font-size: ${ theme.fontSizes.m };
`;

export const UpdateTimeButton = styled.button`
  background: none;
  border: none;
  & > i {
    text-shadow: 0 0 8px ${ ({ theme }) => theme.colors.primmary.color2 };
  }
`;

export const Dash = styled.div`
  width: 50px;
  height: 3px;
  border-radius: 15px;
  background: ${ ({ theme }) => theme.colors.background.gradient.color2 };
`;