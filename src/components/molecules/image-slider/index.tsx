import React, { FC, useState } from 'react';
import { Container, Dot, DotsContainer, Img, SwitchImageButton } from './styles';
import Icon from '../../atoms/icon';
import { theme } from '../../../theme/main-theme';

const ImageSlider: FC<{ images: string[], }> = ({ images }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  return (
    <Container>
      { currentImageIndex < images.length - 1 &&
      <SwitchImageButton style={ { right: '0' } } onClick={ () => setCurrentImageIndex(state => state + 1) }>
        <Icon size={ 1.6 } className="fas fa-chevron-right" color={ theme.colors.secondary.color3 }/>
      </SwitchImageButton>
      }
      { currentImageIndex > 0 &&
      <SwitchImageButton style={ { left: '0' } } onClick={ () => setCurrentImageIndex(state => state - 1) }>
        <Icon size={ 1.6 } className="fas fa-chevron-left" color={ theme.colors.secondary.color3 }/>
      </SwitchImageButton>
      }
      <Img src={ images[currentImageIndex] } alt=""/>
      <DotsContainer>
        {
          images.map((_, i) =>
            <Dot key={ i }
                 activated={ currentImageIndex === i }
                 onClick={ () => {
                   setCurrentImageIndex(i)
                 } }
            />)
        }
      </DotsContainer>
    </Container>
  )
}

export default ImageSlider;
