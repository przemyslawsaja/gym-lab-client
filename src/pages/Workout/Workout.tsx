import React, { useEffect } from 'react';
import { CongratulationsImage, CongratulationsMessage, WorkoutHeader, WorkoutHeaderLine, WorkoutTable, WorkoutTableBody, WorkoutTableHeader, WorkoutWrapper } from './WorkoutStyle'
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

export const Workout = observer(() => {
  const { trainingId } = useParams<{ trainingId: string, exerciseId: string }>();
  const { width, height } = useWindowSize();
  const history = useHistory()
  const {
    setWorkoutTraining,
    currentExercise,
    isLoading,
    currentExerciseNumber,
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
    maxTimerValue
  } = workoutStore;

  useEffect(() => {
    trainingStore.getTrainingById(trainingId).then(() => setWorkoutTraining(trainingStore.training))
  }, [])

  const getLeftNavigationButton = () => {
    return currentExerciseNumber === 0
      ? {
        icon: MdClose, onClick() {
          history.push(ApplicationRoutePaths.TRAININGS)
        }
      }
      : {
        icon: MdNavigateBefore, onClick() {
          previousExercise()
        }
      }
  }

  const getRightNavigationButton = () => {
    return incrementedExerciseNumber === training.exercises.length
      ? {
        icon: MdCheck, onClick() {
          setWorkoutAsFinished();
        }
      }
      : {
        icon: MdNavigateNext, onClick() {
          nextExercise();
        }
      }
  }

  const workoutNavigation: IHeaderNavigationProps = {
    title: "Tryb treningowy",
    subtitle: `${ incrementedExerciseNumber } z ${ training.exercises.length }`,
    buttons: {
      left: getLeftNavigationButton(),
      right: getRightNavigationButton()
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
    return <Modal title={ '' }
                  fillWindow
                  backButton={ {
                    content: 'Go back to your trainings',
                    onClick: onWorkoutFinishModalClickHandler
                  } }>
      <CongratulationsMessage>
        <Confetti
          width={ width }
          height={ height }
          numberOfPieces={ 75 }
        />
        <H1> Gratulacje!</H1>
        <Paragraph> Świetnie Ci poszło! do zobaczenia na kolejnym treningu.</Paragraph>
        <CongratulationsImage/>
      </CongratulationsMessage>
    </Modal>
  }

  const workoutModeProps: IWorkoutModeNavigationProps = {
    isTimerActive: isTimerEnabled,
    enableTimer: () => enableTimer(),
    disableTimer: () => disableTimer(),
    breakTime: maxTimerValue
  }

  return (
    <MainTemplate navigation={ workoutNavigation } workoutMode={ workoutModeProps }>
      <WorkoutWrapper>
        <Carousel showThumbs={ false } showStatus={ false }>
          { currentExercise.images.map((img, idx) => <img src={ img } alt={ currentExercise.name } key={ idx }/>) }
        </Carousel>

        <WorkoutHeader>
          <H1> { currentExercise.name } </H1>
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

      </WorkoutWrapper>
    </MainTemplate>
  )
})