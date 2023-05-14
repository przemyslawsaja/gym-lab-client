import * as React from 'react';
import Skeleton from 'react-loading-skeleton';
import * as Styled from './styles'

export const SharedTrainingSkeleton = () => {
  return <Styled.SkeletonWrapper>
    <Skeleton width={ 100 } height={ 17 }/>
    <Skeleton width={ 50 } height={ 17 }/>
    <Skeleton width={ '100%' } height={ 200 }/>
    <Skeleton width={ 35 } height={ 35 } borderRadius={ 20 } inline/>
    <Skeleton width={ 35 } height={ 35 } borderRadius={ 20 }/>
    <Skeleton width={ 50 } height={ 17 } inline={ false }/>
    <Skeleton width={ '100%' } height={ 17 }/>
    <Skeleton width={ 100 } height={ 17 } />
    <Skeleton width={ 60 } height={ 17 }/>
    <br />
  </Styled.SkeletonWrapper>
}
