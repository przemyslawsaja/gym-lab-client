import React, { FC } from 'react';
import Link from '../../atoms/Link/Link';
import { ApplicationRoutePaths } from '../../../routes/applicationRoutes';
import { AuthorizationRoutePaths } from '../../../routes/authorizationRoutes';

interface IAccessFormLink {
  to: AuthorizationRoutePaths,
  content: string,
}

const AccessFormLink: FC<IAccessFormLink> = ({ to, content }) => {
  return (
    <Link to={ to }>
      { content }
    </Link>
  )
}

export default AccessFormLink;