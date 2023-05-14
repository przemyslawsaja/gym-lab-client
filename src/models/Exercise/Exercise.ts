import { IExercise } from './__types__';
import { IExerciseSet } from '../../components/organisms/exercise-sets-modal/components/exercise-set';
import { makeAutoObservable, observable } from 'mobx';

export class Exercise {
  @observable
  public id: string = '';

  @observable
  public name: string = ''

  @observable
  public images: string[] = [];

  @observable
  public sets: IExerciseSet[] = [];

  private constructor(exercise:IExercise) {
    makeAutoObservable(this)
    this.id = exercise.id;
    this.name = exercise.name;
    this.sets = exercise.sets;
    this.images = exercise.images;
  }

  static createNewExercise(exercise?:IExercise) {
    if(exercise){
      return new Exercise(exercise)
    }
    return new Exercise({
      id: '',
      name: '',
      description: '',
      images: [],
      sets: [],
    })
  }

  public assignSetsToExercise = (sets: IExerciseSet[]) => {
    this.sets = sets;
  }

}
