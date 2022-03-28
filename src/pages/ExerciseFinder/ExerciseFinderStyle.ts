import styled from 'styled-components'
import { ExerciseFinderType } from './ExerciseFinder';
import { theme } from '../../theme/MainTheme';

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
  position: relative;
`

export const FinderSearch = styled.div`
  position: fixed;
  top: 80px;
  padding: 0 10px;
  width: 100%;
  left: 0;
  background: ${theme.colors.brand.background300};
`

export const ExercisesContainer = styled.div`
  margin-top: 80px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;

  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`

export const ExercisesNotFound = styled.div`
  font-size: 2rem;
  text-align: center;
  position: relative;
  top: 30%;
  transform: translateY(-30%);
`