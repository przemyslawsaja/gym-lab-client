import { UseCase } from '../UseCase';
import { API } from '../../API';
import { ITraining } from '../../../models/Training/__types__';

export interface GetTrainingByIdRequest {
  training: string;
}

export class GetTrainingByIdUseCase extends UseCase<GetTrainingByIdRequest, ITraining> {
  protected async execute({ training }:GetTrainingByIdRequest) {
    return API.HTTP.get<ITraining>(`training/${training}`);
  }
}
