import React, { FC, useEffect } from 'react';
import { AuthorizationButtons, AuthorizationForm, AuthorizationSubLink, AuthorizationWrapper } from './AuthorizationTemplateStyle'
import Logo from '../../components/molecules/Logo/Logo';
import { Button } from '../../components/atoms';
import Link from '../../components/atoms/Link/Link';
import { AuthorizationRoutePaths } from '../../routes/authorizationRoutes';
import { authorizationStore } from '../../stores';
import { ButtonType } from '../../components/atoms/Button/Button';
import { AiFillGoogleCircle } from 'react-icons/ai'

interface IAuthorizationButton {
  content: string,

  onClick?(): void,

  link?: string,
}

export interface IAuthorizationTemplateButtons {
  primary: IAuthorizationButton,
  primaryAlternative?: IAuthorizationButton,
  secondary?: IAuthorizationButton,
}

interface IAuthorizationTemplateProps {
  children: React.ReactNode;
  buttons: IAuthorizationTemplateButtons,
  subLink?: boolean
}

export const AuthorizationTemplate: FC<IAuthorizationTemplateProps> = ({ children, buttons, subLink }) => {
  const { primary, secondary, primaryAlternative } = buttons;

  useEffect(() => {
    return authorizationStore.clear()
  }, [])

  return <AuthorizationWrapper>
    <Logo/>

    <AuthorizationForm>
      { children }
    </AuthorizationForm>

    <AuthorizationButtons>
      <Button onClick={ primary.onClick } content={ primary.content }/>
      { primaryAlternative && <Button content={'Login with Google'} onClick={() => window.location.href = 'http://localhost:3000/auth/google'} type={ButtonType.RED}><AiFillGoogleCircle size={'2.5rem'}/></Button> }
      { secondary && <Button onClick={ secondary.onClick } content={ secondary.content } type={ ButtonType.SECONDARY }/> }
      { subLink && <AuthorizationSubLink>Already Have an account? <Link to={ AuthorizationRoutePaths.SIGN_IN }> Sign in ></Link></AuthorizationSubLink> }
    </AuthorizationButtons>

  </AuthorizationWrapper>
}