import React, { FC, ReactNode } from 'react';
import { INavigationProps, Navigation } from '../../components/organisms/Navigation/Navigation';
import { Container } from './MainTemplateStyle';
import HeaderNavigation, { IHeaderNavigationProps } from '../../components/organisms/HeaderNavigation/HeaderNavigation';


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

