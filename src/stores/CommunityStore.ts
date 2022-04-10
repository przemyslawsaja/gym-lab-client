import { action, computed, makeAutoObservable, observable } from 'mobx';
import { Training } from '../models/Training/Training';
import { likeCommunityTrainingsUseCase, listCommunityTrainingsUseCase, dislikeCommunityTrainingsUseCase } from '../useCases';
import { ISharedTraining } from '../useCases/community/listCommunityTrainingsUseCase';
import { userStore } from './index';

export class CommunityStore {
  @observable
  public sharedTrainings: ISharedTraining[] = [];

  @observable
  public isCommunityLoading: boolean = true;

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

  public isLikedByUser = (likes: string[]):boolean => {
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
}
