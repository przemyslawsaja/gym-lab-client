import React, { FC, ReactNode } from 'react';
import Icon from '../../atoms/Icon/Icon';
import { theme } from '../../../theme/MainTheme';
import { Button } from './UniversalAccountButtonStyle';

const UniversalAccountButton: FC<{ children: ReactNode }> = ({ children }) =>
  <Button>
    { children }
    <Icon size={ 1 } className="fas fa-chevron-right" color={ theme.colors.secondary.color2 } />
  </Button>

export default UniversalAccountButton;