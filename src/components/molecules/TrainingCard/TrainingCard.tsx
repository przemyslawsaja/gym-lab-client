import React, { FC } from 'react';
import H1 from '../../atoms/H1/H1';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { theme } from '../../../theme/MainTheme';
import { Card, CardBackgroundImage, CardDetails, CardOptions, WorkoutBtnWrapper, CardContent } from './TrainingCardStyle'
import { Button, RoundButton } from '../../atoms';
import { useHistory } from 'react-router-dom';
import { ButtonType } from '../../atoms/Button/Button';
import { BsPlayCircle } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'

interface ITrainingCardProps {
  id: string,
  name: string,
  duration: number
}

const TrainingCard: FC<ITrainingCardProps> = ({ name, duration, id }) => {
  const history = useHistory()
  return (
    <Card>
      <CardBackgroundImage/>

      <CardContent>
        <CardDetails>
          <div>
            <H1>{ name.toUpperCase() }</H1>
            <Paragraph>Nazwa</Paragraph>
          </div>
          <div>
            <H1 color={ theme.colors.brand.quaternary300 }>{ duration } min</H1>
            <Paragraph>Długość treningu</Paragraph>
          </div>
        </CardDetails>

        <CardOptions>

          <RoundButton type={ ButtonType.WHITE } onClick={ () => history.push(`/trainings/${ id }/exercises`) }>
            <AiFillEdit size={ '1.8rem' } color={ theme.colors.brand.background300 }/>
          </RoundButton>

          <WorkoutBtnWrapper>
            <Button content={ 'TRENUJ' } type={ ButtonType.QUATERNARY } onClick={ () => history.push(`/workout/${ id }`) }>
              <BsPlayCircle size={ 25 }/>
            </Button>
          </WorkoutBtnWrapper>

        </CardOptions>
      </CardContent>
    </Card>


  );
}

export default TrainingCard;