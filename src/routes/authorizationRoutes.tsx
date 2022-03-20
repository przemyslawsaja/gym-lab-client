import React from 'react';
import { Redirect, RouteProps } from 'react-router-dom';
import { SignIn } from '../pages/Authorization/Login/SignIn';
import { Registration } from '../pages/Authorization/Registration/Registration';
import { RenderRoutes } from './RenderRoutes';

export enum AuthorizationRoutePaths  {
  AUTH_GOOGLE = '/auth/google',
  REGISTRATION = '/registration',
  SIGN_IN = '/login',
}

export const authorizationRoutes: RouteProps[] = [
  { path: AuthorizationRoutePaths.REGISTRATION, exact: true, component: Registration},
  { path: AuthorizationRoutePaths.SIGN_IN, exact: true, component: SignIn },
  { path: '', exact: false, component: () => <Redirect to={AuthorizationRoutePaths.SIGN_IN} /> },
];

export const AuthorizationRoutes = () => <RenderRoutes routes={ authorizationRoutes }/>
