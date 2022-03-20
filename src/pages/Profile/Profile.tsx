import React from 'react';
import ProfileLink from '../../components/molecules/ProfileLink/ProfileLink';
import { MainTemplate } from '../../templates';
import { ApplicationRoutePaths } from '../../routes/applicationRoutes';
import { useHistory } from 'react-router-dom';
import {ProfileWrapper} from './ProfileStyle'
import { AuthorizationRoutePaths } from '../../routes/authorizationRoutes';

export const Profile = () => {
  const history = useHistory();
  return (
    <MainTemplate>
      <ProfileWrapper>
        <ProfileLink path={ ApplicationRoutePaths.EDIT_ACCOUNT } iconClassName="fas fa-user"/>
        <ProfileLink path={ ApplicationRoutePaths.STATISTICS } iconClassName="fas fa-chart-bar"/>
        <ProfileLink path={ ApplicationRoutePaths.TRAININGS } iconClassName="fas fa-chart-line"/>
        <ProfileLink path={ ApplicationRoutePaths.SETTINGS } iconClassName="fas fa-cog"/>
        <ProfileLink path={ ApplicationRoutePaths.ACHIEVEMENTS } iconClassName="fas fa-award"/>
        <ProfileLink
          path={ AuthorizationRoutePaths.REGISTRATION }
          iconClassName="fas fa-door-open"
          content="log out"
          additionalFunction={ () => {
            localStorage.removeItem('loggedUser')
          } }
        />
      </ProfileWrapper>
    </MainTemplate>
  )
}
