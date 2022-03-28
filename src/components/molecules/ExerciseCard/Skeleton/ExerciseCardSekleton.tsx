import * as React from 'react';
import { ExerciseCardWrapper, ExerciseName } from '../MobileExerciseCard/MobileExerciseCardStyle'
import Skeleton from 'react-loading-skeleton';

export const ExerciseCardSkeleton = () => {

  return <ExerciseCardWrapper>
    <ExerciseName>
      <Skeleton width={150} height={17} />
    </ExerciseName>
    <Skeleton width={93} height={43} borderRadius={20}/>
  </ExerciseCardWrapper>
}