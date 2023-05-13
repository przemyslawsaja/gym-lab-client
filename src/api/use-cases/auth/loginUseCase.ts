import { UseCase } from '../UseCase';
import { API } from '../../API';

export interface LoginData {
  username: string;
  password: string;
}

export interface AuthorizationResult {
  token: { value: string }
  user: { value: string }
  username: { value: string }
}

export class LoginUseCase extends UseCase<LoginData, AuthorizationResult> {
  protected async execute({ ...body }: LoginData) {
    return API.HTTP.post<AuthorizationResult>('auth/login', { ...body });
  }
}

