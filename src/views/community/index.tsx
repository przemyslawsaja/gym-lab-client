import React, { useEffect } from 'react';
import { MainTemplate } from '../../templates';
import { IHeaderNavigationProps } from '../../components/organisms/HeaderNavigation/HeaderNavigation';
import { communityStore } from '../../stores';
import { SharedTraining } from '../../components/molecules/SharedTraining/SharedTraining';
import { observer } from 'mobx-react';
import { SharedTrainingSkeleton } from '../../components/molecules/SharedTraining/SharedTrainingSkeleton';
import { SharedTrainingSkeletonWrapper } from '../../components/molecules/SharedTraining/SharedTrainingStyle'

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
