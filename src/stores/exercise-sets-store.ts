import { action, makeAutoObservable, observable } from 'mobx';
import { IExerciseSet } from '../components/organisms/exercise-sets-modal/components/exercise-set';
import { uuid } from 'uuidv4';

export class ExerciseSetsStore {
  @observable
  public exerciseSets:IExerciseSet[] = [];

  @observable
  public weight:number = 0;

  @observable
  public reps:number = 0;

  @observable
  public isExerciseSetsModalOpen: boolean = false;

  constructor() {
    makeAutoObservable(this)
  }

  @action
  public addSet = (): void => {
    this.exerciseSets.push({
      weight: this.weight,
      reps: this.reps,
      id: uuid()
    })
  }

  @action
  public setExerciseSets = (sets: IExerciseSet[]): void => {
    this.exerciseSets = sets;
  }

  @action
  public removeSet = (setToRemove: IExerciseSet): void => {
    this.exerciseSets = this.exerciseSets.filter(set => {
      return set.id !== setToRemove.id;
    })
  }

  @action
  public clearSets = (): void => {
    this.exerciseSets = []
    this.reps = 0;
    this.weight = 0;
  }

  @action
  public enableExerciseSetsModal = ():void => {
    this.isExerciseSetsModalOpen = true;
  }

  @action
  public disableExerciseSetsModal = ():void => {
    this.isExerciseSetsModalOpen = false;
  }

  /**
   * Setters
   */

  @action
  public setWeight = (value: number): void => {
    this.weight = value;
  }

  @action
  public setReps = (value: number): void => {
    this.reps = value;
  }

}
