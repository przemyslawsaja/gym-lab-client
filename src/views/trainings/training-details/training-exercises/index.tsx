import React, { useState } from 'react'
import Paragraph from '../../../../components/atoms/paragraph'
import H1 from '../../../../components/atoms/h1'
import { ExercisesContainer, ExercisesHeader } from './styles';
import { trainingStore } from '../../../../stores';
import { observer } from 'mobx-react';
import { TrainingExerciseItem } from '../../../../components/molecules/training-exercise-item';
import { TrainingDetailsLayout } from '../training-details-layout';
import { theme } from '../../../../theme/main-theme';
import { FloatingAddExerciseButton } from '../../../../components/molecules/training-exercise-item/styles';
import { Button } from '../../../../components/atoms';
import { IoIosAddCircleOutline } from 'react-icons/all';
import { Modal } from '../../../../components/atoms/modals/modal';
import { ExerciseFinder, ExerciseFinderType } from '../../../../modules/exercise-finder';


export const TrainingExercises = observer(() => {
  const { training, isEditModeEnabled } = trainingStore;
  const [isExerciseFinderModalEnabled, setExerciseFinderModal] = useState<boolean>(false);

  const renderNameVariation = () => {
    if (training.exercisesCount === 1) return 'ćwiczenie';
    if (training.exercisesCount > 1 && training.exercisesCount < 5) return 'ćwiczenia';
    return 'ćwiczeń'
  }

  return <TrainingDetailsLayout>
    <ExercisesHeader>
      <H1 color={ theme.colors.brand.quaternary300 }>Twoje ćwiczenia</H1>
      <Paragraph>Posiadasz { training.exercisesCount } { renderNameVariation() } w tym treningu</Paragraph>
    </ExercisesHeader>
    <ExercisesContainer>
      { training.exercises.map(exercise => {
        return <TrainingExerciseItem exercise={ exercise }/>
      }) }

      { isEditModeEnabled && <FloatingAddExerciseButton>
        <Button content={ "Dodaj ćwiczenie" } size={ 'large' } onClick={ () => setExerciseFinderModal(true) }>
          <IoIosAddCircleOutline size={ '2.5rem' }/>
        </Button>
      </FloatingAddExerciseButton> }

      { isExerciseFinderModalEnabled && <Modal fillWindow title={ 'Wyszukaj ćwiczenie' } backButton={ {
        content: 'Anuluj',
        onClick: () => setExerciseFinderModal(false)
      } }>
        <ExerciseFinder type={ ExerciseFinderType.MODAL } onExerciseSetsModalClose={ () => setExerciseFinderModal(false) }/>
      </Modal> }

    </ExercisesContainer>
  </TrainingDetailsLayout>
})
