import React, { useEffect } from 'react';
import { MainTemplate } from '../../templates';
import { IHeaderNavigationProps } from '../../components/organisms/header-navigation';
import { Button } from '../../components/atoms';
import { trainingStore, userStore } from '../../stores';
import { useHistory } from 'react-router-dom';
import { AuthorizationRoutePaths } from '../../routes/authorizationRoutes';
import { Input } from '../../components/atoms/inputs/input';
import * as Styled from './styles'
import { observer } from 'mobx-react';
import ProfileImage from '../../components/atoms/profile-image';
import ProfileImageSrc from '../../assets/img/user.png';

const accountNavigation: IHeaderNavigationProps = {
  title: "Twoje konto",
}

export const Account = observer(() => {
    const history = useHistory();

    useEffect(() => {
      trainingStore.fetchUserTrainings();
    }, [])

    const logoutHandler = (): void => {
      userStore.logoutCleanData();
      history.push(AuthorizationRoutePaths.SIGN_IN)
    }

    return (
      <MainTemplate navigation={ accountNavigation }>
        <Styled.AccountWrapper>
          <Styled.ProfileImageWrapper>
            <ProfileImage src={ ProfileImageSrc } size="20rem" alt=""/>
          </Styled.ProfileImageWrapper>
          <Input value={ userStore.username } disabled label={ 'Nazwa użytkownika' }/>
          <Input value={ trainingStore.trainings.length } disabled label={ 'Ilośc stworzonych treningów' }/>
          <Input value={ 0 } disabled label={ 'Ilośc odbytych treningów' }/>
          <Styled.SignOutButton>
            <Button content={ "Wyloguj" } onClick={ logoutHandler }/>
          </Styled.SignOutButton>
        </Styled.AccountWrapper>
      </MainTemplate>
    )
  }
)
