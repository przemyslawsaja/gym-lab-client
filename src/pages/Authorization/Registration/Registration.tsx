import React from 'react';
import { AuthorizationTemplate } from '../../../templates';
import { IAuthorizationTemplateButtons } from '../../../templates/AuthorizationTemplate/AuthorizationTemplate';
import { authorizationStore } from '../../../stores';
import { Input } from '../../../components/atoms/Inputs/Input/Input';
import { observer } from 'mobx-react';
import { toast } from 'react-toastify';

export const Registration = observer(() => {

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
          register()
            .then(() => toast.success('Account created successfully. You can log in now!'))
        }
      },
    }

    return (
      <AuthorizationTemplate buttons={ registerButtons } subLink>
         <Input value={ username } onChange={ e => setUsername(e.target.value) } label={ 'Username' } type={ 'text' }/>
         <Input value={ password } onChange={ e => setPassword(e.target.value) } label={ 'Password' } type={ 'password' }/>
         <Input value={ repeatPassword } onChange={ e => setRepeatPassword(e.target.value) } label={ 'Repeat password' } type={ 'password' }/>
      </AuthorizationTemplate>
    )
  }
)