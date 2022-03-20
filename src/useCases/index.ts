import { RegisterUseCase } from './aai/registerUseCase';
import { ListUserTrainingsUseCase } from './training/listUserTrainingsUseCase';
import { CreateUserTrainingsUseCase } from './training/createUserTrainingUseCase';
import { LoginUseCase } from './aai/loginUseCase';
import { ListExercisesUseCase } from './exercise/listExercisesUseCase';
import { GetTrainingByIdUseCase } from './training/getTrainingByIdUseCase';

export const loginUseCase = new LoginUseCase();
export const registerUseCase = new RegisterUseCase();
export const listUserTrainingsUseCase = new ListUserTrainingsUseCase();
export const createUserTrainingUseCase = new CreateUserTrainingsUseCase();
export const listExercisesUseCase = new ListExercisesUseCase();
export const getTrainingByIdUseCase = new GetTrainingByIdUseCase();