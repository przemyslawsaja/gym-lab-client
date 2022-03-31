import React, { FC } from 'react';
import { Timer, TimerEditLine, TimerEditWrapper, TimerWrapper } from './WorkoutTimerStyle'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { workoutStore } from '../../../stores';
import { HiMinus, HiPlus } from 'react-icons/all';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { theme } from '../../../theme/MainTheme';
import { observer } from 'mobx-react';

interface IWourkoutTimer {
  breakTime: number,
  radius?: number
}

export const WorkoutTimer: FC<IWourkoutTimer> = observer(({ breakTime, radius }) => {
  const { quaternary300, background500 } = theme.colors.brand;
  return (
    <>
      <TimerWrapper>
        <Timer radius={radius}>
          { <CircularProgressbar
            value={ workoutStore.timerValue }
            maxValue={ breakTime }
            minValue={ 0 }
            text={ `${ workoutStore.timerValue.toString() }s` }
            styles={ buildStyles({
              strokeLinecap: 'round',
              textSize: '16px',
              pathTransitionDuration: 0.5,
              pathColor: quaternary300,
              textColor: quaternary300,
              trailColor: background500,
            }) }/> }
        </Timer>
      </TimerWrapper>
      <TimerEditWrapper>
        <TimerEditLine/>
        <HiMinus size={ 30 } color={ quaternary300 } onClick={ () => workoutStore.subtractTime(15) } cursor={'pointer'}/>
        <Paragraph fontSize={ "2rem" }>15s</Paragraph>
        <HiPlus size={ 30 } color={ quaternary300 } onClick={ () => workoutStore.addTime(15) } cursor={'pointer'}/>
        <TimerEditLine/>
      </TimerEditWrapper>
    </>
  )
})

export default Timer;