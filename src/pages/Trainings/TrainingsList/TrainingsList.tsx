import React, { useEffect } from 'react';
import { TrainingsWrapper } from '../TrainingsStyle'
import { MainTemplate } from '../../../templates'
import TrainingCard from '../../../components/molecules/TrainingCard/TrainingCard'
import { observer } from 'mobx-react';
import { IoAddSharp } from 'react-icons/all';
import { ApplicationRoutePaths } from '../../../routes/applicationRoutes';
import { useHistory } from 'react-router-dom';
import { trainingStore } from '../../../stores';
import TrainingCardSkeleton from '../../../components/molecules/TrainingCard/Skeleton/TrainingCardSkeleton';

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

  const renderTrainings = ():JSX.Element | JSX.Element[] => {
    if (isTrainingListLoading) {
      return <>
        <TrainingCardSkeleton/>
        <TrainingCardSkeleton/>
        <TrainingCardSkeleton/>
      </>
    }

    return trainings.map(training => {
      return (
        <TrainingCard
          id={ training.id }
          key={ training.id }
          name={ training.name }
          duration={ training.duration }
        />
      )
    })

  }
  return (
    <MainTemplate navigation={ trainingNavigation }>
      <TrainingsWrapper>
        { renderTrainings() }
      </TrainingsWrapper>
    </MainTemplate>
  )
});