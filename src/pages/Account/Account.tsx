import React from 'react';
import { MainTemplate } from '../../templates';
import { Data } from '../../ExampleData';
import { AccountWrapper } from './AccountStyle'
import Paragraph from '../../components/atoms/Paragraph/Paragraph';

export const icons = [
  'fas fa-weight-hanging',
  'fas fa-arrow-up',
  'fas fa-birthday-cake',
  'fas fa-user-friends',
];

export const Account = () => {
  const { profileImage, ...details } = Data.UserDetailsAccount;

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
