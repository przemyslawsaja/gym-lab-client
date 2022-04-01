import { API } from '../../common/api/API';
import { UseCase } from '../../common/UseCase';
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

