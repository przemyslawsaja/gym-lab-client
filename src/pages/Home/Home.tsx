import React from 'react';
import H1 from '../../components/atoms/H1/H1';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import ProfileImage from '../../components/atoms/ProfileImage/ProfileImage';
import { Navigation } from '../../components/organisms/Navigation/Navigation'
import { Data } from '../../ExampleData';
import { HomeWrapper, Rectangle} from './HomeStyle';

export const Home = () => {

  const { firstName, profileImage } = Data.UserDetailsHome;

  return (
    <HomeWrapper>
      <div>
        <div>
          <H1>Hey { firstName },</H1>
          <Paragraph>Let's workout! (jakiś tekst na dzień dobry)</Paragraph>
        </div>
        <ProfileImage size="65px" src={ profileImage } alt=""/>
      </div>
      <Rectangle/>
      <Navigation/>
    </HomeWrapper>
  )
}
 