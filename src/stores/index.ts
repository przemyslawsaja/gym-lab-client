import { UserStore } from './UserStore';
import { AuthorizationStore } from './AuthorizationStore';
import { TrainingStore } from './TrainingStore'
import { ExerciseFinderStore } from './ExerciseFinderStore';
import { ExerciseSetsStore } from './ExerciseSetsStore';
import { WorkoutStore } from './WorkoutStore';
import { CommunityStore } from './CommunityStore';

export const userStore = new UserStore();
export const authorizationStore = new AuthorizationStore();
export const trainingStore = new TrainingStore();
export const exerciseFinderStore = new ExerciseFinderStore();
export const exerciseSetsStore = new ExerciseSetsStore();
export const workoutStore = new WorkoutStore();
export const communityStore = new CommunityStore();