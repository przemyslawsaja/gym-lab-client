import { API } from '../../API';
import { UseCase } from '../UseCase';
import { AuthorizationResult } from './loginUseCase';

export interface RegisterData {
  username: string;
  password: string
  repeatPassword: string;
}

export class RegisterUseCase extends UseCase<RegisterData, AuthorizationResult> {
  protected async execute({ ...body }: RegisterData) {
    return API.HTTP.post<AuthorizationResult>('auth/register', { ...body });
  }
}

