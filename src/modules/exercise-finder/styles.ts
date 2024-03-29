import styled from 'styled-components'
import { ExerciseFinderType } from './index';
import { theme } from '../../theme/main-theme';
import { device } from '../../devices/Breakpoints';

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

export const FinderSearch = styled.div<{type?: ExerciseFinderType}>`
  position: fixed;
  top: 80px;
  padding-right: 40px;
  width: 100%;
  left: 20px;
  padding-left: 0;
  background: ${theme.colors.brand.background300};

  @media ${device.tabletL} {
    top: ${ props => props.type === ExerciseFinderType.MODAL ? '80px' : '11.5rem' };
    padding-left: ${ props => props.type === ExerciseFinderType.MODAL ? 0 : '120px' };
  }
`

export const ExercisesContainer = styled.div<{isModal: boolean}>`
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

  @media ${device.tabletL} {
   margin-bottom: ${({isModal}) => isModal ? 0 : '200px'};
  }
`

export const ExercisesNotFound = styled.div`
  font-size: 2rem;
  text-align: center;
  position: relative;
  top: 30%;
  transform: translateY(-30%);
`
