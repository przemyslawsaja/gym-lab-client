import { observer } from 'mobx-react';
import * as React from 'react';
import { FC } from 'react';
import { ExerciseCardWrapper, ExerciseName } from './ExerciseCardStyle'
import { Button } from '../../atoms';
import { ButtonType } from '../../atoms/Button/Button';
import { exerciseSetsStore, trainingStore } from '../../../stores';
import { Exercise } from '../../../models/Exercise/Exercise';

interface IExerciseCard {
  exercise: Exercise;

  onClick?(): void
}


export const ExerciseCard: FC<IExerciseCard> = observer(({ exercise, onClick }) => {
  const { isCreatorModeEnabled, isEditModeEnabled, setExercise } = trainingStore;
  const onExerciseClickHandler = (exercise: Exercise): void => {

    if (isCreatorModeEnabled || isEditModeEnabled) {
      exerciseSetsStore.enableExerciseSetsModal();
      setExercise(exercise)
      return;
    }

    onClick && onClick();
  }

  return <ExerciseCardWrapper>
    <ExerciseName>
      { exercise.name }
    </ExerciseName>
    <Button type={ ButtonType.PRIMARY } content={ 'Wybierz' } onClick={ () => onExerciseClickHandler(exercise) }/>
  </ExerciseCardWrapper>
})