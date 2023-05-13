import { UseCase } from '../UseCase';
import { IExerciseSet } from '../../../components/organisms/ExerciseSetsModal/ExerciseSet';
import { API } from '../../API';

export interface ICreateUserTrainingsRequest {
  user: string;
  training: CreateTrainingPlanData;
}
export interface CreateTrainingPlanData {
  exercises: {
    id: string,
    sets: IExerciseSet[];
  }[];
  duration: number,
  break: number
  description: string,
  name: string,
}

export class CreateUserTrainingsUseCase extends UseCase<ICreateUserTrainingsRequest, void> {
  protected async execute({ user, training }: ICreateUserTrainingsRequest) {
    return API.HTTP.post<void>(`training/user/${ user }/create`, { ...training });
  }
}

