import { observer } from 'mobx-react';
import * as React from 'react';
import { FC } from 'react';
import { ModalBackground, ModalBody, ModalFooter, ModalHeader, ModalWrapper } from './ModalStyle'
import { AiOutlineCloseCircle } from 'react-icons/all';
import { Button, ButtonType } from '../../Button/Button';

export interface IModalButton {
  content: string,

  onClick?(): void;

  link?: string;
}

interface IModalProps {
  title: string,
  children: JSX.Element;
  fillWindow?: boolean;
  confirmButton?: IModalButton;
  backButton: IModalButton;
}

export const Modal: FC<IModalProps> = observer(({ title, confirmButton, backButton, children, fillWindow }) => {
  return <>
    <ModalWrapper fillWindow={ fillWindow }>
      <ModalHeader>
        <span>{ title }</span>
      </ModalHeader>
      <AiOutlineCloseCircle size={ '4rem' } className={ 'close-modal' } onClick={ backButton.onClick } cursor={'pointer'}/>
      <ModalBody>
        { children }
      </ModalBody>
      <ModalFooter>
        { backButton.link
          ? <Button content={ backButton.content } link={ backButton.link } onClick={ backButton.onClick } type={ ButtonType.SECONDARY_LIGHT }/>
          : <Button content={ backButton.content } onClick={ backButton.onClick } type={ ButtonType.SECONDARY_LIGHT }/> }
        { confirmButton && (confirmButton.link
          ? <Button content={ confirmButton.content } link={ confirmButton.link } onClick={ backButton.onClick }/>
          : <Button content={ confirmButton.content } onClick={ confirmButton.onClick }/>) }
      </ModalFooter>
    </ModalWrapper>
    <ModalBackground/>
  </>
})