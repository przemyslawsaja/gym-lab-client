import styled from 'styled-components';
import { device } from '../../../devices/Breakpoints';

export const TrainingCreatorSettings = styled.div`
  @media ${device.laptop} {
    max-width: 800px;
  }
`

export const TrainingCreatorSection = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const EmptyExercises = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  
  button {
    width: 20rem;
  }
`

export const EmptyExercisesMessage = styled.span`
  font-size: 1.3rem;
  text-align: center;
`

export const ExercisesCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const TrainingCreatorExercisesHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
`
