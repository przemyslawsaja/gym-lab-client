import React, { FC, useEffect, useState } from 'react';
import { AuthorizationTemplate } from '../../../templates'
import { observer } from 'mobx-react';
import { authorizationStore } from '../../../stores';
import { Input } from '../../../components/atoms/inputs/input';
import { IAuthorizationTemplateButtons } from '../../../templates/authorization-template';
import { AuthorizationRoutePaths } from '../../../routes/authorizationRoutes';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ApplicationRoutePaths } from '../../../routes/applicationRoutes';
import { LoadingScreen } from "../../../components/atoms/loading-screen";

export const SignIn: FC = observer(() => {
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory()

    const {
      username,
      password,
      setUsername,
      setPassword,
      signIn,
    } = authorizationStore;

    const signInButtons: IAuthorizationTemplateButtons = {
      primary: {
        content: "Login",
        onClick() {
          setIsLoading(true)
          signIn()
            .then(() => toast.success('Logged successfully'))
            .then(() => history.push(ApplicationRoutePaths.HOME))
            .finally(() => setIsLoading(false))
        }
      },
      secondary: {
        content: "Create account",
        onClick() {
          history.push(AuthorizationRoutePaths.REGISTRATION)
        }
      }
    }

    return <>
        {isLoading && <LoadingScreen />}
        <AuthorizationTemplate buttons={ signInButtons }>
            <Input value={ username } onChange={ e => setUsername(e.target.value) } label={ 'Username' } type={ 'text' }/>
            <Input value={ password } onChange={ e => setPassword(e.target.value) } label={ 'Password' } type={ 'password' }/>
        </AuthorizationTemplate>
    </>
  }
)

