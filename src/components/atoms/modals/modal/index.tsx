import { observer } from 'mobx-react';
import * as React from 'react';
import { FC } from 'react';
import { ModalBackground, ModalBody, ModalFooter, ModalHeader, ModalWrapper } from './styles'
import { AiOutlineCloseCircle } from 'react-icons/all';
import { Button, ButtonType } from '../../button';

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
  nested?: boolean
}

export const Modal: FC<IModalProps> = observer(({ title, confirmButton, backButton, children, nested, fillWindow }) => {
  return <>
    <ModalWrapper fillWindow={ fillWindow }>
      <ModalHeader>
        <span>{ title }</span>
      </ModalHeader>
      <AiOutlineCloseCircle size={ '4rem' } className={ 'close-modal' } onClick={ backButton.onClick } cursor={ 'pointer' }/>
      <ModalBody>
        { children }
      </ModalBody>
      <ModalFooter>
        { backButton.link
          ? <Button content={ backButton.content } link={ backButton.link } onClick={ backButton.onClick } btnType={ ButtonType.SECONDARY_LIGHT }/>
          : <Button content={ backButton.content } onClick={ backButton.onClick } btnType={ ButtonType.SECONDARY_LIGHT }/> }
        { confirmButton && (confirmButton.link
          ? <Button content={ confirmButton.content } link={ confirmButton.link } onClick={ backButton.onClick }/>
          : <Button content={ confirmButton.content } onClick={ confirmButton.onClick }/>) }
      </ModalFooter>
    </ModalWrapper>
    <ModalBackground nested={nested}/>
  </>
})
