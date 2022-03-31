import React, { FC } from 'react';
import { ButtonWrapper } from './ButtonStyle';
import { theme } from '../../../theme/MainTheme';
import Link from '../Link/Link';

interface IButton {
  content: string,
  size?: ButtonSize,
  type?: ButtonType,
  roundCorners?: boolean,
  children?: JSX.Element,
  reverse?: boolean,

  onClick?(e?: React.MouseEvent<HTMLButtonElement, MouseEvent>): void,

  link?: string,
}

export enum ButtonType {
  PRIMARY = 'primary300',
  SECONDARY = 'secondary',
  SECONDARY_LIGHT = 'secondary_light',
  TERTIARY = 'tertiary',
  QUATERNARY = 'quaternary',
  WHITE = 'white',
  RED = 'red'
}

export interface IButtonColor {
  main: string,
  hover: string
}

export type ButtonSize = 'large' | 'medium' | 'small';

export const Button: FC<IButton> = ({ link, content, children, reverse, size, type, onClick }, roundCorners) => {
  const { primary300, primary400, background100, background200, tertiary300, tertiary400, quaternary400, } = theme.colors.brand;

  const defaultButtonColor: IButtonColor = { main: primary300, hover: primary400 }

  const getColorByType = (): IButtonColor => {
    if (type) {
      switch (type) {
        case ButtonType.SECONDARY:
          return { main: background100, hover: background200 }
        case ButtonType.SECONDARY_LIGHT:
          return { main: '#3b3e4f', hover: background200 }
        case ButtonType.TERTIARY:
          return { main: tertiary300, hover: tertiary400 }
        case ButtonType.QUATERNARY:
          return { main: '#32C3A0', hover: quaternary400 }
        case ButtonType.WHITE:
          return { main: '#fff', hover: '#e0e0e0' }
        case ButtonType.RED:
          return { main: theme.colors.action.error100, hover: theme.colors.action.error300 }
        default:
          return defaultButtonColor
      }
    } else {
      return defaultButtonColor
    }
  }

  const button = <ButtonWrapper size={ size } onClick={ onClick } backgroundColor={ getColorByType() } roundCorners={ roundCorners }>
    { reverse ? <>
      { children }
      <span>{ content }</span>
    </> : <>
      <span>{ content }</span>
      { children }
    </> }
  </ButtonWrapper>

  if (link) {
    return <Link to={ link }> { button } </Link>
  } else {
    return button
  }
}



