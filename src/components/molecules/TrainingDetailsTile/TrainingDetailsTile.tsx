import React, { FC, useEffect, useState } from 'react'
import { Link, TailWrapper, DetailsTabLabel } from './TrainingDetailsTileStyle'
import { useHistory, useLocation } from 'react-router-dom';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib/esm/iconBase';
import { theme } from '../../../theme/MainTheme';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { deviceValues } from '../../../devices/Breakpoints';

interface ITrainingDetailsTile {
  active?: boolean;
  tileIcon: {
    icon: IconType,
    props?: Partial<IconBaseProps>
  }
  label: string
  rotation?: number;
  path: string;
}

export const TrainingDetailsTile: FC<ITrainingDetailsTile> = ({ tileIcon, path, label }) => {
  let history = useHistory();
  const { pathname } = useLocation();
  const [isTabletDevice, setTabletDevice] = useState<boolean>(true);

  const { width } = useWindowSize();

  useEffect(() => {
    width >= deviceValues.tabletL
      ? setTabletDevice(true)
      : setTabletDevice(false)
  }, [width])

  const isActive = path === pathname

  if (isTabletDevice) {
    return <Link to={ path }>
      <DetailsTabLabel isActive={ isActive}> { label } </DetailsTabLabel>
    </Link>
  }
  return (
    <Link to={ path }>
      <TailWrapper active={ isActive } onClick={ () => history.push('/trainings') }>
        <tileIcon.icon { ...tileIcon.props } size={ '4rem' } color={ isActive ? theme.colors.brand.text100 : theme.colors.brand.background300 }/>
      </TailWrapper>
    </Link>
  )
}

