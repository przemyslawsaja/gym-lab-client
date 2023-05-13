import { UseCase } from '../UseCase';
import { API } from '../../API';

export interface IAssignSharedTrainingToUserRequest {
  training: string,
  user: string,
}

export class AssignSharedTrainingToUserUseCase extends UseCase<IAssignSharedTrainingToUserRequest, void> {
  protected async execute({ training, user }: IAssignSharedTrainingToUserRequest) {
    return API.HTTP.post<void>(`community/${training}/user/${user}/assign`);
  }
}
