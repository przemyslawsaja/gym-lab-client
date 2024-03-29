import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib/esm/iconBase';

export interface IHeaderButton {
  icon?: IconType;
  iconProps?: Partial<IconBaseProps>
  onClick(): void;
  content?: string;
}

export interface IHeaderButtons {
  left?: IHeaderButton;
  right?: IHeaderButton;
  hideOnDesktop?: boolean;
}
