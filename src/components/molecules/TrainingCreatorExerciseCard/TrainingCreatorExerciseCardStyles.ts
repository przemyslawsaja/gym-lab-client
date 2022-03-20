import styled from 'styled-components';
import { theme } from '../../../theme/MainTheme';

const { colors, shadows } = theme;

export const ExerciseCard = styled.div`
  width: 100%;
  background: ${ colors.brand.background100 };
  box-shadow: ${ shadows.base };
  display: grid;
  grid-template-columns: 4fr 1fr;
  border-radius: 10px;
  align-items: center;
`

export const ExerciseCardContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`

export const ExerciseCardIcon = styled.div`
  border-radius: 0 10px 10px 0;
  background: ${colors.action.error200};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    cursor: pointer;
    background: ${colors.action.error300};
  }
`

export const SetsWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`