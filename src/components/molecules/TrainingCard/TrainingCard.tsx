import React, { FC, useEffect, useState } from 'react';
import H1 from '../../atoms/H1/H1';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { theme } from '../../../theme/MainTheme';
import { Card, CardBackgroundImage, CardContent, CardDetails, CardOptions, EmptyCard, WorkoutBtnWrapper, DetailsLabel } from './TrainingCardStyle'
import { Button, RoundButton } from '../../atoms';
import { useHistory } from 'react-router-dom';
import { ButtonType } from '../../atoms/Button/Button';
import { BsPlayCircle } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { MdOutlineAddCircleOutline } from 'react-icons/all';
import { ApplicationRoutePaths } from '../../../routes/applicationRoutes';
import { useWindowSize } from '../../../hooks';
import { deviceValues } from '../../../devices/Breakpoints';

interface ITrainingCardProps {
  id?: string,
  name?: string,
  duration?: number,
  isEmpty?: boolean,
  emptyContent?: string
}

const TrainingCard: FC<ITrainingCardProps> = ({ name, duration, id, isEmpty, emptyContent }) => {
  const history = useHistory()
  const [isMobileDevice, setMobileDevice] = useState<boolean>(true);

  const { width } = useWindowSize();

  useEffect(() => {
    width <= deviceValues.mobileM
      ? setMobileDevice(true)
      : setMobileDevice(false)
  }, [width])


  const renderTrainingName = (): string => {
    const MAX_MOBILE_TRAINING_NAME_LENGTH = 13;

    if(!name) {
      return '';
    }

    if(isMobileDevice &&  name?.length > MAX_MOBILE_TRAINING_NAME_LENGTH ){
       return `${name.slice(0, MAX_MOBILE_TRAINING_NAME_LENGTH).toUpperCase()}...`
    }

    return name.toUpperCase()
  }

  if (isEmpty) {
    return <EmptyCard onClick={ () => history.push(ApplicationRoutePaths.TRAINING_CREATOR) }>
      <MdOutlineAddCircleOutline size={ '7rem' } color={ theme.colors.brand.text400 }/>
      <Paragraph fontSize={'1.8rem'}> { emptyContent } </Paragraph>

    </EmptyCard>
  }

  return (
    <Card>
      <CardBackgroundImage/>

      <CardContent>
        <CardDetails>
          <div>
            <H1> { renderTrainingName()}</H1>
            <DetailsLabel><Paragraph>Nazwa</Paragraph></DetailsLabel>
          </div>
          <div>
            <H1 color={ theme.colors.brand.quaternary300 }>{ duration } min</H1>
            <DetailsLabel><Paragraph>Długość treningu</Paragraph></DetailsLabel>
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