import { observer } from 'mobx-react';
import * as React from 'react';
import { FC, useEffect } from 'react';
import { IModalButton, Modal } from '../../atoms/Modals/Modal/Modal';
import { exerciseSetsStore, trainingStore } from '../../../stores';
import { ExerciseDetailsName, ExerciseDetailsTable, ExerciseDetailsTableHeader } from './ExerciseSetsStyle'
import { ExerciseSet, IExerciseSet } from './ExerciseSet';
import { uuid } from 'uuidv4';

export interface IExerciseSetsModalProps {
  onClose(): void;

  sets?: IExerciseSet[]
  fillWindow?: boolean
  onConfirm(): void,
  nested?: boolean

}

export const ExerciseSetsModal: FC<IExerciseSetsModalProps> = observer(({ onClose, onConfirm, sets, fillWindow, nested}) => {

  const { exerciseSets, setExerciseSets } = exerciseSetsStore;

  useEffect(() => {
    sets && setExerciseSets(sets);
  }, [])

  const modalBackButton: IModalButton = {
    content: 'Anuluj',
    onClick: onClose
  }

  const modalConfirmButton: IModalButton = {
    content: 'Zatwierdz',
    onClick: onConfirm,
  }


  return <Modal title={ 'Dodaj serie i powtórzenia' } backButton={ modalBackButton } confirmButton={ modalConfirmButton } fillWindow={fillWindow} nested={nested}>
    <>
      <ExerciseDetailsName> { trainingStore.exercise.name }</ExerciseDetailsName>
      <ExerciseDetailsTable>
        <ExerciseDetailsTableHeader>
          <span>SERIA</span>
          <span>CIEŻAR</span>
          <span>POWTÓRZENIA</span>
        </ExerciseDetailsTableHeader>

        { exerciseSets.map((set, idx) => {
          return <ExerciseSet item={ set } setNumber={ idx + 1 } key={ uuid() }/>
        }) }

        <ExerciseSet creator setNumber={ exerciseSets.length + 1 }/>

      </ExerciseDetailsTable>
    </>
  </Modal>
})
