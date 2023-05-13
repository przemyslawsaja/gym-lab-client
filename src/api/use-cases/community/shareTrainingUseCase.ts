import { UseCase } from '../UseCase';
import { API } from '../../API';

export interface IShareTrainingUseCase {
  training: string,
  description: string,
}

export class ShareTrainingUseCase extends UseCase<IShareTrainingUseCase, void> {
  protected async execute({ training, description }: IShareTrainingUseCase) {
    return API.HTTP.post<void>(`community/${training}/share`, {
      description
    });
  }
}
