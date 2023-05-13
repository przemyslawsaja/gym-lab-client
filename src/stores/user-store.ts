
import { action, makeAutoObservable, observable } from 'mobx';
import { RegisterData } from '../api/use-cases/auth/registerUseCase';
import { AuthorizationResult } from '../api/use-cases/auth/loginUseCase';
import { localSettings } from '../utils/LocalSettings';

export class UserStore {
  @observable public username: string = '';
  @observable public password: string = '';
  @observable public token: string = ''
  @observable public id: string = '';
  @observable public isAuthorized: boolean = true;
  @observable public isPasswordExpired: boolean = false;

  constructor() {
    makeAutoObservable(this)
  }

  @action
  public setUser = (data: RegisterData):void => {
    const { username, password } = data;
    this.username = username;
    this.password = password;
  }

  @action
  public logoutCleanData():void {
    this.token = '';
    this.username = '';
    this.password = '';
    this.isAuthorized = false;
    this.clearLocalStorage();
  }

  @action
  public setAuthorizationResultValues = (res: AuthorizationResult):void => {
    this.token = res.token.value;
    this.id = res.user.value;
    this.username = res.username.value;
    this.isAuthorized = true;
  }

  @action
  public checkIsAuthorized = async ():Promise<void> => {
    this.getLocalStorage();
    if (!this.token) {
      this.logoutCleanData();
      this.isAuthorized = false;
    } else {
      this.isAuthorized = true
    }
  }

  @action
  public getLocalStorage = (): void => {
    this.token = localSettings.getValue('token')
    this.id = localSettings.getValue('user')
    this.username = localSettings.getValue('username')
  }

  public clearLocalStorage = ():void => {
    localSettings.setValue('token', '')
    localSettings.setValue('user', '')
    localSettings.setValue('username', '')
  }

  public setLocalStorage = ():void => {
    localSettings.setValue('token', this.token)
    localSettings.setValue('user', this.id)
    localSettings.setValue('username', this.username)
  }
}
