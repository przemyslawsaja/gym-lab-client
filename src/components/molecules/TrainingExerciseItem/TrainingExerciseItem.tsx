import React, { FC, useEffect, useState } from 'react'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import Link from '../../atoms/Link/Link'
import { theme } from '../../../theme/MainTheme';
import { ExerciseContainer, ExerciseDescription, ExercisesEditButtons, Separator } from './TrainingExerciseItemStyle'
import { RoundButton } from '../../atoms';
import { IoChevronForwardSharp } from 'react-icons/all';
import { Exercise } from '../../../models/Exercise/Exercise';
import { observer } from 'mobx-react';
import { ButtonType } from '../../atoms/Button/Button';
import { exerciseSetsStore, trainingStore } from '../../../stores';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { ExerciseSetsModal } from '../../organisms/ExerciseSetsModal/ExerciseSetsModal';
import { ConfirmModal } from '../../atoms/Modals/ConfirmModal/ConfirmModal';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { deviceValues } from '../../../devices/Breakpoints';

export interface ITrainingExerciseItemProps {
  exercise: Exercise
}

export const TrainingExerciseItem: FC<ITrainingExerciseItemProps> = observer(({ exercise }) => {
  const [isExerciseEditModalEnabled, setExerciseEditModal] = useState<boolean>(false);
  const [isExerciseDeleteConfirmModalEnabled, setExerciseDeleteModal] = useState<boolean>(false);
  const [ isTabletDevice, setTabletDevice ] = useState<boolean>(true);
  const { name, sets, id } = exercise;
  const { isEditModeEnabled } = trainingStore;
  const { exerciseSets, clearSets } = exerciseSetsStore;
  const lastSet = sets[sets.length - 1]
  const { width } = useWindowSize();

  useEffect(() => {
    width >= deviceValues.tabletL
      ? setTabletDevice(true)
      : setTabletDevice(false)
  }, [width])

  const onExerciseEditHandler = ():void => {
    setExerciseEditModal(true)
  }

  const onExerciseUpdateHandler = ():void => {
    exercise.assignSetsToExercise(exerciseSets)
    setExerciseEditModal(false);
    clearSets();
  }

  const renderExerciseButtons = (): JSX.Element => {
    if (isEditModeEnabled) {
      return <>
        <ExercisesEditButtons>
          <RoundButton radius='40px' type={ ButtonType.WHITE } borderRadius={ '10px' } onClick={ onExerciseEditHandler }>
            <AiFillEdit size={ '2rem' } color={ theme.colors.brand.background100 }/>
          </RoundButton>

          <RoundButton radius='40px' type={ ButtonType.RED } borderRadius={ '10px' } onClick={ () => setExerciseDeleteModal(true) }>
            <BsFillTrashFill size={ '2rem' } color={ '#fff' }/>
          </RoundButton>
        </ExercisesEditButtons>
      </>
    }

    return <Link to={ `/${ id }/exercise-details` }>
      {/*<RoundButton radius='40px' type={ ButtonType.QUATERNARY }>*/}
      {/*  <IoChevronForwardSharp size={ '2.5rem' } color={ theme.colors.brand.background300 }/>*/}
      {/*</RoundButton>*/}
    </Link>
  }

  return <>
    <ExerciseContainer>
      <ExerciseDescription>
        <Paragraph fontSize={ '1.8rem' } color={ theme.colors.brand.text100 }>{ name }</Paragraph>
        <Paragraph fontSize={ '1.3rem' }>
          { sets.map(set => {
            return `${ set.weight }kg x ${ set.reps } ${ set.id === lastSet.id ? '' : ', ' }`
          }) }
        </Paragraph>
      </ExerciseDescription>
      { renderExerciseButtons() }
      { isExerciseEditModalEnabled && <ExerciseSetsModal onClose={ () => setExerciseEditModal(false) } onConfirm={ onExerciseUpdateHandler } sets={sets} fillWindow={!isTabletDevice}/> }
      { isExerciseDeleteConfirmModalEnabled &&
      <ConfirmModal backButton={{content: 'Anuluj', onClick() { setExerciseDeleteModal(false)} }}
                    confirmButton={{content: 'Usuń ćwiczenie', onClick() { trainingStore.removeExerciseFromTraining(exercise)}}}
                    confirmMessage={'Czy na pewno chcesz usunąć to ćwiczenie ?'}
                    confirmDelete

      /> }
    </ExerciseContainer>
    <Separator/>
  </>

})

