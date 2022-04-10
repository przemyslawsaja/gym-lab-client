import { IExercise } from '../Exercise/__types__';

export interface ITraining {
  id: string,
  parent: string,
  name: string,
  description: string,
  duration: number,
  break: number,
  exercises: IExercise[]
}