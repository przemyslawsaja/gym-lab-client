import React, { FC } from 'react';
import { Exercise } from '../../../models/Exercise/Exercise';
import { observer } from 'mobx-react';
import { ExerciseCard, ExerciseCardContent, ExerciseCardIcon, SetsWrapper } from './styles'
import H2 from '../../atoms/h2'
import Paragraph from '../../atoms/paragraph';
import { BsFillTrashFill } from 'react-icons/bs';
import { trainingStore } from '../../../stores';
import { toast } from 'react-toastify';

interface ITrainingCreatorExerciseCard {
  exercise: Exercise;
}


const TrainingCreatorExerciseCard: FC<ITrainingCreatorExerciseCard> = observer(({ exercise }) => {

  const onExerciseRemoveHandler = (): void => {
    trainingStore.removeExerciseFromTraining(exercise)
    toast.success('Pomyślnie usunięte ćwiczenie');
  }

  return <ExerciseCard>
    <ExerciseCardContent>
      <H2>{ exercise.name }</H2>

      <SetsWrapper>
        { exercise.sets?.map(set => {
          return <Paragraph> { set.weight }kg x { set.reps } </Paragraph>
        }) }
      </SetsWrapper>
    </ExerciseCardContent>
    <ExerciseCardIcon onClick={ onExerciseRemoveHandler }>
      <BsFillTrashFill size={ '3rem' }/>
    </ExerciseCardIcon>
  </ExerciseCard>
})

export default TrainingCreatorExerciseCard;
