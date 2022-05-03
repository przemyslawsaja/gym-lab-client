import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { MainTemplate } from '../../templates';
import { MdCheck, MdClose, MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { trainingStore, workoutStore } from '../../stores';
import { observer } from 'mobx-react';
import { Carousel } from 'react-responsive-carousel';
import H1 from '../../components/atoms/H1/H1';
import { WorkoutTableRow } from '../../components/molecules/WorkoutTableRow/WorkoutTableRow';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import { ApplicationRoutePaths } from '../../routes/applicationRoutes';
import { Modal } from '../../components/atoms/Modals/Modal/Modal';
import Confetti from 'react-confetti'
import { useWindowSize } from '../../hooks/useWindowSize';
import { IHeaderNavigationProps } from '../../components/organisms/HeaderNavigation/HeaderNavigation';
import { IWorkoutModeNavigationProps } from '../../components/organisms/Navigation/Navigation';
import {
  CarouselContainer,
  CarouselWrapper,
  CongratulationsImage,
  CongratulationsMessage,
  WorkoutFooter,
  WorkoutFooterWrapper,
  WorkoutHeader,
  WorkoutHeaderLine,
  WorkoutHeaderTitle,
  WorkoutTable,
  WorkoutTableBody,
  WorkoutTableHeader,
  WorkoutWrapper
} from './WorkoutStyle'
import { deviceValues } from '../../devices/Breakpoints';
import { Button, RoundButton } from '../../components/atoms';
import { ButtonType } from '../../components/atoms/Button/Button';
import { MdTimer } from 'react-icons/all';
import { TimerModal } from '../../components/molecules/TimerModal/TimerModal';

export const Workout = observer(() => {
  const { trainingId } = useParams<{ trainingId: string, exerciseId: string }>();
  const [isTabletDevice, setTabletDevice] = useState<boolean>(true);
  const [isTimerModalOpen, setTimerModal] = useState<boolean>(false);
  const { width, height } = useWindowSize();
  const history = useHistory()

  useEffect(() => {
    width >= deviceValues.tabletL
      ? setTabletDevice(true)
      : setTabletDevice(false)
  }, [width])

  const {
    setWorkoutTraining,
    currentExercise,
    isLoading,
    incrementedExerciseNumber,
    training,
    isWorkoutFinished,
    clearWorkout,
    nextExercise,
    previousExercise,
    setWorkoutAsFinished,
    isTimerEnabled,
    disableTimer,
    enableTimer,
    maxTimerValue,
    isFinalExercise,
    isFirstExercise,
    addTrainingToHistory
  } = workoutStore;

  useEffect(() => {
    trainingStore.getTrainingById(trainingId).then(() => setWorkoutTraining(trainingStore.training))
  }, [])

  const getLeftNavigationButton = () => {
    return isFirstExercise()
      ? {
        icon: MdClose, onClick() {
          history.push(ApplicationRoutePaths.TRAININGS)
        },
        content: "Opuść trening"
      }
      : {
        icon: MdNavigateBefore, onClick() {
          previousExercise()
        },
        content: "Poprzednie ćwiczenie"
      }
  }

  const getRightNavigationButton = () => {
    return isFinalExercise()
      ? {
        icon: MdCheck, onClick() {
          addTrainingToHistory()
            .then(() => setWorkoutAsFinished());
        },
        content: "Zakończ trening"
      }
      : {
        icon: MdNavigateNext, onClick() {
          nextExercise();
        },
        content: "Kolejne ćwiczenie"
      }
  }

  const workoutNavigation: IHeaderNavigationProps = {
    title: "Tryb treningowy",
    subtitle: `${ incrementedExerciseNumber } z ${ training.exercises.length } ${ isTabletDevice ? 'ćwiczeń' : '' }`,
    buttons: {
      left: isTabletDevice ? undefined : getLeftNavigationButton(),
      right: isTabletDevice ? undefined : getRightNavigationButton()
    }
  }

  const onWorkoutFinishModalClickHandler = (): void => {
    history.push(ApplicationRoutePaths.TRAININGS);
    clearWorkout()
  }

  if (isLoading) {
    return null;
  }

  if (isWorkoutFinished) {
    return <>
      { isTabletDevice && <Confetti
        width={ width }
        height={ height }
        numberOfPieces={ 75 }
      /> }
      <Modal title={ '' }
             fillWindow={ !isTabletDevice }
             backButton={ {
               content: 'Go back to your trainings',
               onClick: onWorkoutFinishModalClickHandler
             } }>
        <CongratulationsMessage>
          { !isTabletDevice && <Confetti
            width={ width }
            height={ height }
            numberOfPieces={ 75 }
          /> }
          <H1> Gratulacje!</H1>
          <Paragraph> Świetnie Ci poszło! do zobaczenia na kolejnym treningu.</Paragraph>
          <CongratulationsImage/>
        </CongratulationsMessage>
      </Modal>
    </>
  }

  const workoutModeProps: IWorkoutModeNavigationProps = {
    isTimerActive: isTimerEnabled,
    enableTimer: () => enableTimer(),
    disableTimer: () => disableTimer(),
    breakTime: maxTimerValue
  }

  const renderMainTemplate = (children: JSX.Element): JSX.Element => {
    if (isTabletDevice) {
      return <MainTemplate navigation={ workoutNavigation }>
        { children }
      </MainTemplate>
    }

    return <MainTemplate navigation={ workoutNavigation } workoutMode={ workoutModeProps }>
      { children }
    </MainTemplate>
  }

  return renderMainTemplate(<>
    <WorkoutWrapper>
      <CarouselContainer>
        <CarouselWrapper>
          <Carousel showThumbs={ false } showStatus={ false } autoPlay infiniteLoop>
            { currentExercise.images.map((img, idx) => <img src={ img } alt={ currentExercise.name } key={ idx }/>) }
          </Carousel>
        </CarouselWrapper>
      </CarouselContainer>

      <div>
        <WorkoutHeader>
          <WorkoutHeaderTitle> { currentExercise.name } </WorkoutHeaderTitle>
          <WorkoutHeaderLine/>
        </WorkoutHeader>

        <WorkoutTable>
          <WorkoutTableHeader>
            <span>Seria</span>
            <span>Ciężar</span>
            <span>Powtórzenia</span>
          </WorkoutTableHeader>
          <WorkoutTableBody>
            { currentExercise.sets.map((set, idx) => <WorkoutTableRow set={ set } key={ set.id } number={ idx + 1 }/>) }
          </WorkoutTableBody>
        </WorkoutTable>
      </div>
    </WorkoutWrapper>
    <WorkoutFooterWrapper>
      <WorkoutFooter>
        <Button { ...getLeftNavigationButton() } type={ ButtonType.SECONDARY } reverse={ !isFirstExercise() }>
          { isFirstExercise() ? <MdClose size={ '2.5rem' }/> : <MdNavigateBefore size={ '2.5rem' }/> }
        </Button>
        <RoundButton radius={ '150px' } type={ ButtonType.RED } onClick={ () => setTimerModal(true) }>
          <MdTimer size={ 60 } color={ '#fff' }/>
        </RoundButton>
        <Button { ...getRightNavigationButton() } type={ isFinalExercise() ? ButtonType.QUATERNARY : ButtonType.PRIMARY }>
          { isFinalExercise() ? <MdCheck size={ '2.5rem' }/> : <MdNavigateNext size={ '2.5rem' }/> }
        </Button>
      </WorkoutFooter>
    </WorkoutFooterWrapper>
    { isTimerModalOpen && <TimerModal disableModal={ () => setTimerModal(false) } workoutMode={ workoutModeProps }/> }
  </>);
})