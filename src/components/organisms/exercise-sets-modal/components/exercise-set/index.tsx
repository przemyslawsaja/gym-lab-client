import { observer } from 'mobx-react';
import * as React from 'react';
import { FC } from 'react';
import { ExerciseSeriesNumber, ExerciseSetInputWrapper, ExerciseSetItem } from '../../styles'
import { FaTrashAlt, IoAddSharp } from 'react-icons/all';
import { exerciseSetsStore } from '../../../../../stores';
import { RoundButton } from '../../../../atoms';
import { ButtonType } from '../../../../atoms/button';
import { Input } from '../../../../atoms/inputs/input';
import { toast } from 'react-toastify';

export interface IExerciseSet {
  weight: number,
  reps: number,
  id: string
}

interface IExerciseSetProps {
  item?: IExerciseSet;
  setNumber?: number;
  creator?: boolean;
};

export const ExerciseSet: FC<IExerciseSetProps> = observer(({ item, setNumber, creator }) => {
  const { reps, setReps, weight, setWeight, addSet, removeSet } = exerciseSetsStore;

  const onAddSetHandler = () => {
    if(reps === 0){
      toast.error('Na pewno dasz radę zrobić chociaż 1 powtórzenie !')
      return;
    }

    addSet()
  }

  return <ExerciseSetItem>
    <ExerciseSeriesNumber>{ setNumber }</ExerciseSeriesNumber>
    { item && <>
      <span>{ item.weight } kg</span>
      <span>{ item.reps }</span>
    </> }
    { creator && <>
      <ExerciseSetInputWrapper><Input onChange={ e => setWeight(parseInt(e.target.value)) } value={ weight } type='number' prefix={ 'kg' }/></ExerciseSetInputWrapper>
      <ExerciseSetInputWrapper><Input onChange={ e => setReps(parseInt(e.target.value)) } value={ reps } type='number'/></ExerciseSetInputWrapper>
    </> }
    <span>
          { creator ? <>
            <RoundButton radius='4rem' onClick={ onAddSetHandler } type={ ButtonType.PRIMARY }>
              <IoAddSharp color={ 'fff' } size={ '2rem' }/>
            </RoundButton>
          </> : <>
            { item && <FaTrashAlt size={ '2rem' } onClick={ () => removeSet(item) }/> }
          </>
          }
        </span>
  </ExerciseSetItem>
})

