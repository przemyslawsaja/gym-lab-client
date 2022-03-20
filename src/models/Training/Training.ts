import { ITraining } from './__types__';
import { Exercise } from '../Exercise/Exercise';
import { makeAutoObservable, observable } from 'mobx';


export class Training {

  @observable
  public id: string = ''

  @observable
  public name: string = '';

  @observable
  public description: string = '';

  @observable
  public duration: number = 0;

  @observable
  public break: number = 0;

  @observable
  public exercises: Exercise[] = [];

  private constructor(training: ITraining) {
    makeAutoObservable(this)
    this.id = training.id;
    this.name = training.name;
    this.description = training.description;
    this.duration = training.duration;
    this.break = training.break;
    this.exercises = training.exercises.map(exercise => Exercise.createNewExercise(exercise));
  }

  static createNewTraining(training?: ITraining) {
    if (training) {
      return new Training(training)
    }
    return new Training({
      id: '',
      name: '',
      description: '',
      duration: 0,
      break: 0,
      exercises: []
    })
  }

  public assignExerciseToTraining = (exercise: Exercise) => {
    this.exercises.push(exercise);
  }

  public get hasExercises(): boolean {
    return this.exercises.length > 0;
  }

  public get exercisesCount():number {
    return this.exercises.length
  }

  public removeExercise = (exerciseToRemove: Exercise) => {
    this.exercises = this.exercises.filter(exercise => {
      return exercise.id !== exerciseToRemove.id
    })
  }

}