import { UseCase } from '../../common/UseCase';
import { API } from '../../common/api/API';

export interface IDislikeCommunityTrainingsUseCase {
  training: string,
  user: string,
}

export class DislikeCommunityTrainingsUseCase extends UseCase<IDislikeCommunityTrainingsUseCase, void> {
  protected async execute({ training, user }: IDislikeCommunityTrainingsUseCase) {
    return API.HTTP.put<void>(`community/${training}/user/${user}/dislike`);
  }
}
