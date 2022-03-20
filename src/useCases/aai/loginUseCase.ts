import { UseCase } from '../../common/UseCase';
import { API } from '../../common/api/API';

export interface LoginData {
  username: string;
  password: string;
}

export interface AuthorizationResult {
  token: { value: string }
  user: { value: string }
}
export class LoginUseCase extends UseCase<LoginData, AuthorizationResult> {
  protected async execute({ ...body }: LoginData) {
    return API.HTTP.post<AuthorizationResult>('auth/login', { ...body });
  }
}

