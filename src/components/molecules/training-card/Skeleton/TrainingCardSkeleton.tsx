import React  from 'react';
import { CardSkeleton, CardDetailsSkeleton, CardOptionsSkeleton } from './TrainingCardSkeletonStyle'
import Skeleton  from 'react-loading-skeleton'


const TrainingCardSkeleton = () => {
  return (
    <CardSkeleton>
      <CardDetailsSkeleton>
        <Skeleton width={100} height={15} />
        <Skeleton width={50} height={10}/>
        <Skeleton width={80} height={15} />
        <Skeleton width={50} height={10}/>
      </CardDetailsSkeleton>
      <CardOptionsSkeleton>
      <Skeleton width={40} height={40} borderRadius={'50%'}/>
      <Skeleton width={120} height={45} borderRadius={20}/>
    </CardOptionsSkeleton>
    </CardSkeleton>


  );
}

export default TrainingCardSkeleton;