import styled from 'styled-components';
import { theme } from '../../../../theme/main-theme';

export const EmptyCardWrapper = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 10px;
  background-color: ${ theme.colors.brand.background100 };
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  cursor: pointer;

  &:hover {
    border: 2px solid ${ theme.colors.brand.primary300 };
  }
`


export const DesktopExerciseCardWrapper = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 10px;
  background-color: ${ theme.colors.brand.background100 };
  position: relative;
  z-index: -1;
`
export const ExerciseCardImage = styled.div<{ img: string }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(${ props => props.img }) no-repeat center;
  background-size: cover;
  box-shadow: inset 0px -68px 90px 3px rgba(19, 19, 22, 1);
  filter: brightness(64%);
  opacity: 0.6;
  z-index: -1;
  border-radius: 10px;
  
`

export const ExerciseCardContent = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 10px;
`
export const ExerciseCardRemove = styled.div`
  z-index: 12;
  position: absolute;
  right: 20px;
  top: 20px;
`

export const ExerciseCardContainer = styled.div`
  position: relative;
`
