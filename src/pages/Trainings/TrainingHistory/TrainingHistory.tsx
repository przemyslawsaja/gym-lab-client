import React from 'react'
import { MainTemplate } from '../../../templates'
import Paragraph from '../../../components/atoms/Paragraph/Paragraph';
import { TrainingHistoryWrapper } from './TrainingHistoryStyle'
import { Button } from '../../../components/atoms';

export const TrainingHistory = () => {
  return (
    <MainTemplate>
      <TrainingHistoryWrapper>
        <Paragraph>
          Ta sekcja jest tymczasowo niedostępna
        </Paragraph>
      </TrainingHistoryWrapper>
    </MainTemplate>
  )
}

