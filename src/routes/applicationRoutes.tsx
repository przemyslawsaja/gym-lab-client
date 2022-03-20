import { Account } from '../pages/Account/Account';
import { EditAccount } from '../pages/EditAccount/EditAccount';
import { Profile } from '../pages/Profile/Profile';
import { Achievements } from '../pages/Achivments/Achievements';
import { Settings } from '../pages/Settings/Settings';
import { Statistics } from '../pages/Statistics/Statistics';
import { TrainingsList } from '../pages/Trainings/TrainingsList/TrainingsList';
import { TrainingExercises } from '../pages/Trainings/TrainingDetails/TrainingExercises/TrainingExercises'
import { TrainingBrakes } from '../pages/Trainings/TrainingDetails/TrainingBrakes/TrainingBrakes';
import { TrainingNotes } from '../pages/Trainings/TrainingDetails/TrainingNotes/TrainingNotes'
import { TrainingHistory } from '../pages/Trainings/TrainingHistory/TrainingHistory';
import { Workout } from '../pages/Workout/Workout';
import { RenderRoutes } from './RenderRoutes';
import { TrainingCreator } from '../pages/Trainings/TrainingCreator/TrainingCreator';
import { Redirect, RouteProps } from 'react-router-dom';
import { TrainingRecover } from '../pages/Trainings/TrainingDetails/TrainingRecovery/TrainingRecovery';
import { ExerciseFinderPage } from '../pages/ExerciseFinder/ExerciseFinderPage';
import React from 'react';
import { observer } from 'mobx-react';
import { userStore } from '../stores';

export enum ApplicationRoutePaths {
  HOME = '/',
  ACCOUNT = '/account',
  ACHIEVEMENTS = '/achievements',
  EDIT_ACCOUNT = '/edit-account',
  EXERCISE_DETAILS = '/exercise-finder/:exerciseId',
  EXERCISE_FINDER = '/exercise-finder',
  SETTINGS = '/settings',
  STATISTICS = '/statistics',
  PROFILE = '/profile',
  TRAININGS = '/trainings',
  TRAINING_EXERCISES = '/trainings/:trainingId/exercises',
  TRAINING_BRAKES = '/trainings/:trainingId/brakes',
  TRAINING_RECOVERY = '/trainings/:trainingId/recovery',
  TRAINING_NOTES = '/trainings/:trainingId/notes',
  TRAINING_HISTORY = '/trainingHistory',
  TRAINING_CREATOR = '/training-creator',
  WORKOUT = '/workout/:trainingId',
}

export const applicationRoutes: RouteProps[] = [
  //{ path: ApplicationRoutePaths.HOME, exact: true, component: () => <Redirect to={ ApplicationRoutePaths.TRAININGS }/> },
  { path: ApplicationRoutePaths.TRAININGS, exact: true, component: TrainingsList },
  { path: ApplicationRoutePaths.EXERCISE_FINDER, exact: true, component: ExerciseFinderPage },
  { path: ApplicationRoutePaths.TRAINING_HISTORY, exact: true, component: TrainingHistory },
  { path: ApplicationRoutePaths.TRAINING_EXERCISES, exact: true, component: TrainingExercises },
  { path: ApplicationRoutePaths.TRAINING_BRAKES, exact: true, component: TrainingBrakes },
  { path: ApplicationRoutePaths.TRAINING_RECOVERY, exact: true, component: TrainingRecover },
  { path: ApplicationRoutePaths.TRAINING_NOTES, exact: true, component: TrainingNotes },
  { path: ApplicationRoutePaths.TRAINING_CREATOR, exact: true, component: TrainingCreator },
  { path: ApplicationRoutePaths.ACCOUNT, exact: true, component: Account },
  { path: ApplicationRoutePaths.EDIT_ACCOUNT, exact: true, component: EditAccount },
  { path: ApplicationRoutePaths.PROFILE, exact: true, component: Profile },
  { path: ApplicationRoutePaths.ACHIEVEMENTS, exact: true, component: Achievements },
  { path: ApplicationRoutePaths.SETTINGS, exact: true, component: Settings },
  { path: ApplicationRoutePaths.STATISTICS, exact: true, component: Statistics },
  { path: ApplicationRoutePaths.WORKOUT, exact: true, component: Workout },
  { path: '', exact: false, component: () => <Redirect to={ ApplicationRoutePaths.TRAININGS }/> },
];


export const ApplicationRoutes = observer(() => {

  if (!userStore.id) {
    return null;
  }

  return <RenderRoutes routes={ applicationRoutes }/>
})
