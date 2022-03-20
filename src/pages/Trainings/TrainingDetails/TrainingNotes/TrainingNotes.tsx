import React from 'react'
import { MainTemplate, TrainingDetailsTemplate } from '../../../../templates'
import TrainingNote from '../../../../components/molecules/TrainingNote/TrainingNote';
import { Data } from '../../../../ExampleData';
import { ApplicationRoutePaths } from '../../../../routes/applicationRoutes'
import { useHistory, useParams } from 'react-router-dom';
import H2 from '../../../../components/atoms/H2/H2';
import { TrainingNotesWrapper } from './getTrainingNotesStyle';

const getTrainingNotes = (trainingId: string) => {

  const chosenTraining = Data.UserTrainings.find(({ id }) => id === trainingId);
  const result = chosenTraining ?
    chosenTraining.notes.map((note, i) => <TrainingNote { ...note } key={ i }/>)
    : <H2>No notes</H2>

  return result;
}

export const TrainingNotes = () => {
  const history = useHistory();
  const { trainingId } = useParams<{ trainingId: string }>();

  return (
    <MainTemplate>
      <TrainingDetailsTemplate trainingId={ trainingId }>
        <TrainingNotesWrapper>
          {
            getTrainingNotes(trainingId)
          }
        </TrainingNotesWrapper>
      </TrainingDetailsTemplate>
    </MainTemplate>
  )
}
