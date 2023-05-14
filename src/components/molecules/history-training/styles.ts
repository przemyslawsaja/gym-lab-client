import styled from 'styled-components';
import { theme } from '../../../theme/main-theme';

export const HistoryItemWrapper = styled.div`
  margin-bottom: 20px;
  overflow: hidden;
`
export const HistoryItemContainer = styled.div<{ isActive: boolean }>`
  height: 60px;
  box-shadow: ${ theme.shadows.base };
  width: 100%;
  background: ${ ({ isActive }) => isActive ? theme.colors.brand.primary300 : theme.colors.brand.background100 };
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  z-index: 20;
  position: relative;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  
  &:hover {
    background: ${theme.colors.brand.primary300};
  }
`

export const HistoryExercises = styled.div<{isActive: boolean}>`
  transition: 0.2s ease-in-out;
  background: ${({isActive}) => isActive ? theme.colors.brand.background400 : theme.colors.brand.background300} ;
  height: ${({isActive}) => isActive ? 'auto' : '0'};
  border-radius: 0 0 10px 10px;
  padding: 0 20px;
  transform: ${({isActive}) => isActive ? 'translateY(0%)' : 'translateY(-100%)'} ;
  z-index: -10;
`
export const HistoryExerciseItem = styled.div`
  display: flex;
  text-align: center;
  gap: 10px;
  padding: 15px 5px;
  align-items: center;
  flex-direction: column;
  border-bottom: 2px solid ${ theme.colors.brand.background100 };

  &:last-child {
    border-bottom: none
  }
`

export const HistoryExerciseSets = styled.div`
  color: ${theme.colors.brand.text400};
  font-size: 1.2rem;
`
