import { Account } from '../pages/Account/Account';
import { Profile } from '../pages/Profile/Profile';
import { TrainingsList } from '../pages/Trainings/TrainingsList/TrainingsList';
import { TrainingExercises } from '../pages/Trainings/TrainingDetails/TrainingExercises/TrainingExercises'
import { TrainingBrakes } from '../pages/Trainings/TrainingDetails/TrainingBrakes/TrainingBrakes';
import { TrainingHistory } from '../pages/Trainings/TrainingHistory/TrainingHistory';
import { Workout } from '../pages/Workout/Workout';
import { RenderRoutes } from './RenderRoutes';
import { TrainingCreator } from '../pages/Trainings/TrainingCreator/TrainingCreator';
import { Redirect, RouteProps } from 'react-router-dom';
import { TrainingShare } from '../pages/Trainings/TrainingDetails/TrainingShare/TrainingShare';
import { ExerciseFinderPage } from '../pages/ExerciseFinder/ExerciseFinderPage';
import React from 'react';
import { observer } from 'mobx-react';
import { userStore } from '../stores';
import { Community } from '../pages/Community/Community';

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
  TRAINING_SHARE = '/trainings/:trainingId/share',
  TRAINING_HISTORY = '/trainingHistory',
  TRAINING_CREATOR = '/training-creator',
  WORKOUT = '/workout/:trainingId',
  COMMUNITY = '/community'
}

export const applicationRoutes: RouteProps[] = [
  //{ path: ApplicationRoutePaths.HOME, exact: true, component: () => <Redirect to={ ApplicationRoutePaths.TRAININGS }/> },
  { path: ApplicationRoutePaths.TRAININGS, exact: true, component: TrainingsList },
  { path: ApplicationRoutePaths.EXERCISE_FINDER, exact: true, component: ExerciseFinderPage },
  { path: ApplicationRoutePaths.TRAINING_HISTORY, exact: true, component: TrainingHistory },
  { path: ApplicationRoutePaths.TRAINING_EXERCISES, exact: true, component: TrainingExercises },
  { path: ApplicationRoutePaths.TRAINING_BRAKES, exact: true, component: TrainingBrakes },
  { path: ApplicationRoutePaths.TRAINING_SHARE, exact: true, component: TrainingShare },
  { path: ApplicationRoutePaths.TRAINING_CREATOR, exact: true, component: TrainingCreator },
  { path: ApplicationRoutePaths.ACCOUNT, exact: true, component: Account },
  { path: ApplicationRoutePaths.PROFILE, exact: true, component: Profile },
  { path: ApplicationRoutePaths.WORKOUT, exact: true, component: Workout },
  { path: ApplicationRoutePaths.COMMUNITY, exact: true, component: Community },
  { path: '', exact: false, component: () => <Redirect to={ ApplicationRoutePaths.TRAININGS }/> },
];


export const ApplicationRoutes = observer(() => {

  if (!userStore.id) {
    return null;
  }

  return <RenderRoutes routes={ applicationRoutes }/>
})
