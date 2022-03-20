import React, { FC } from 'react';
import Button from '../UniversalAccountButton/UniversalAccountButton';
import { Link, Span } from './ProfileLinkStyle';
import { theme } from '../../../theme/MainTheme';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Icon from '../../atoms/Icon/Icon';
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