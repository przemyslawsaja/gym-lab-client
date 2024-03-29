import { observer } from 'mobx-react';
import React, { FC, useState } from 'react';
import * as Styled from './styles';
import { IHistoryTraining } from '../../../api/use-cases/training/listHistoryTrainingsUseCase';
import Paragraph from '../../atoms/paragraph';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/all';
import { theme } from '../../../theme/main-theme';

interface IHistoryTrainingProps {
  training: IHistoryTraining;
}

export const HistoryTraining: FC<IHistoryTrainingProps> = observer(({ training }) => {
  const [isActive, setActivity] = useState<boolean>(false);

  return <Styled.HistoryItemWrapper>
    <Styled.HistoryItemContainer isActive={ isActive } onClick={ () => setActivity(!isActive) }>
      <Paragraph color={ theme.colors.brand.text100 }>{ new Date(training.createdAt).toDateString() }</Paragraph>
      { isActive
        ? <MdKeyboardArrowUp size={ '3.5rem' } cursor={ 'pointer' }/>
        : <MdKeyboardArrowDown size={ '3.5rem' } cursor={ 'pointer' }/> }

    </Styled.HistoryItemContainer>
    {<Styled.HistoryExercises isActive={isActive}>
      { training.exercises.map((exercise, number) => {
        return <Styled.HistoryExerciseItem>
          <Paragraph color={ theme.colors.brand.text100 }>{ exercise.label }</Paragraph>
          <Styled.HistoryExerciseSets>
            { exercise.sets.map((set, idx) => {
              return `${ set.reps }x${ set.weight }kg ${ idx === exercise.sets.length -1 ? '' : ', ' }`
            }) }
          </Styled.HistoryExerciseSets>
        </Styled.HistoryExerciseItem>
      }) }
    </Styled.HistoryExercises> }
  </Styled.HistoryItemWrapper>
})
