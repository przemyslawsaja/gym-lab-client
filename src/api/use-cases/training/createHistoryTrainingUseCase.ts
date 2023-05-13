import { UseCase } from '../UseCase';
import { API } from '../../API';

export interface IHistoryExercise {
  label: string,
  sets: {
    weight: number,
    reps: number
  }[]
}

export interface ICreateHistoryTrainingsRequest {
  user: string;
  exercises: IHistoryExercise[];
}


export class CreateHistoryTrainingsUseCase extends UseCase<ICreateHistoryTrainingsRequest, void> {
  protected async execute({ user, exercises }: ICreateHistoryTrainingsRequest) {
    return API.HTTP.post<void>(`history/user/${ user }/create`, {
      exercises
    });
  }
}

