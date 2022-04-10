export interface IColors {
  brand: IBrandColors,
  action: IActionColors,
  //Rest of types will be deprecated threw refactor
  primmary: IBasicColors,
  secondary: IBasicColors,
  button: IButtonColors,
  background: IBackgroundColors,
  card: ICard
  input: IInput;
}
export interface IActionColors {
  error100: string
  error200: string
  error300: string
  success100: string
  success200: string
  success300: string
}

export interface IBrandColors {
  primary100: string,
  primary200: string,
  primary300: string,
  primary400: string,
  primary500: string,
  secondary100: string,
  secondary200: string,
  secondary300: string,
  secondary400: string,
  secondary500: string,
  tertiary100: string,
  tertiary200: string,
  tertiary300: string,
  tertiary400: string,
  tertiary500: string,
  quaternary100: string,
  quaternary200: string,
  quaternary300: string,
  quaternary400: string,
  quaternary500: string,
  background100: string,
  background200: string,
  background300: string,
  background400: string,
  background500: string,
  text100: string,
  text200: string,
  text300: string,
  text400: string,
  text500: string,
  text600: string,
}

interface IBackgroundColors {
  solid: string,
  gradient: {
    color1: string,
    color2: string,
  }
}

interface ICard {
  color1: string,
  color2: string,
}

interface IInput {
  background: string,
  darkShadow: string,
  lightShadow: string,
}

interface IBasicColors {
  color1: string,
  color2: string,
  color3: string,
}

interface IButtonColors {
  primmary: {
    color1: string,
    color2: string,
    text: string,
  },
  secondary: {
    color1: string,
    color2: string,
    text: string,
  },
  shadow: {
    dark: string
    light: string
    glow: string
  },
}