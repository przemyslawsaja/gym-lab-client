import React, { FC } from 'react'
import { ButtonWrapper } from './FormButtonStyle'

interface IFormButton {
  children: React.ReactNode,
  onClick: () => void,
  secondary?: boolean,
}

const FormButton: FC<IFormButton> = ({ children, onClick, secondary, ...props }) => {
  return (
    <ButtonWrapper type="submit" secondary={ secondary } onClick={ onClick } { ...props } >
      { children }
    </ButtonWrapper>
  );
}

export default FormButton;
