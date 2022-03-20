import React, { FC } from 'react';
import Paragraph from '../../atoms/Paragraph/Paragraph'
import { Div, H2, Span } from './TrainingNoteStyle';
import { theme } from '../../../theme/MainTheme';

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