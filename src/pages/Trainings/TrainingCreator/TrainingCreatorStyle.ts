import styled from 'styled-components';
import { device } from '../../../devices/Breakpoints';
import img from '../../../assets/img/training.png'

export const TrainingCreatorSettings = styled.div`
  @media ${device.laptop} {
    width: 100%;
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

export const DesktopCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const TrainingCreatorExercisesHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
`

export const TrainingCreatorFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  z-index: 10;
  right: 100px;
  bottom: 100px;
  
  button {
    width: 300px;  
  }
`

export const TrainingCreatorHeader = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  
  @media ${device.tabletL} {
    grid-template-columns: 3fr 2fr;
    gap: 100px;
  }
  
`

export const TrainingImage = styled.div`
  width: 350px;
  height: 350px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  justify-self: center;
`