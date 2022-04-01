import { observer } from 'mobx-react';
import * as React from 'react';
import { FC } from 'react';
import { ModalBackground } from '../Modal/ModalStyle'
import { ConfirmModalBody, ConfirmModalFooter, ConfirmModalWrapper } from './ConfirmModalStyle'
import { AiOutlineCloseCircle } from 'react-icons/all';
import { Button, ButtonType } from '../../Button/Button';

export interface IModalButton {
  content: string,

  onClick?(): void;

  link?: string;
}

interface IModalProps {
  confirmMessage: string;
  confirmButton?: IModalButton;
  backButton: IModalButton;
  confirmDelete?: boolean;
  width?: number;
}

export const ConfirmModal: FC<IModalProps> = observer(({ confirmButton, width, backButton, confirmDelete, confirmMessage }) => {
  return <>
    <ConfirmModalWrapper width={width}>
      <AiOutlineCloseCircle size={ '4rem' } className={ 'close-modal' } onClick={ backButton.onClick } cursor={'pointer'}/>
      <ConfirmModalBody>
        { confirmMessage }
      </ConfirmModalBody>
      <ConfirmModalFooter>
        { backButton.link
          ? <Button content={ backButton.content } link={ backButton.link } onClick={ backButton.onClick } type={ ButtonType.SECONDARY_LIGHT }/>
          : <Button content={ backButton.content } onClick={ backButton.onClick } type={ ButtonType.SECONDARY_LIGHT }/> }
        { confirmButton && (confirmButton.link
          ? <Button content={ confirmButton.content } link={ confirmButton.link } onClick={ backButton.onClick } type={ confirmDelete ? ButtonType.RED : ButtonType.PRIMARY }/>
          : <Button content={ confirmButton.content } onClick={ confirmButton.onClick } type={ confirmDelete ? ButtonType.RED : ButtonType.PRIMARY }/>) }
      </ConfirmModalFooter>
    </ConfirmModalWrapper>
    <ModalBackground/>
  </>
})