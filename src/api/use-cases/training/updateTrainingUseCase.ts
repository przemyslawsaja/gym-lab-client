import { UseCase } from '../UseCase';
import { API } from '../../API';
import { ITraining } from '../../../models/Training/__types__';
import { Training } from '../../../models/Training/Training';

export interface UpdateTrainingsRequest {
  training: Training;
}

export interface UpdateTrainingsResult {
  trainings: ITraining[];
}

export class UpdateTrainingsUseCase extends UseCase<UpdateTrainingsRequest, UpdateTrainingsResult> {
  protected async execute({training}: UpdateTrainingsRequest) {
    return API.HTTP.put<UpdateTrainingsResult>(`training/${training.id}`, {
      name: training.name,
      duration: training.duration,
      break: training.break,
      exercises: training.exercises,
    });
  }
}
export const updateTrainingsUseCase = new UpdateTrainingsUseCase();
