import React, { FC, ReactNode } from 'react';
import { INavigationProps, Navigation } from '../../components/organisms/navigation';
import { Container } from './styles';
import HeaderNavigation, { IHeaderNavigationProps } from '../../components/organisms/header-navigation';


interface IMainTemplateProps extends INavigationProps{
  children: ReactNode,
  navigation?: IHeaderNavigationProps,
}
export const MainTemplate: FC<IMainTemplateProps> = ( { navigation, children, workoutMode }) => {
  return (
    <>
      {navigation && <HeaderNavigation {...navigation} />}
      <Container>
        { children }
      </Container>
      <Navigation workoutMode={workoutMode}/>
    </>
  )
}

