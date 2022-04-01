import React from 'react';
import { MainTemplate } from '../../templates';
import { AccountWrapper } from './AccountStyle'
import Paragraph from '../../components/atoms/Paragraph/Paragraph';

export const Account = () => {
  return (
    <MainTemplate>
      <AccountWrapper>
        <Paragraph>
          Ta sekcja jest tymczasowo niedostępna
        </Paragraph>
      </AccountWrapper>
    </MainTemplate>
  )
}
