import React, { FC } from 'react';
import { RoundButtonWrapper } from './RoundButtonStyle';
import { ButtonType, IButtonColor } from '../Button/Button';
import { theme } from '../../../theme/MainTheme';

interface IRoundButton {
  children: React.ReactNode
  radius?: string;
  borderRadius?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType
}

export const RoundButton: FC<IRoundButton> = ({ type, children, radius, borderRadius, onClick }) => {
  const { primary300, primary400, background100, background200, tertiary300, tertiary400, quaternary400, } = theme.colors.brand;

  const defaultButtonColor: IButtonColor = { main: primary300, hover: primary400 }

  const getColorByType = (): IButtonColor => {
    if (type) {
      switch (type) {
        case ButtonType.SECONDARY:
          return { main: background100, hover: background200 }
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
  return (
    <RoundButtonWrapper type="button" radius={ radius } borderRadius={ borderRadius } onClick={ onClick } backgroundColor={ getColorByType() }>
      { children }
    </RoundButtonWrapper>
  );
}

