import React, { useState } from 'react';
import { AuthorizationTemplate } from '../../../templates';
import { IAuthorizationTemplateButtons } from '../../../templates/authorization-template';
import { authorizationStore } from '../../../stores';
import { Input } from '../../../components/atoms/inputs/input';
import { observer } from 'mobx-react';
import { toast } from 'react-toastify';
import { LoadingScreen } from "../../../components/atoms/loading-screen";

export const Registration = observer(() => {
    const [isLoading, setIsLoading] = useState(false);

    const {
      username,
      password,
      repeatPassword,
      setUsername,
      setPassword,
      setRepeatPassword,
      register,
    } = authorizationStore;

    const registerButtons: IAuthorizationTemplateButtons = {
      primary: {
        content: "Create account",
        onClick() {
            setIsLoading(true)
            register()
            .then(() => toast.success('Account created successfully. You can log in now!'))
            .finally(() => setIsLoading(false))
        }
      },
    }

    return <>
        {isLoading && <LoadingScreen />}
        <AuthorizationTemplate buttons={ registerButtons } subLink>
            <Input value={ username } onChange={ e => setUsername(e.target.value) } label={ 'Username' } type={ 'text' }/>
            <Input value={ password } onChange={ e => setPassword(e.target.value) } label={ 'Password' } type={ 'password' }/>
            <Input value={ repeatPassword } onChange={ e => setRepeatPassword(e.target.value) } label={ 'Repeat password' } type={ 'password' }/>
        </AuthorizationTemplate></>
  }
)
