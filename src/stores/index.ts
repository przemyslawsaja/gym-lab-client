import { UserStore } from './user-store';
import { AuthorizationStore } from './authorization-store';
import { TrainingStore } from './training-store'
import { ExerciseFinderStore } from './exercise-finder-store';
import { ExerciseSetsStore } from './exercise-sets-store';
import { WorkoutStore } from './workout-store';
import { CommunityStore } from './community-store';

export const userStore = new UserStore();
export const authorizationStore = new AuthorizationStore();
export const trainingStore = new TrainingStore();
export const exerciseFinderStore = new ExerciseFinderStore();
export const exerciseSetsStore = new ExerciseSetsStore();
export const workoutStore = new WorkoutStore();
export const communityStore = new CommunityStore();
