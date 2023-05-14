import React from 'react'
import { MainTemplate } from '../../templates'
import { observer } from 'mobx-react';
import { ExerciseFinder } from '../../modules/exercise-finder';

export const ExerciseFinderPage = observer(() => {
    return (
      <MainTemplate navigation={ { title: "Wyszukaj ćwiczenie" } }>
        <ExerciseFinder withExercisesButtons={false} />
      </MainTemplate>
    )
  }
)
