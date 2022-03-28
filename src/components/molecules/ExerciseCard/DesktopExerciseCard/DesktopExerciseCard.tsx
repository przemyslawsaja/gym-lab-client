import React, { FC } from "react"
import { DesktopExerciseCardWrapper, EmptyCardWrapper, ExerciseCardContainer, ExerciseCardContent, ExerciseCardImage, ExerciseCardRemove } from './DesktopExerciseCardStyle'
import { MdOutlineAddCircleOutline } from 'react-icons/all';
import Paragraph from '../../../atoms/Paragraph/Paragraph';
import { Exercise } from '../../../../models/Exercise/Exercise';
import { BsFillTrashFill } from 'react-icons/bs';
import { RoundButton } from '../../../atoms';
import { ButtonType } from '../../../atoms/Button/Button';
import { trainingStore } from '../../../../stores';
import { toast } from 'react-toastify';

interface IIDesktopExerciseCardProps {
  emptyContent?: string
  isEmpty?: boolean
  exercise?: Exercise;

  onRemove?(exercise: Exercise): void;

  onClick?(): void;
}

export const DesktopExerciseCard: FC<IIDesktopExerciseCardProps> = ({ emptyContent, isEmpty, onClick, exercise }) => {

  const onExerciseRemoveHandler = (): void => {
    if (!exercise) {
      return;
    }
    trainingStore.removeExerciseFromTraining(exercise)
    toast.success('Pomyślnie usunięte ćwiczenie');
  }

  const renderComma = (exerciseNumber: number): string => {
    if (!exercise) {
      return '';
    }

    return exerciseNumber === exercise?.sets.length - 1 ? '' : ', '
  }

  if (isEmpty) {
    return <EmptyCardWrapper onClick={ onClick }>
      <MdOutlineAddCircleOutline size={ '7rem' }/>
      <Paragraph> { emptyContent } </Paragraph>

    </EmptyCardWrapper>
  }

  if (exercise) {
    return <ExerciseCardContainer>
      <ExerciseCardRemove onClick={ onExerciseRemoveHandler }>
        <RoundButton type={ ButtonType.RED }>
          <BsFillTrashFill size={ '2rem' } color={ '#fff' }/>
        </RoundButton>
      </ExerciseCardRemove>
      <DesktopExerciseCardWrapper>

        <ExerciseCardContent>
          <h2>{ exercise.name.toUpperCase() }</h2>
          <div>
            <Paragraph>{ exercise.sets.map((set, idx) => `${ set.reps } x ${ set.weight }${ renderComma(idx) } `) }</Paragraph>
          </div>
        </ExerciseCardContent>
        <ExerciseCardImage img={ exercise.images[0] }/>

      </DesktopExerciseCardWrapper>
    </ExerciseCardContainer>
  }

  return null;

}