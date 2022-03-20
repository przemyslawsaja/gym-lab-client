import { action, makeAutoObservable, observable } from 'mobx';
import { Exercise } from '../models/Exercise/Exercise';
import { Training } from '../models/Training/Training';
import { createUserTrainingUseCase, getTrainingByIdUseCase, listUserTrainingsUseCase } from '../useCases';
import { userStore } from './index';
import { updateTrainingsUseCase } from '../useCases/training/updateTrainingUseCase';

export class TrainingStore {
  @observable
  name: string = '';

  @observable
  description: string = '';

  @observable
  duration: number = 0;

  @observable
  brake: number = 0;

  @observable
  isCreatorModeEnabled: boolean = false;

  @observable
  isEditModeEnabled: boolean = false;

  @observable
  isTrainingEdited: boolean = false;

  @observable
  exercise: Exercise = Exercise.createNewExercise();

  @observable
  training: Training = Training.createNewTraining();

  @observable
  public trainings: Training[] = [];

  @observable
  public isTrainingListLoading: boolean = true;

  @observable
  public isTrainingLoading: boolean = true;

  constructor() {
    makeAutoObservable(this)
  }

  @action
  public fetchUserTrainings = async (): Promise<void> => {
    this.isTrainingListLoading = true;

    const data = await listUserTrainingsUseCase.exec({
      user: userStore.id
    })
    this.trainings = data.trainings.map(training => {
      return Training.createNewTraining(training)
    })
    this.isTrainingListLoading = false;
  }

  public getTrainingExercisesPayload = () => {
    return this.training.exercises.map(exercise => {
      return {
        id: exercise.id,
        sets: exercise.sets
      }
    })
  }

  public createTraining = async (): Promise<void> => {
    await createUserTrainingUseCase.exec(
      {
        user: userStore.id,
        training: {
          name: this.name,
          description: this.description,
          duration: this.duration,
          break: this.brake,
          exercises: this.training.exercises.map(exercise => {
            return {
              id: exercise.id,
              sets: exercise.sets
            }
          }),
        }
      }
    )
  }


  public updateUserTraining = async (): Promise<void> => {
    await updateTrainingsUseCase.exec({
      training: this.training
    })
    await this.getTrainingById(this.training.id)
    this.disableEditMode();
  };


  @action
  public getTrainingById = async (id: string): Promise<void> => {
    this.isTrainingLoading = true;

    const training = await getTrainingByIdUseCase.exec({
      training: id
    })

    this.training = Training.createNewTraining(training);

    this.isTrainingLoading = false;
  }

  @action
  public assignExerciseToTraining = () => {
    this.training.assignExerciseToTraining(this.exercise);
    this.isTrainingEdited = true;
  }

  @action
  public removeExerciseFromTraining = (exercise: Exercise) => {
    this.training.removeExercise(exercise)
  }

  /**
   * Modes
   */

  @action
  public enableCreatorMode = (): void => {
    this.isCreatorModeEnabled = true;
  }

  @action
  public disableCreatorMode = (): void => {
    this.isCreatorModeEnabled = false;
  }

  @action
  public enableEditMode = (): void => {
    this.isEditModeEnabled = true;
  }

  @action
  public disableEditMode = (): void => {
    this.isEditModeEnabled = false;
  }

  @action
  public clearTraining = ():void => {
    this.name = '';
    this.description = '';
    this.brake = 0;
    this.duration = 0;
    this.training = Training.createNewTraining();
  }

  /**
   * Setters
   */

  @action
  public setName = (value: string): void => {
    this.name = value;
  }

  @action
  public setDescription = (value: string): void => {
    this.description = value;
  }

  @action
  public setDuration = (value: number): void => {
    this.duration = value;
  }

  @action
  public setBrake = (value: number): void => {
    this.brake = value;
  }

  @action
  public setExercise = (exercise: Exercise): void => {
    this.exercise = exercise;
  }
}
