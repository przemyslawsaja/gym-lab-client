import React, { useEffect } from 'react';
import { TrainingsWrapper } from './styles'
import { MainTemplate } from '../../../templates'
import TrainingCard from '../../../components/molecules/training-card/TrainingCard'
import { observer } from 'mobx-react';
import { IoAddSharp } from 'react-icons/all';
import { ApplicationRoutePaths } from '../../../routes/applicationRoutes';
import { useHistory } from 'react-router-dom';
import { trainingStore } from '../../../stores';
import TrainingCardSkeleton from '../../../components/molecules/training-card/Skeleton/TrainingCardSkeleton';

export const TrainingsList = observer(() => {
  const history = useHistory();
  const { isTrainingListLoading, trainings, fetchUserTrainings, enableCreatorMode, clearTraining } = trainingStore;

  useEffect(() => {
    enableCreatorMode();
    fetchUserTrainings()
  }, [])

  const trainingNavigation = {
    title: "Twoje treningi",
    buttons: {
      right: {
        icon: IoAddSharp, onClick() {
          history.push(ApplicationRoutePaths.TRAINING_CREATOR)
          clearTraining()
          enableCreatorMode();
        },
        content: 'Dodaj nowy trening'
      }
    }
  }

  const renderTrainings = (): JSX.Element | JSX.Element[] => {
    if (isTrainingListLoading) {
      return <>
        <TrainingCardSkeleton />
        <TrainingCardSkeleton />
        <TrainingCardSkeleton />
      </>
    }

    return <>
      { trainings.map(training => {
        return (
          <TrainingCard
            id={ training.id }
            key={ training.id }
            name={ training.name }
            duration={ training.duration }
            trainable={training.exercises.length > 0}
          />
        )
      }) }
      <TrainingCard isEmpty={ true } emptyContent={ 'Dodaj trening' }/>
    </>
  }

  return (
    <MainTemplate navigation={ trainingNavigation }>
      <TrainingsWrapper>
        { renderTrainings() }
      </TrainingsWrapper>
    </MainTemplate>
  )
});
