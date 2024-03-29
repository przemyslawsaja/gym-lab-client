import React, { useEffect, useState } from 'react'
import { MainTemplate } from '../../../templates'
import { EmptyHistory, TrainingHistoryWrapper } from './styles'
import { trainingStore } from '../../../stores';
import { HistoryTraining } from '../../../components/molecules/history-training';
import { observer } from 'mobx-react';
import Paragraph from '../../../components/atoms/paragraph';

export const TrainingHistory = observer(() => {
  const [isLoading, setLoader] = useState<boolean>(false);
  const { fetchUserHistoryTrainings, historyTrainings } = trainingStore;

  useEffect(() => {
    fetchUserHistoryTrainings().then(() => setLoader(false))
  }, [])

  return (
    <MainTemplate navigation={ { title: "Historia treningów" } }>
      { isLoading
        ? <div>Loading...</div>
        : <TrainingHistoryWrapper>
          { historyTrainings.length === 0
            ? <EmptyHistory><Paragraph>Nie ukończyłeś jeszcze żadnego treningu :(</Paragraph></EmptyHistory>
            : historyTrainings.map(historyTraining => <HistoryTraining training={ historyTraining }/>) }
        </TrainingHistoryWrapper> }

    </MainTemplate>
  )
});

