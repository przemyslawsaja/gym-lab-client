import { UseCase } from '../UseCase';
import { API } from '../../API';
import { ITraining } from '../../../models/Training/__types__';

export interface TrainingPlanRequest {
  user: string;
}

export interface TrainingPlanResult {
  trainings: ITraining[];
}

export class ListUserTrainingsUseCase extends UseCase<TrainingPlanRequest, TrainingPlanResult> {
  protected async execute({user}: TrainingPlanRequest) {
    return API.HTTP.get<TrainingPlanResult>(`training/user/${user}`);
  }
}
export const listUserTrainingsUseCase = new ListUserTrainingsUseCase();
