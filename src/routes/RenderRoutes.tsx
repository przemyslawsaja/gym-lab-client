import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Loader } from '../components/atoms/Loader/Loader'

const Suspense = (React as any).Suspense;

interface IRenderRoutes {
  routes: any[];
}

export function RenderRoutes({ routes }: IRenderRoutes) {
  return (
    <Suspense fallback={ <Loader/> }>
      <Switch>
        { routes.map(({ component: Component, ...route }, index) =>
          <Route { ...route } key={ index } component={ Component }/>) }
      </Switch>
    </Suspense>
  );
}
