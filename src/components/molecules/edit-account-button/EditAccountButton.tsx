import React, { FC } from 'react';
import Button from '../universal-account-button';
import { Div, Span } from './EditAccountButtonStyle';

interface IEditAccountButton {
  detail: string,
  value: string,
}

const EditAccountButton: FC<IEditAccountButton> = ({ detail, value }) =>

  <Button>
    <Div>
      <Span>{ detail }</Span>
      <Span>{ value }</Span>
    </Div>
  </Button>

export default EditAccountButton;
