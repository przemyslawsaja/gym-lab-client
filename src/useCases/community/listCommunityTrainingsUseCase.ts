import { UseCase } from '../../common/UseCase';
import { API } from '../../common/api/API';
import { ITraining } from '../../models/Training/__types__';

export interface IComment {
  user: string,
  content: string
}

export interface ISharedTraining {
  training: ITraining
  likes: string[];
  author: string,
  comments: IComment[];
  description: string,
  createdAt: string,
}

export class ListCommunityTrainingsUseCase extends UseCase<void, ISharedTraining[]> {
  protected async execute() {
    return API.HTTP.get<ISharedTraining[]>(`community/trainings`);
  }
}
