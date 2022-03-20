import styled, { css } from 'styled-components'
import { ButtonWrapper } from '../../atoms/Button/ButtonStyle';

export const ExerciseContainer = styled.div`
  display: flex;
  margin: 20px 0;
  align-items: center;
  justify-content: space-between;
`
export const ExerciseDescription = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
`
export const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid ${ ({ theme }) => theme.colors.secondary.color3 };
  opacity: 0.3;
`
export const ExerciseImage = styled.img`
  width: 90px;
  height: 60px;
  border-radius: 10px;
  background-size: cover;
`
export const ExercisesEditButtons = styled.div`
  display: flex;
  gap: 20px;
`

export const FloatingAddExerciseButton =  styled.div`
  position: fixed;
  z-index: 10;
  left:50%;
  bottom: 15%;
  transform: translate(-50%, -15%);
  width: 225px;;
`