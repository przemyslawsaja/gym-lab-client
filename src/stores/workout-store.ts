import { action, computed, makeAutoObservable, observable } from 'mobx';
import { Training } from '../models/Training/Training';
import { Exercise } from '../models/Exercise/Exercise';
import { DEFAULT_BRAKE_TIMER_VALUE } from '../constants';
import { IHistoryExercise } from '../api/use-cases/training/createHistoryTrainingUseCase';
import { createHistoryTrainingsUseCase } from '../api/use-cases';
import { userStore } from './index';

export class WorkoutStore {

  @observable
  public training: Training = Training.createNewTraining()

  @observable
  public currentExercise: Exercise = Exercise.createNewExercise()

  @observable
  public isLoading: boolean = true;

  @observable
  public currentExerciseNumber: number = 0;

  @observable
  public isWorkoutFinished: boolean = false;

  @observable
  public exerciseSetsMap: Map<number, { reps: number, weight: number}> = new Map();

  @observable
  public isTimerEnabled: boolean = false;

  @observable
  public timerValue: number = DEFAULT_BRAKE_TIMER_VALUE;

  @observable
  public maxTimerValue: number = DEFAULT_BRAKE_TIMER_VALUE;

  @observable
  public historyExercises: IHistoryExercise[] = []

  @observable
  public timerInterval: number = 0;

  constructor() {
    makeAutoObservable(this)
  }

  public isFinalExercise = (): boolean => {
    return this.incrementedExerciseNumber === this.training.exercises.length;
  }

  public isFirstExercise = (): boolean => {
    return this.currentExerciseNumber === 0
  }

  @action
  public setWorkoutTraining = (training: Training):void => {
    this.isLoading = true;
    this.training = training;
    this.currentExercise = training.exercises[0];
    this.isLoading = false;
  }

  @action
  public addExerciseToHistory = () => {
    this.historyExercises.push({
      label: this.currentExercise.name,
      sets: Array.from(this.exerciseSetsMap.values())
    })

    this.exerciseSetsMap.clear();
  }

  @action
  public addTrainingToHistory = async (): Promise<void> => {
    await createHistoryTrainingsUseCase.exec({
      user: userStore.id,
      exercises: this.historyExercises
    })

    this.historyExercises = [];
  }

  @action
  public nextExercise = ():void => {
    this.addExerciseToHistory();
    this.currentExercise = this.training.exercises[this.currentExerciseNumber + 1];
    this.currentExerciseNumber++;
  }

  @action
  public previousExercise = (): void => {
    this.currentExercise = this.training.exercises[this.currentExerciseNumber - 1];
    this.currentExerciseNumber--;
  }

  @computed
  public get incrementedExerciseNumber(): number {
    return this.currentExerciseNumber + 1;
  }

  @action
  public setWorkoutAsFinished = ():void => {
    this.isWorkoutFinished = true;
  }

  @action
  public enableTimer = ():void => {
    this.isTimerEnabled = true;
  }

  @action
  public disableTimer = ():void => {
    this.isTimerEnabled = false;
  }

  @action
  public setTimerInterval = ():void => {
    this.maxTimerValue = this.training.break
    this.setTimerValue();
    this.timerInterval = 0;
    // this.timerInterval  = setInterval(() => {
    //   this.timerValue--;
    //   if(this.timerValue <= 0 ) {
    //     this.timerValue = 0;
    //     this.clearTimerInterval();
    //   }
    // }, 1000);
  }

  @action
  public clearTimerInterval = ():void => {
    window.clearInterval(this.timerInterval)
  }

  @action
  public setTimerValue = ():void => {
    this.timerValue = this.training.break;
  }

  @action
  public addTime = (value: number):void => {
    if(this.timerValue + value > this.maxTimerValue){
      this.timerValue = this.maxTimerValue;
      return;
    }
    this.timerValue = this.timerValue + value;
  }

  @action
  public subtractTime = (value: number):void => {
    if(this.timerValue - value < 0) {
      this.timerValue = 0;
      return;
    }
    this.timerValue = this.timerValue - value;
  }

  @action
  public clearWorkout = ():void => {
    this.isWorkoutFinished = false;
    this.currentExerciseNumber = 0;
    this.training = Training.createNewTraining();
    this.currentExercise = Exercise.createNewExercise();
    this.isLoading = true;
  }
}
