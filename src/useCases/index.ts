import { RegisterUseCase } from './auth/registerUseCase';
import { ListUserTrainingsUseCase } from './training/listUserTrainingsUseCase';
import { CreateUserTrainingsUseCase } from './training/createUserTrainingUseCase';
import { LoginUseCase } from './auth/loginUseCase';
import { ListExercisesUseCase } from './exercise/listExercisesUseCase';
import { GetTrainingByIdUseCase } from './training/getTrainingByIdUseCase';
import { ListCommunityTrainingsUseCase } from './community/listCommunityTrainingsUseCase';
import { LikeCommunityTrainingsUseCase } from './community/likeCommunityTrainingUseCase';
import { DislikeCommunityTrainingsUseCase } from './community/unlikeCommunityTrainingUseCase';
import { CommentCommunityTrainingsUseCase } from './community/commentCommunityTrainingUseCase';
import { AssignSharedTrainingToUserUseCase } from './community/assignSharedTrainingToUserUseCase';
import { ShareTrainingUseCase } from './community/shareTrainingUseCase';
import { CreateHistoryTrainingsUseCase } from './training/createHistoryTrainingUseCase';
import { ListUserHistoryTrainingsUseCase } from './training/listHistoryTrainingsUseCase';

export const loginUseCase = new LoginUseCase();
export const registerUseCase = new RegisterUseCase();
export const listUserTrainingsUseCase = new ListUserTrainingsUseCase();
export const createUserTrainingUseCase = new CreateUserTrainingsUseCase();
export const listExercisesUseCase = new ListExercisesUseCase();
export const getTrainingByIdUseCase = new GetTrainingByIdUseCase();
export const listCommunityTrainingsUseCase = new ListCommunityTrainingsUseCase();
export const likeCommunityTrainingsUseCase = new LikeCommunityTrainingsUseCase();
export const dislikeCommunityTrainingsUseCase = new DislikeCommunityTrainingsUseCase();
export const commentCommunityTrainingsUseCase = new CommentCommunityTrainingsUseCase();
export const assignSharedTrainingToUserUseCase = new AssignSharedTrainingToUserUseCase();
export const shareTrainingUseCase = new ShareTrainingUseCase();
export const listUserHistoryTrainingsUseCase = new ListUserHistoryTrainingsUseCase();
export const createHistoryTrainingsUseCase = new CreateHistoryTrainingsUseCase();