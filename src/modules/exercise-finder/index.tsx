import React, { FC, useEffect, useState } from 'react'
import { ExerciseFinderWrapper, ExercisesContainer, ExercisesNotFound, FinderContainer, FinderSearch } from './styles'
import { SearchInput } from '../../components/atoms/inputs/search-input/search-input';
import { exerciseFinderStore, exerciseSetsStore, trainingStore } from '../../stores';
import { observer } from 'mobx-react';
import { MobileExerciseCard } from '../../components/molecules/exercise-card/mobile-exercise-card'
import { ExerciseSetsModal } from '../../components/organisms/exercise-sets-modal';
import { ApplicationRoutePaths } from '../../routes/applicationRoutes';
import { useHistory } from 'react-router-dom';
import { ExerciseFinderSkeleton } from './skeleton';
import { useWindowSize } from '../../hooks/useWindowSize';
import { deviceValues } from '../../devices/Breakpoints';

export enum ExerciseFinderType {
  VIEW = 'view',
  MODAL = 'modal'
}

interface IExerciseFinderProps {
  type?: ExerciseFinderType
    withExercisesButtons?: boolean
  onExerciseClick?(): void;

  onExerciseSetsModalConfirm?(): void;

  onExerciseSetsModalClose?(): void;
}

export const ExerciseFinder: FC<IExerciseFinderProps> = observer(
  ({
     type,
     onExerciseClick,
     onExerciseSetsModalClose,
     onExerciseSetsModalConfirm,
     withExercisesButtons = true
   }) => {

    const { exerciseSearch, exerciseList, setExerciseSearch, fetchExercises, isLoading } = exerciseFinderStore;
    const { exercise, assignExerciseToTraining } = trainingStore;
    const { isExerciseSetsModalOpen, disableExerciseSetsModal, clearSets } = exerciseSetsStore;
    const [isTabletDevice, setTabletDevice] = useState<boolean>(true);
    const history = useHistory();

    const { width } = useWindowSize();

    useEffect(() => {
      width >= deviceValues.tabletL
        ? setTabletDevice(true)
        : setTabletDevice(false)
    }, [width])

    const onExercisesSetsModalConfirmHandler = (): void => {
      onExerciseSetsModalConfirm && onExerciseSetsModalConfirm();
      exercise.assignSetsToExercise(exerciseSetsStore.exerciseSets)
      assignExerciseToTraining();
      disableExerciseSetsModal();
      clearSets();
      onExerciseSetsModalClose ? onExerciseSetsModalClose() : history.push(ApplicationRoutePaths.TRAINING_CREATOR)
    }


    useEffect(() => {
      fetchExercises();
    }, [])

    const onExerciseSetsModalCloseHandler = (): void => {
      disableExerciseSetsModal();
      onExerciseSetsModalClose && onExerciseSetsModalClose()
    }

    const renderExercises = (): JSX.Element | JSX.Element[] => {
      if (isLoading) {
        return <ExerciseFinderSkeleton/>
      }

      return exerciseList.length <= 0
        ? <ExercisesNotFound> Brak wyników wyszukiwania :(</ExercisesNotFound>
        : exerciseList.map((exercise, idx) => <MobileExerciseCard key={ idx } exercise={ exercise } onClick={ onExerciseClick } withButton={withExercisesButtons}/>)
    }

    return (
      <ExerciseFinderWrapper>
        { isExerciseSetsModalOpen && <ExerciseSetsModal onConfirm={ onExercisesSetsModalConfirmHandler } onClose={ onExerciseSetsModalCloseHandler } fillWindow={!isTabletDevice} nested/> }
        <FinderContainer type={ type }>
          <FinderSearch type={type}>
            <SearchInput value={ exerciseSearch }
                         onChange={ (e) => setExerciseSearch(e.target.value) }
                         placeholder={ "Wyszukaj ćwiczenia po jego nazwie..." }
            />
          </FinderSearch>

          <ExercisesContainer isModal={type === ExerciseFinderType.MODAL}>
            { renderExercises() }
          </ExercisesContainer>
        </FinderContainer>
      </ExerciseFinderWrapper>
    )
  }
)
