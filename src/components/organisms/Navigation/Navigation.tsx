import React, { FC, useEffect } from 'react';
import { ApplicationRoutePaths } from '../../../routes/applicationRoutes';
import ProfileImage from '../../atoms/ProfileImage/ProfileImage';
import ProfileImageSrc from '../../../assets/img/user.png';
import NavButton from '../../molecules/NavigationButton/NavigationButton';
import { Nav, NavigationButtons, TimerContent, TimerContentWrapper } from './NavigationStyle';
import { useLocation } from 'react-router-dom';
import { theme } from '../../../theme/MainTheme';
import { BiDumbbell } from 'react-icons/bi'
import { IoMdBook, IoMdSearch } from 'react-icons/io'
import { trainingStore, workoutStore } from '../../../stores';
import { ImSphere, MdTimer, MdTimerOff } from 'react-icons/all';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { RoundButton } from '../../atoms';
import { observer } from 'mobx-react';
import { WorkoutTimer } from '../../molecules/Timer/WorkoutTimer';

export interface IWorkoutModeNavigationProps {
  isTimerActive: boolean,

  disableTimer(): void,

  enableTimer(): void,

  breakTime: number,
}

export interface INavigationProps {
  workoutMode?: IWorkoutModeNavigationProps
}

export const Navigation: FC<INavigationProps> = observer(({ workoutMode }) => {
    const { pathname } = useLocation();

    const onTimerButtonClickHandler = () => {
      workoutMode?.isTimerActive ? workoutMode.disableTimer() : workoutMode?.enableTimer()
      workoutStore.setTimerValue();
      workoutStore.clearTimerInterval();
    }

    useEffect(() => {
      if (workoutMode && workoutMode.isTimerActive) {
        workoutStore.setTimerInterval();
      }

    }, [workoutMode?.isTimerActive])

    if (workoutMode) {
      return <Nav isActive={ workoutMode.isTimerActive }>
        <TimerContentWrapper>
          <TimerContent>
            <Paragraph color={ '#fff' }>Przerwa jest
              { workoutMode.isTimerActive
                ? <Paragraph color={ theme.colors.action.success200 } fontSize={ '1.5rem' } inline> włączona</Paragraph>
                : <Paragraph color={ theme.colors.action.error100 } fontSize={ '1.5rem' } inline> wyłączona</Paragraph>
              }
            </Paragraph>
            { workoutMode.isTimerActive
              ? <Paragraph>Kliknij na przycisk stopera aby zakończyć przerwę </Paragraph>
              : <Paragraph>Kliknij na przycisk stopera aby rozpocząć przerwę </Paragraph>
            }
          </TimerContent>
          <RoundButton radius={ '5rem' } onClick={ onTimerButtonClickHandler }>
            { workoutMode.isTimerActive ? <MdTimerOff size={ 25 } color={ '#fff' }/> : <MdTimer size={ 25 } color={ '#fff' }/> }
          </RoundButton>
        </TimerContentWrapper>
        <WorkoutTimer breakTime={ workoutMode.breakTime }/>
      </Nav>
    }

    return (
      <Nav>
        <NavigationButtons>

          <NavButton path={ ApplicationRoutePaths.COMMUNITY } location={ pathname }>
            <ImSphere size={ 30 } color={ '#fff' }/>
          </NavButton>

          <NavButton path={ ApplicationRoutePaths.EXERCISE_FINDER } location={ pathname } onClick={ trainingStore.disableCreatorMode }>
            <IoMdSearch size={ 30 } color={ '#fff' }/>
          </NavButton>

          <NavButton path={ ApplicationRoutePaths.TRAININGS } location={ pathname } isSpecial={ true }>
            <BiDumbbell size={ 35 } color={ theme.colors.brand.primary300 }/>
          </NavButton>

          <NavButton path={ ApplicationRoutePaths.TRAINING_HISTORY } location={ pathname }>
            <IoMdBook size={ 30 } color={ '#fff' }/>
          </NavButton>

          <NavButton path={ ApplicationRoutePaths.ACCOUNT } location={ pathname }>
            <ProfileImage src={ ProfileImageSrc } size="30px" alt=""/>
          </NavButton>

        </NavigationButtons>
      </Nav>
    )
  }
)