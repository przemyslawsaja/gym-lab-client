import React, { FC } from 'react';
import Button from '../universal-account-button';
import { Link, Span } from './styles';
import { theme } from '../../../theme/main-theme';
import Paragraph from '../../atoms/paragraph';
import Icon from '../../atoms/icon';
import { ApplicationRoutePaths } from '../../../routes/applicationRoutes';
import { AuthorizationRoutePaths } from '../../../routes/authorizationRoutes';

interface IProfileLink {
  path: ApplicationRoutePaths | AuthorizationRoutePaths,
  iconClassName: string,
  content?: string,
  additionalFunction?: () => void,
}

const ProfileLink: FC<IProfileLink> = ({ content, iconClassName, path, additionalFunction }) =>

  <Link to={ path } onClick={ additionalFunction && additionalFunction }>
    <Button>
      <Paragraph>
        <Icon size={ 1.2 } className={ iconClassName } color={ theme.colors.secondary.color2 }/>
        <Span>{ content ? content : path.replace(/-/g, ' ').slice(1) }</Span>
      </Paragraph>
    </Button>
  </Link>


export default ProfileLink;
