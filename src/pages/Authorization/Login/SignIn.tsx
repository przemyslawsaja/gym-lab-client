import React, { FC, useEffect } from 'react';
import { AuthorizationTemplate } from '../../../templates'
import { observer } from 'mobx-react';
import { authorizationStore } from '../../../stores';
import { Input } from '../../../components/atoms/Inputs/Input/Input';
import { IAuthorizationTemplateButtons } from '../../../templates/AuthorizationTemplate/AuthorizationTemplate';
import { AuthorizationRoutePaths } from '../../../routes/authorizationRoutes';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ApplicationRoutePaths } from '../../../routes/applicationRoutes';

export const SignIn: FC = observer(() => {

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
          signIn()
            .then(() => toast.success('Logged successfully'))
            .then(() => history.push(ApplicationRoutePaths.HOME))
        }
      },
      secondary: {
        content: "Create account",
        onClick() {
          history.push(AuthorizationRoutePaths.REGISTRATION)
        }
      }
    }

    return (
      <AuthorizationTemplate buttons={ signInButtons }>
          <Input value={ username } onChange={ e => setUsername(e.target.value) } label={ 'Username' } type={ 'text' }/>
          <Input value={ password } onChange={ e => setPassword(e.target.value) } label={ 'Password' } type={ 'password' }/>
      </AuthorizationTemplate>
    )
  }
)

