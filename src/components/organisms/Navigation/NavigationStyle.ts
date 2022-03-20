import styled from 'styled-components';
import { theme } from '../../../theme/MainTheme';

export const Nav = styled.nav<{ isActive?: boolean }>`
  height: ${ props => props.isActive ? '400px' : '90px' };
  transition: 0.5s ease-in-out;
  width: 100%;
  bottom: 0;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  z-index: 999;
  background: ${ theme.colors.brand.background100 };
  border-radius: 30px 30px 0 0;
  border: 1px solid #6C6C6C;
`;

export const NavigationButtons = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

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

export const Timer = styled.div`
  height: 200px;
  width: 200px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const TimerEditWrapper = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const TimerEditLine = styled.div`
  padding: 0 20px;
  height: 2px;
  width: 50px;
  background-color: #434758;
`