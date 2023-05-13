import { UseCase } from '../UseCase';
import { API } from '../../API';

export interface ILikeCommunityTrainingsRequest {
  training: string,
  user: string,
}


export class LikeCommunityTrainingsUseCase extends UseCase<ILikeCommunityTrainingsRequest, void> {
  protected async execute({ training, user }: ILikeCommunityTrainingsRequest) {
    return API.HTTP.put<void>(`community/${training}/user/${user}/like`);
  }
}
