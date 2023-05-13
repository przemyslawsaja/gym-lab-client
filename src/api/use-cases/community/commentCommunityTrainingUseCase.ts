import { UseCase } from '../UseCase';
import { API } from '../../API';

export interface ICommentCommunityTrainingsRequest {
  training: string,
  user: string,
  content: string,
}


export class CommentCommunityTrainingsUseCase extends UseCase<ICommentCommunityTrainingsRequest, void> {
  protected async execute({ training, user, content }: ICommentCommunityTrainingsRequest) {
    return API.HTTP.put<void>(`community/${training}/user/${user}/comment`, {
      content
    });
  }
}
