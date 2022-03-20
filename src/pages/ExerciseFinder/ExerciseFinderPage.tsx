import React from 'react'
import { MainTemplate } from '../../templates'
import { observer } from 'mobx-react';
import { ExerciseFinder } from './ExerciseFinder';
import { ApplicationRoutePaths } from '../../routes/applicationRoutes';
import { useHistory } from 'react-router-dom';

export const ExerciseFinderPage = observer(() => {
  const history = useHistory();
  
    return (
      <MainTemplate navigation={ { title: "Wyszukaj ćwiczenie" } }>
        <ExerciseFinder onExerciseClick={() => history.push(ApplicationRoutePaths.EXERCISE_DETAILS) }/>
      </MainTemplate>
    )
  }
)
