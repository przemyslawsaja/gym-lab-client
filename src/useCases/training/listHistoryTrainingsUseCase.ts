import { UseCase } from '../../common/UseCase';
import { API } from '../../common/api/API';

export interface ListUserHistoryTrainingsRequest {
  user: string;
}

export interface IHistoryTraining {
  createdAt: string,
  exercises: {
    label: string,
    sets: {
      weight: number,
      reps: number,
    }[]
  }[]
}

export interface ListUserHistoryTrainingsResult {
  trainings: IHistoryTraining[];
}

export class ListUserHistoryTrainingsUseCase extends UseCase<ListUserHistoryTrainingsRequest, ListUserHistoryTrainingsResult> {
  protected async execute({user}: ListUserHistoryTrainingsRequest) {
    return API.HTTP.get<ListUserHistoryTrainingsResult>(`history/user/${user}`);
  }
}
