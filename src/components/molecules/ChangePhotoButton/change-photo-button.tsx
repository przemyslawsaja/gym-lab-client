import React from 'react';
import ProfileImage from '../../atoms/profile-image';
import userImg from '../../../assets/img/exampleImg.jpg';
import { Button, Div } from './styles';
import Icon from '../../atoms/icon';
import { theme } from '../../../theme/main-theme';

const ChangePhotoButton = () => {
  return (
    <Button>
      <Div>
        <Icon color={ theme.colors.secondary.color2 } className="fas fa-camera" size={ 3 }/>
      </Div>
      <ProfileImage size="150px" src={ userImg } alt=""/>
    </Button>
  )
}

export default ChangePhotoButton;
