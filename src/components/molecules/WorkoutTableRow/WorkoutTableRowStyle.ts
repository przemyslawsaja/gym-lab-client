import styled from 'styled-components';
import { theme } from '../../../theme/MainTheme';
import { device } from '../../../devices/Breakpoints';

const { background100 } = theme.colors.brand;

export const WorkoutTableRowWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid ${ background100 };
  margin-top: 20px;
  
  
  &:last-child {
    border-bottom: none;
  }

`

export const WorkoutTableRowItemNumber = styled.div`
  font-weight: bold;
  font-size: 1.7rem;
  background: ${ theme.colors.brand.quaternary500 };
  color: ${ theme.colors.brand.background100 };
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0px 8px 20px -10px rgba(0, 0, 0, 1);

  @media ${ device.tabletM } {
    margin-left: 20px;
  }

  @media ${ device.laptop } {
    margin-left: 60px;
  }
`

export const WorkoutTableRowItem = styled.div`
  justify-self: center;
  width: 100%;
  padding-left: 20px;

  @media ${ device.laptopL } {
    padding: 20px;
  }
`