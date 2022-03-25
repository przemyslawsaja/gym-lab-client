import React, { FC, useEffect } from 'react'
import { ExerciseFinderWrapper, ExercisesContainer, ExercisesNotFound, FinderContainer } from './ExerciseFinderStyle'
import { SearchInput } from '../../components/atoms/Inputs/SearchInput/SearchInput';
import { exerciseFinderStore, exerciseSetsStore, trainingStore } from '../../stores';
import { observer } from 'mobx-react';
import { ExerciseCard } from '../../components/molecules/ExerciseCard/ExerciseCard'
import { ExerciseSetsModal } from '../../components/organisms/ExerciseSetsModal/ExerciseSetsModal';
import { ApplicationRoutePaths } from '../../routes/applicationRoutes';
import { useHistory } from 'react-router-dom';
import { ExerciseCardSkeleton } from '../../components/molecules/ExerciseCard/Skeleton/ExerciseCardSekleton';
import { ExerciseFinderSkeleton } from './ExerciseFinderSkeleton';

export enum ExerciseFinderType {
  VIEW = 'view',
  MODAL = 'modal'
}

interface IExerciseFinderProps {
  type?: ExerciseFinderType

  onExerciseClick?(): void;

  onExerciseSetsModalConfirm?(): void;

  onExerciseSetsModalClose?(): void;
}

export const ExerciseFinder: FC<IExerciseFinderProps> = observer(({
    type,
    onExerciseClick,
    onExerciseSetsModalClose,
    onExerciseSetsModalConfirm
  }) => {

    const { exerciseSearch, exerciseList, setExerciseSearch, fetchExercises, isLoading } = exerciseFinderStore;
    const { exercise, assignExerciseToTraining } = trainingStore;
    const { isExerciseSetsModalOpen, disableExerciseSetsModal, clearSets } = exerciseSetsStore;
    const history = useHistory();

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
        return <ExerciseFinderSkeleton />
      }

      return exerciseList.length <= 0
        ? <ExercisesNotFound> Brak wyników wyszukiwania :(</ExercisesNotFound>
        : exerciseList.map((exercise, idx) => <ExerciseCard key={ idx } exercise={ exercise } onClick={ onExerciseClick }/>)
    }

    return (
      <ExerciseFinderWrapper>
        {console.log(isExerciseSetsModalOpen)}
        { isExerciseSetsModalOpen && <ExerciseSetsModal onConfirm={ onExercisesSetsModalConfirmHandler } onClose={ onExerciseSetsModalCloseHandler } /> }
        <FinderContainer type={ type }>
          <SearchInput value={ exerciseSearch }
                       onChange={ (e) => setExerciseSearch(e.target.value) }
                       placeholder={ "Wyszukaj ćwiczenia po jego nazwie..." }
          />

          <ExercisesContainer>
            { renderExercises() }
          </ExercisesContainer>
        </FinderContainer>
      </ExerciseFinderWrapper>
    )
  }
)
