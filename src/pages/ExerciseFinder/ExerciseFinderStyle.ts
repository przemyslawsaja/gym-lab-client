import styled from 'styled-components'
import { ExerciseFinderType } from './ExerciseFinder';

export const ExerciseFinderWrapper = styled.div`
  height: 100%;
`

export const FinderContainer = styled.div<{ type?: ExerciseFinderType }>`
  margin-top: ${ props => props.type === ExerciseFinderType.MODAL ? '20px' : 0 };
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

export const ExercisesContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 100%;
  overflow-y: scroll;
`

export const ExercisesNotFound = styled.div`
  font-size: 2rem;
  text-align: center;
  position: relative;
  top: 30%;
  transform: translateY(-30%);
`