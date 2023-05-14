import React, { FC } from 'react';
import Paragraph from '../../atoms/paragraph'
import { Div, H2, Span } from './styles';
import { theme } from '../../../theme/main-theme';

interface ITrainingNote {
  title: string,
  text: string,
  date: string,
}

const TrainingNote: FC<ITrainingNote> = ({ title, text, date }) => {
  return (
    <Div>
      <H2>{ title }</H2>
      <Paragraph color={ theme.colors.secondary.color1 }>{ text }</Paragraph>
      <Span>{ date }</Span>
    </Div>
  )
}

export default TrainingNote;
