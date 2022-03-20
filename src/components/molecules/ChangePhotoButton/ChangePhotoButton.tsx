import React from 'react';
import ProfileImage from '../../atoms/ProfileImage/ProfileImage';
import userImg from '../../../assets/img/exampleImg.jpg';
import { Button, Div } from './ChangePhotoButtonStyle';
import Icon from '../../atoms/Icon/Icon';
import { theme } from '../../../theme/MainTheme';

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