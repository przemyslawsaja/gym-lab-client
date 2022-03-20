import { IColors } from './IColors';
import { IShadows } from './IShadows';
import { IFontSizes } from './IFontSizes';

export interface ITheme {
  colors: IColors,
  shadows: IShadows,
  fontSizes: IFontSizes,
}