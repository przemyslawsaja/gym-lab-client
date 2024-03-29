import { observer } from 'mobx-react';
import { Modal } from '../../atoms/modals/modal';
import { WorkoutTimer } from '../workout-timer';
import React, { FC, useEffect } from 'react';
import { workoutStore } from '../../../stores';
import { IWorkoutModeNavigationProps } from '../../organisms/navigation';

interface ITimerModal {
  disableModal: () => void,
  workoutMode: IWorkoutModeNavigationProps,
}

export const TimerModal: FC<ITimerModal> = observer(({ disableModal, workoutMode }) => {

  useEffect(() => {
    workoutStore.clearTimerInterval();
    workoutMode.enableTimer()
    workoutStore.setTimerInterval();

  }, [workoutMode?.isTimerActive])

  return <Modal title={ "Czas na przerwę!" } backButton={ {
    content: 'Zakończ przerwę',
    onClick: disableModal
  } }>
    <WorkoutTimer breakTime={ workoutMode.breakTime } radius={ 500 }/>

  </Modal>


})
