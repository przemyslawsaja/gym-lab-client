import { action, makeAutoObservable, observable } from 'mobx';
import { Exercise } from '../models/Exercise/Exercise';
import { listExercisesUseCase } from '../useCases';

export class ExerciseFinderStore {
  @observable
  exerciseSearch: string = '';

  @observable
  exercises: Exercise[] = [];

  @observable
  isLoading: boolean = true;

  constructor() {
    makeAutoObservable(this)
  }

  @action
  public fetchExercises = async (): Promise<void> => {
    this.isLoading = true;
    const data = await listExercisesUseCase.exec()
    this.exercises = data.exercises.map(exercise => {
      return Exercise.createNewExercise(exercise)
    })
    this.isLoading = false;
  }

  public get exerciseList() {
    return this.exercises.filter(exercise => {
      return exercise.name.toLowerCase().includes(this.exerciseSearch.toLowerCase())
    })
  }

  /**
   * Setters
   */

  @action
  public setExerciseSearch = (value: string): void => {
    this.exerciseSearch = value;
  }

}
