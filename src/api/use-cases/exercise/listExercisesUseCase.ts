import { UseCase } from '../UseCase';
import { API } from '../../API';
import { IExercise } from '../../../models/Exercise/__types__';

export interface ListExercisesResult {
  exercises: IExercise[];
}

export class ListExercisesUseCase extends UseCase<void, ListExercisesResult> {
  protected async execute() {
    return API.HTTP.get<ListExercisesResult>('exercise' );
  }
}

