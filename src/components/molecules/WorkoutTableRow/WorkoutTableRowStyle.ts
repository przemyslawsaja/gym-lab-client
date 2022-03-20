import styled from 'styled-components';
import { theme } from '../../../theme/MainTheme';

const { background100 } = theme.colors.brand;

export const WorkoutTableRowWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid ${background100};
  margin-top: 20px;
  
  &:last-child {
    border-bottom: none;
  }
`

export const WorkoutTableRowItem = styled.div`
  justify-self: center;
  width: 100%;
  padding-left: 20px;
`