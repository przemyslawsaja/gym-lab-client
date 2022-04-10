import { UseCase } from '../../common/UseCase';
import { API } from '../../common/api/API';

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
