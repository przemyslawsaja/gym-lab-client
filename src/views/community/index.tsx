import React, { useEffect } from 'react';
import { MainTemplate } from '../../templates';
import { IHeaderNavigationProps } from '../../components/organisms/header-navigation';
import { communityStore } from '../../stores';
import { SharedTraining } from '../../components/molecules/shared-training';
import { observer } from 'mobx-react';
import { SharedTrainingSkeleton } from '../../components/molecules/shared-training/skeleton';
import { SharedTrainingSkeletonWrapper } from '../../components/molecules/shared-training/styles'

const trainingNavigation: IHeaderNavigationProps = {
  title: "Społeczność",
}

export const Community = observer(() => {

  useEffect(() => {
    communityStore.fetchCommunityTrainings();
  }, [])

  const renderSharedTrainings = (): JSX.Element=> {
    if (communityStore.isCommunityLoading) {
      return <SharedTrainingSkeletonWrapper>
        <SharedTrainingSkeleton />
        <SharedTrainingSkeleton />
        <SharedTrainingSkeleton />
        <SharedTrainingSkeleton />
      </SharedTrainingSkeletonWrapper>;
    }

    return <>
      { communityStore.sharedTrainings.map(training => {
        return <SharedTraining training={ training } key={training.training.id}/>
      }) }
    </>
  }

  return (
    <MainTemplate navigation={ trainingNavigation }>
      {  renderSharedTrainings() }
    </MainTemplate>
  )
})
