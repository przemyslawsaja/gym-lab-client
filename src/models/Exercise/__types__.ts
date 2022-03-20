import { IExerciseSet } from '../../components/organisms/ExerciseSetsModal/ExerciseSet';

export interface IExercise {
  id: string,
  name: string,
  description: string,
  images: string[];
  sets: IExerciseSet[]
}
