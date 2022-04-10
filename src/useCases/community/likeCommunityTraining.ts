import { UseCase } from '../../common/UseCase';
import { API } from '../../common/api/API';

export interface ILikeCommunityTrainingsRequest {
  training: string,
  user: string,
}


export class LikeCommunityTrainingsUseCase extends UseCase<ILikeCommunityTrainingsRequest, void> {
  protected async execute({ training, user }: ILikeCommunityTrainingsRequest) {
    return API.HTTP.put<void>(`community/${training}/user/${user}/like`);
  }
}
