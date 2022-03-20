import React, { FC } from 'react';
import { Breaker, Container, Dash, Setter, Time, TimeContainer, TimerContainer, UpdateTimeButton } from './TimerStyle';
import Icon from '../../atoms/Icon/Icon';
import { theme } from '../../../theme/MainTheme';

interface ITimer {
  breakTime: number,
  visibility: boolean,
}

const Timer: FC<ITimer> = ({ breakTime, visibility }) => {
  return (
    <Container visibility={ visibility }>
      <Breaker/>
      <TimerContainer>
        <TimeContainer>
          your break:
          <Time>
            { `${ breakTime }s` }
          </Time>
        </TimeContainer>
      </TimerContainer>
      <Setter>
        <Dash/>
        <UpdateTimeButton>
          <Icon size={ 1.5 } className="fas fa-minus" color={ theme.colors.primmary.color1 }/>
        </UpdateTimeButton>
        15s
        <UpdateTimeButton>
          <Icon size={ 1.5 } className="fas fa-plus" color={ theme.colors.primmary.color1 }/>
        </UpdateTimeButton>
        <Dash/>
      </Setter>
    </Container>
  )
}

export default Timer;