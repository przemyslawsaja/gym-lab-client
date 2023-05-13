import { Account } from '../views/account';
import { TrainingsList } from '../views/trainings/training-list';
import { TrainingExercises } from '../views/trainings/training-details/training-exercises'
import { TrainingBrakes } from '../views/trainings/training-details/training-brakes';
import { TrainingHistory } from '../views/trainings/training-history';
import { Workout } from '../views/workout';
import { RenderRoutes } from './RenderRoutes';
import { TrainingCreator } from '../views/trainings/training-creator';
import { Redirect, RouteProps } from 'react-router-dom';
import { TrainingShare } from '../views/trainings/training-details/training-share';
import { ExerciseFinderPage } from '../views/exercise-finder';
import React from 'react';
import { observer } from 'mobx-react';
import { userStore } from '../stores';
import { Community } from '../views/community';

export enum ApplicationRoutePaths {
  HOME = '/',
  ACCOUNT = '/account',
  ACHIEVEMENTS = '/achievements',
  EDIT_ACCOUNT = '/edit-account',
  EXERCISE_DETAILS = '/exercise-finder/:exerciseId',
  EXERCISE_FINDER = '/exercise-finder',
  SETTINGS = '/settings',
  STATISTICS = '/statistics',
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
