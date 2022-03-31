import React, { FC, useState } from 'react';
import { WorkoutTableRowItem, WorkoutTableRowItemNumber, WorkoutTableRowWrapper } from './WorkoutTableRowStyle';
import { Input } from '../../atoms/Inputs/Input/Input';
import { IExerciseSet } from '../../organisms/ExerciseSetsModal/ExerciseSet';

interface IWorkoutTableRow {
  set: IExerciseSet;
  number: number
}

export const WorkoutTableRow: FC<IWorkoutTableRow> = ({ set, number }) => {
  const [weight, setWeight] = useState<number>(set.weight);
  const [reps, setReps] = useState<number>();

  return <WorkoutTableRowWrapper>
    <WorkoutTableRowItem>
      <WorkoutTableRowItemNumber>
        { number }
      </WorkoutTableRowItemNumber>
    </WorkoutTableRowItem>
    <WorkoutTableRowItem>
      <Input onChange={ e => setWeight(parseInt(e.target.value)) } value={ weight } placeholder={ set.weight.toString() } prefix={ 'kg' } type={ 'number' }/>
    </WorkoutTableRowItem>
    <WorkoutTableRowItem>
      <Input onChange={ e => setReps(parseInt(e.target.value)) } value={ reps ?? '' } placeholder={ set.reps.toString() } type={ 'number' }/>
    </WorkoutTableRowItem>
  </WorkoutTableRowWrapper>

}

