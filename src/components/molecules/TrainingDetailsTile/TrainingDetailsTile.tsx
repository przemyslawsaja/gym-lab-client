import React, { FC } from 'react'
import { Link, TailWrapper } from './TrainingDetailsTileStyle'
import { useHistory, useLocation } from 'react-router-dom';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib/esm/iconBase';
import { theme } from '../../../theme/MainTheme';

interface ITrainingDetailsTile {
  active?: boolean;
  tileIcon: {
    icon: IconType,
    props?: Partial<IconBaseProps>
  }
  rotation?: number;
  path: string;
}

export const TrainingDetailsTile: FC<ITrainingDetailsTile> = ({ tileIcon, path }) => {
  let history = useHistory();
  const { pathname } = useLocation();

  const isActive =  path === pathname
  return (
    <Link to={ path }>
      <TailWrapper active={ isActive } onClick={ () => history.push('/trainings') }>
        <tileIcon.icon { ...tileIcon.props } size={ '4rem' } color={ isActive ?  theme.colors.brand.text100 : theme.colors.brand.background300}/>
      </TailWrapper>
    </Link>
  )
}

