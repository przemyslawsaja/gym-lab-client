import React from 'react';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import { Navigation } from '../../components/organisms/Navigation/Navigation'
import { HomeWrapper, Rectangle} from './HomeStyle';

export const Home = () => {
  return (
    <HomeWrapper>
      <div>
        <div>
          <Paragraph>Let's workout! </Paragraph>
        </div>
      </div>
      <Rectangle/>
      <Navigation/>
    </HomeWrapper>
  )
}
 