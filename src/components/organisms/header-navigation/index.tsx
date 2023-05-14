import React, { FC, useEffect, useState } from 'react'
import H1 from '../../atoms/h1'
import { HeaderContent, HeaderWrapper, BigButtonWrapper } from './styles'
import { Button, RoundButton } from '../../atoms';
import { IHeaderButtons } from './types';
import { ButtonType } from '../../atoms/button';
import { HEADER_NAVIGATION } from '../../../constants';
import Paragraph from '../../atoms/paragraph';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { deviceValues } from '../../../devices/Breakpoints';


export interface IHeaderNavigationProps {
  title: string;
  subtitle?: string;
  buttons?: IHeaderButtons
}

enum buttonSide {
  LEFT = 'left',
  RIGHT = 'right'
}

const HeaderNavigation: FC<IHeaderNavigationProps> = ({ title, buttons, subtitle }) => {
  const [ isTabletDevice, setTabletDevice ] = useState<boolean>(true);

  const { width } = useWindowSize();

  useEffect(() => {
    width >= deviceValues.tabletL
    ? setTabletDevice(true)
    : setTabletDevice(false)
  }, [width])

  const buttonProps = {
    left: {
      size: buttons?.left?.iconProps?.size ?? HEADER_NAVIGATION.DEFAULT_BUTTON_SIZE,
      color: buttons?.left?.iconProps?.color ?? HEADER_NAVIGATION.DEFAULT_LEFT_BUTTON_COLOR,
    },
    right: {
      size: buttons?.right?.iconProps?.size ?? HEADER_NAVIGATION.DEFAULT_BUTTON_SIZE,
      color: buttons?.right?.iconProps?.color ?? HEADER_NAVIGATION.DEFAULT_RIGHT_BUTTON_COLOR,
    }
  }

  const hideButtonsOnDesktop = ():boolean => {
    if (!buttons) {
      return false;
    }

    return !!buttons.hideOnDesktop && width >= deviceValues.tabletL
  }
  const renderButton = (side: buttonSide) => {
    if (!buttons) {
      return;
    }
    const btn = buttons[side];

    if(!btn || hideButtonsOnDesktop()){
      return;
    }

    if(isTabletDevice) {

      return <BigButtonWrapper>
        <Button onClick={ btn.onClick } btnType={ side === buttonSide.LEFT ? ButtonType.SECONDARY : ButtonType.PRIMARY } content={ btn.content ?? ''}>
          { btn.icon && <btn.icon { ...buttonProps[side] } /> }
        </Button>
      </BigButtonWrapper>
    }

    return <RoundButton radius={ HEADER_NAVIGATION.DEFAULT_BUTTON_RADIUS } onClick={ btn.onClick } type={ side === buttonSide.LEFT ? ButtonType.SECONDARY : ButtonType.PRIMARY }>
      { btn.icon && <btn.icon { ...buttonProps[side] } /> }
    </RoundButton>
  }

  return <HeaderWrapper>
    { renderButton(buttonSide.LEFT) }

    <HeaderContent>
      <H1>{ title }</H1>
      <Paragraph>{ subtitle }</Paragraph>
    </HeaderContent>

    { renderButton(buttonSide.RIGHT) }

  </HeaderWrapper>
}

export default HeaderNavigation;
