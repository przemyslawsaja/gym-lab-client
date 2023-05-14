import React from 'react';
import Icon from '../../atoms/icon';
import { observer } from 'mobx-react';
import { RoundButton } from '../../atoms';

const SignUpForm = observer(() => {

  return (
    <div>
      <label htmlFor="login" />
      <input name="login" type="text" placeholder="login"/>

      <label htmlFor="password" />
      <label htmlFor="password" />

      <RoundButton>
        <Icon className="fas fa-sign-in-alt" size={ 1.3 } color="inherit"/>&nbsp;Sign up
      </RoundButton>
    </div>
  )
})

export default SignUpForm;
