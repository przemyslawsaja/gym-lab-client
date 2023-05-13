import { action, makeAutoObservable, observable } from 'mobx';
import { Training } from '../models/Training/Training';
import {
  assignSharedTrainingToUserUseCase,
  commentCommunityTrainingsUseCase,
  dislikeCommunityTrainingsUseCase,
  likeCommunityTrainingsUseCase,
  listCommunityTrainingsUseCase,
  shareTrainingUseCase
} from '../api/use-cases';
import { ISharedTraining } from '../api/use-cases/community/listCommunityTrainingsUseCase';
import { userStore } from './index';

export class CommunityStore {
  @observable
  public description: string = '';

  @observable
  public sharedTrainings: ISharedTraining[] = [];

  @observable
  public isCommunityLoading: boolean = true;

  @observable
  public comment: string = '';

  constructor() {
    makeAutoObservable(this)
  }

  @action
  public fetchCommunityTrainings = async (): Promise<void> => {
    this.isCommunityLoading = true;

    const communityTrainings = await listCommunityTrainingsUseCase.exec()
    this.sharedTrainings = communityTrainings.map(sharedTraining => {
      return {
        training: Training.createNewTraining(sharedTraining.training),
        ...sharedTraining,
      }
    })

    this.isCommunityLoading = false;
  }

  public isLikedByUser = (likes: string[]): boolean => {
    return likes.some(userId => userId === userStore.id)
  }

  @action
  public likeCommunityTraining = async (training: string): Promise<void> => {
    await likeCommunityTrainingsUseCase.exec({
      training,
      user: userStore.id,
    })
  }

  @action
  public dislikeCommunityTraining = async (training: string): Promise<void> => {
    await dislikeCommunityTrainingsUseCase.exec({
      training,
      user: userStore.id,
    })

  }

  @action
  public commentCommunityTraining = async (training: string): Promise<void> => {
    await commentCommunityTrainingsUseCase.exec({
      training,
      user: userStore.id,
      content: this.comment,
    })
  }

  @action
  public assignSharedTrainingToUser = async (training: string):Promise<void> => {
    await assignSharedTrainingToUserUseCase.exec({
      training,
      user: userStore.id
    })
  }

  @action
  public shareTraining = async (training: string):Promise<void> => {
    await shareTrainingUseCase.exec({
      training,
      description: this.description
    })
  }

  @action
  public clearTrainingComment = ():void => {
    this.comment = ''
  }

  /*
   * Setters
   */

  @action
  public setTrainingComment = (value: string): void => {
    this.comment = value;
  }

  @action
  public setDescriptionComment = (value: string): void => {
    this.description = value;
  }
}
