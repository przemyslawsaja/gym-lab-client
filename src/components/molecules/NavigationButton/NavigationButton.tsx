import React, { FC, ReactNode } from 'react';
import { Link } from './NavigationButtonStyle';
import { ApplicationRoutePaths } from '../../../routes/applicationRoutes';
import { useHistory } from 'react-router-dom';

interface INavigationButton {
  children: ReactNode,
  path: ApplicationRoutePaths,
  location: string,
  isSpecial?: true,
  onClick?(): void;
}

const NavigationButton: FC<INavigationButton> = ({ path, onClick, children, location, isSpecial }) => {
  const history = useHistory();

  return (
    <Link to={{pathname: path, state: { prevPath: history.location.pathname }}} active={ path === location } isSpecial={ isSpecial } onClick={onClick} >
      { children }
    </Link>
  )
}

export default NavigationButton;