import React, { FC } from 'react'
import H1 from '../../atoms/H1/H1'
import { HeaderContent, HeaderWrapper } from './HeaderNavigationStyle'
import { RoundButton } from '../../atoms';
import { IHeaderButtons } from './__types__';
import { ButtonType } from '../../atoms/Button/Button';
import { HEADER_NAVIGATION } from '../../../common/Constants';
import Paragraph from '../../atoms/Paragraph/Paragraph';


export interface IHeaderNavigationProps {
  title: string;
  subtitle?: string;
  buttons?: IHeaderButtons
}


const HeaderNavigation: FC<IHeaderNavigationProps> = ({ title, buttons, subtitle }) => {

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

  return <HeaderWrapper>
    { buttons && buttons.left && <RoundButton radius={ HEADER_NAVIGATION.DEFAULT_BUTTON_RADIUS } onClick={ buttons.left.onClick } type={ ButtonType.SECONDARY }>
      { buttons.left.icon && <buttons.left.icon { ...buttonProps.left }/> }
    </RoundButton> }

    <HeaderContent>
      <H1>{ title }</H1>
      <Paragraph>{ subtitle }</Paragraph>
    </HeaderContent>

    { buttons && buttons.right && <RoundButton radius={ HEADER_NAVIGATION.DEFAULT_BUTTON_RADIUS } onClick={ buttons.right.onClick } type={ ButtonType.PRIMARY }>
      { buttons.right.icon && <buttons.right.icon { ...buttonProps.right }/> }
    </RoundButton> }
  </HeaderWrapper>
}

export default HeaderNavigation;
