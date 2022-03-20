import React from 'react';
import EditAccountButton from '../../components/molecules/EditAccountButton/EditAccountButton';
import H2 from '../../components/atoms/H2/H2';
import ChangePhotoButton from '../../components/molecules/ChangePhotoButton/ChangePhotoButton';
import { Data } from '../../ExampleData';
import { theme } from '../../theme/MainTheme';
import styled from 'styled-components';
import HeaderNavigation from '../../components/organisms/HeaderNavigation/HeaderNavigation';
import { ApplicationRoutePaths } from '../../routes/applicationRoutes';

const EditAccountWrapper = styled.div`
  width: 375px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding-top: 100px;
`;

export const EditAccount = ()  => {

  const { profileImage, ...details } = Data.UserDetailsEditAccount;

  return (
    <>
      <EditAccountWrapper>
        <ChangePhotoButton/>
        <H2 style={ { color: theme.colors.secondary.color2 } }>
          Change photo
        </H2>
        { Object.entries(details).map(([detail, value], i) =>
          <EditAccountButton
            detail={ detail }
            value={ value }
            key={ i }
          />
        ) }
      </EditAccountWrapper>
    </>
  )
}
