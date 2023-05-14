import { observer } from 'mobx-react';
import * as React from 'react';
import { FC } from 'react';
import { ExerciseCardWrapper, ExerciseName } from './styles'
import { Button } from '../../../atoms';
import { ButtonType } from '../../../atoms/button';
import { exerciseSetsStore, trainingStore } from '../../../../stores';
import { Exercise } from '../../../../models/Exercise/Exercise';

interface IExerciseCard {
  exercise: Exercise;
  withButton?: boolean;
  onClick?(): void
}


export const MobileExerciseCard: FC<IExerciseCard> = observer(({ exercise, onClick, withButton = true }) => {
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
    {withButton && <Button btnType={ ButtonType.PRIMARY } content={ 'Wybierz' } onClick={ () => onExerciseClickHandler(exercise) }/>}
  </ExerciseCardWrapper>
})
