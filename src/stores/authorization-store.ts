import { action, makeAutoObservable, observable } from 'mobx';
import { userStore } from './index';
import { loginUseCase, registerUseCase } from '../api/use-cases';

export class AuthorizationStore {
  @observable
  public username: string = '';

  @observable
  public password: string = '';

  @observable
  public repeatPassword: string = '';

  constructor() {
    makeAutoObservable(this)
  }

  public signIn = async (): Promise<void> => {
    await loginUseCase
      .exec({
        username: this.username,
        password: this.password
      })
      .then((res) => userStore.setAuthorizationResultValues(res))
      .then(() => userStore.setLocalStorage())
      .then(() => userStore.checkIsAuthorized())
  }

  @action
  public register = async (): Promise<void> => {
    await registerUseCase
      .exec({
        username: this.username,
        password: this.password,
        repeatPassword: this.repeatPassword,
      })
      .then((res) => userStore.setAuthorizationResultValues(res))
      .then(() => userStore.setLocalStorage())
      .then(() => userStore.checkIsAuthorized())
  }

  @action
  public clear = (): void => {
    this.username = '';
    this.password = '';
    this.repeatPassword = ''
  }

  /**
   * Setters
   */

  @action
  public setUsername = (value: string): void => {
    this.username = value;
  }

  @action
  public setPassword = (value: string): void => {
    this.password = value;
  }

  @action
  public setRepeatPassword = (value: string): void => {
    this.repeatPassword = value;
  }
}
