import { IExerciseSet } from '../../components/organisms/exercise-sets-modal/components/exercise-set';

export interface IExercise {
  id: string,
  name: string,
  description: string,
  images: string[];
  sets: IExerciseSet[]
}
