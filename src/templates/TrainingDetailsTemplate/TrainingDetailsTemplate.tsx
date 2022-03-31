import React, { FC } from 'react'
import { TailsWrapper } from './TrainingDetailsTemplateStyle'
import { TrainingDetailsTile } from '../../components/molecules/TrainingDetailsTile/TrainingDetailsTile';
import { BiDumbbell } from 'react-icons/bi';
import { AiOutlineClockCircle, GiNightSleep } from 'react-icons/all';

interface ITrainingDetailsTemplate {
  children: React.ReactNode;
  trainingId: string;
}

export const TrainingDetailsTemplate: FC<ITrainingDetailsTemplate> = ({ children, trainingId }) => {
  return (
    <>
      <TailsWrapper>
        <TrainingDetailsTile path={ `/trainings/${ trainingId }/exercises` } tileIcon={ { icon: BiDumbbell } } label={ "Ćwiczenia" }/>
        <TrainingDetailsTile path={ `/trainings/${ trainingId }/brakes` } tileIcon={ { icon: AiOutlineClockCircle } } label={ "Przerwy" }/>
        <TrainingDetailsTile path={ `/trainings/${ trainingId }/recovery` } tileIcon={ { icon: GiNightSleep } } label={ "Regeneracja" }/>
      </TailsWrapper>
      { children }
    </>
  )
}
