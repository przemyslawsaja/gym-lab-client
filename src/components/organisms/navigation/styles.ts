import styled from 'styled-components';
import { theme } from '../../../theme/main-theme';
import { device } from '../../../devices/Breakpoints';

export const Nav = styled.nav<{ isActive?: boolean }>`
  height: ${ props => props.isActive ? '400px' : '90px' };
  width: 100%;
  bottom: 0;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  z-index: 999;
  background: ${ theme.colors.brand.background100 };
  border-radius: 30px 30px 0 0;
  border: 1px solid #6C6C6C;
  border-bottom: none;
  transition: 0.5s ease-in-out;
  
  @media ${device.tabletL} {
   border-radius: 0;
   left: 0;
   width: 150px;  
   height: 100%
  }
`;

export const NavigationButtons = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${device.tabletL} {
    flex-direction: column;
    margin: 0 0 0 35px;
    gap: 50px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`

/*
 * Workout navigation
 **/

export const TimerContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const TimerContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
`

