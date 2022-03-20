import { IColors } from './__types__/IColors'
import { IShadows } from './__types__/IShadows';
import { IFontSizes } from './__types__/IFontSizes';

export const colors: IColors = {
  brand: {
    primary100: '#9F9BE6',
    primary200: '#847FDF',
    primary300: '#6C65D9',
    primary400: '#544BD3',
    primary500: '#3E34CD',
    secondary100: '#FF8A36',
    secondary200: '#FF7A1A',
    secondary300: '#FF6B00',
    secondary400: '#E66000',
    secondary500: '#CF5600',
    tertiary100: '#FFAC36',
    tertiary200: '#FFA01A',
    tertiary300: '#FF9500',
    tertiary400: '#E68600',
    tertiary500: '#CF7900',
    quaternary100: '#D4FFF4',
    quaternary200: '#90FFE4',
    quaternary300: '#56FFD6',
    quaternary400: '#1CFFC8',
    quaternary500: '#00EBB2',
    background100: '#2E3142',
    background200: '#272A38',
    background300: '#212430',
    background400: '#1B1E28',
    background500: '#161921',
    text100: '#e5e9fc',
    text200: '#c9ccdb',
    text300: '#a9acb8',
    text400: '#888b94',
    text500: '#686b72',
  },
  action: {
    error100: '#ea5757',
    error200: '#de4c4c',
    error300: '#b83c3c',
    success100: '#7fe76e',
    success200: '#58cf43',
    success300: '#3eab29',

  },
  //TODO: get rid of these colours vars and use global colour palette ^
  primmary: {
    color1: '#FF6B00',
    color2: '#FC4A1A',
    color3: '#FF9900'
  },
  secondary: {
    color1: '#FFFFFF',  /*headers*/
    color2: '#A7A7A7',  /*Parahraphs*/
    color3: '#DADADA',
  },
  card: {
    color1: '#1C1C1C',
    color2: '#343434'
  },
  input: {
    background: '#363738',
    darkShadow: 'rgba(0,0,0,0.33)',
    lightShadow: 'rgba(164,164,164,0.29)'
  },
  button: {
    primmary: {
      color1: '#464646',
      color2: '#1C1C1C',
      text: '#BCBCBC'
    },
    secondary: {
      color1: '#FF9900',
      color2: '#FC4A1A',
      text: '#E0E1E1'
    },
    shadow: {
      dark: ' rgba(0,0,0,0.85)',
      light: 'rgba(217,217,217,0.2)',
      glow: 'rgba(255,107,0,0.53)'
    }
  },
  background: {
    solid: '#34393E',
    gradient: {
      color1: '#17191C',
      color2: '#34393E'
    }
  }
}

export const shadows:IShadows = {
  base: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
}

export const fontSizes:IFontSizes = {
  xs: '0.8em',
  s: '1em',
  m: '1.5em',
  l: '2em',
  xl: '2.5em',
}